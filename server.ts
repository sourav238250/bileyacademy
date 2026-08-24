import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return aiClient;
}

// In-memory store for general contact inquiries
const contactMessages: Array<{
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
  timestamp: string;
}> = [];

// In-memory store for admission inquiries and callback requests
const inquiries: Array<{
  id: string;
  studentName: string;
  parentName: string;
  gradeLevel: string;
  subjects: string[];
  phone: string;
  email: string;
  targetGoal: string;
  date: string;
}> = [
  {
    id: "BILEY-1001",
    studentName: "Ananya Mukherjee",
    parentName: "Subhash Mukherjee",
    gradeLevel: "Class 10 (Secondary)",
    subjects: ["Math", "Science", "Computer Science"],
    phone: "+91 98300 12345",
    email: "ananya.m@example.com",
    targetGoal: "Board Exam 95%+ & Science Olympiad",
    date: new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" }),
  },
  {
    id: "BILEY-1002",
    studentName: "Rohan Sengupta",
    parentName: "Dr. Priyam Sengupta",
    gradeLevel: "Class 12 (Higher Secondary)",
    subjects: ["Physics", "Chemistry", "Math", "Computer Application"],
    phone: "+91 98311 98765",
    email: "rohan.s@example.com",
    targetGoal: "JEE Main & Advanced + WBCHSE/CBSE Topper",
    date: new Date(Date.now() - 86400000).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" }),
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", academy: "Biley Academy", timestamp: new Date().toISOString() });
  });

  // Get Inquiries (for live admin demo/stats)
  app.get("/api/inquiries", (_req, res) => {
    res.json({ success: true, inquiries });
  });

  // Submit Admission / Counseling Inquiry
  app.post("/api/inquiries", (req, res) => {
    try {
      const { studentName, parentName, gradeLevel, subjects, phone, email, targetGoal } = req.body;
      if (!studentName || !phone || !gradeLevel) {
        return res.status(400).json({ error: "Missing required student details" });
      }

      const newInquiry = {
        id: `BILEY-${Math.floor(1000 + Math.random() * 9000)}`,
        studentName,
        parentName: parentName || "Guardian",
        gradeLevel,
        subjects: Array.isArray(subjects) ? subjects : [subjects || "All Core Subjects"],
        phone,
        email: email || "Not provided",
        targetGoal: targetGoal || "Academic Excellence & Foundation",
        date: new Date().toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" }),
      };

      inquiries.unshift(newInquiry);
      res.json({
        success: true,
        message: "Admission inquiry received! Our senior academic counselor will call you within 24 hours.",
        inquiry: newInquiry
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to submit inquiry" });
    }
  });

  // Submit General Contact Inquiry
  app.post("/api/contact", (req, res) => {
    try {
      const { fullName, email, phone, inquiryType, message } = req.body;
      
      // Validation
      if (!fullName || !fullName.trim()) {
        return res.status(400).json({ error: "Full Name is required" });
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email.trim())) {
        return res.status(400).json({ error: "A valid email address is required" });
      }

      if (!message || !message.trim()) {
        return res.status(400).json({ error: "Message content is required" });
      }

      const newMessage = {
        id: `MSG-${Math.floor(1000 + Math.random() * 9000)}`,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone ? phone.trim() : undefined,
        inquiryType: inquiryType || "General Inquiry",
        message: message.trim(),
        timestamp: new Date().toISOString()
      };

      contactMessages.unshift(newMessage);

      res.json({
        success: true,
        message: "Thank you for reaching out! Our academic administration team has received your message and will respond to your email promptly.",
        contactMessage: newMessage
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to process contact inquiry" });
    }
  });

  // AI Academic Counselor & Doubt Solver for Biley Academy
  app.post("/api/ai-tutor", async (req, res) => {
    try {
      const { question, grade, subject, context } = req.body;
      if (!question) {
        return res.status(400).json({ error: "Question or prompt is required" });
      }

      const ai = getAIClient();
      if (!ai) {
        // High quality fallback responses if API key is not yet set
        return res.json({
          success: true,
          answer: `[Biley Academy Academic Mentor]: Here is a structured conceptual guide for **${subject || 'your subject'}** (${grade || 'General'}):

1. **Fundamental Concept**: Break down the problem into basic principles taught in our classrooms.
2. **Step-by-Step Approach**: 
   - Identify given values and formula to apply.
   - For Math/Science: Draw diagram / define equations.
   - For Computer Science: Trace logic step-by-step.
   - For English/Biology: Use precise keywords and structured definitions.
3. **Biley Academy Tip**: Regular revision through our weekly mock test series and 1-on-1 doubt clearing clinics will cement this concept.

*Tip: Connect your Gemini API Key in Settings for live interactive AI solving of complex equations and instant code walkthroughs!*`
        });
      }

      const prompt = `You are the chief Academic Mentor and AI Tutor at "Biley Academy", a premier coaching institute known for building strong foundations from Class 1 to Class 12.
Student Grade: ${grade || "Not specified"}
Subject: ${subject || "General"}
Context: ${context || "General student query"}

Student Question: "${question}"

Guidelines:
1. Provide an inspiring, crystal-clear, pedagogically sound explanation appropriate for the student's grade level.
2. If it's a primary class (Class 1-4), use simple language, relatable everyday examples, and positive encouragement.
3. If it's Upper Primary (Class 5-8), explain key logic, definitions, and foundational concepts.
4. If it's Secondary (Class 9-10), include board exam keywords, structured points, formulas, or code snippets.
5. If it's Higher Secondary (Class 11-12), provide rigorous, competitive-exam level depth (CBSE/WBCHSE/ISC + JEE/NEET/Olympiad hints where appropriate).
6. Conclude with a quick 1-sentence "Biley Academy Pro-Tip" for mastery. Keep formatting clean with Markdown.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
      });

      res.json({
        success: true,
        answer: response.text || "Thank you for asking! Keep practicing consistent problem solving."
      });
    } catch (err: any) {
      console.error("AI Tutor error:", err);
      res.status(500).json({ error: err.message || "Failed to generate AI response" });
    }
  });

  // AI Quiz Generator for grade and subject
  app.post("/api/generate-quiz", async (req, res) => {
    try {
      const { grade, subject, topic } = req.body;
      const ai = getAIClient();

      if (!ai) {
        // Fallback pre-configured smart quiz
        return res.json({
          success: true,
          questions: [
            {
              id: 1,
              question: `In ${subject || 'Science'}, what is the fundamental building block or primary law related to ${topic || 'the curriculum'}?`,
              options: [
                "Fundamental Law / Cell / Unit",
                "Secondary Derivative",
                "Random Variation",
                "None of the above"
              ],
              correctAnswer: 0,
              explanation: "Foundational mastery begins with mastering the core axioms and primary units taught in Biley Academy."
            },
            {
              id: 2,
              question: `Which approach is emphasized at Biley Academy for solving problems in ${subject || 'Mathematics'}?`,
              options: [
                "Rote memorization without understanding",
                "Conceptual clarity followed by step-by-step systematic deduction",
                "Guessing multiple choices randomly",
                "Skipping foundational theory"
              ],
              correctAnswer: 1,
              explanation: "Biley Academy's core pedagogy stresses conceptual clarity and analytical thinking over rote memorization."
            }
          ]
        });
      }

      const prompt = `Generate a 3-question multiple choice diagnostic assessment for a student in "${grade || 'Class 9'}" for Subject "${subject || 'Science'}" on Topic "${topic || 'Core Curriculum'}".
Return strictly valid JSON matching this schema:
[
  {
    "id": 1,
    "question": "Question text...",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctAnswer": 0,
    "explanation": "Brief explanation of why option 0 is correct"
  }
]
Do not include backticks or markdown fences, only the pure JSON array.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: prompt,
      });

      let questions = [];
      try {
        const cleanText = (response.text || "").replace(/```json/g, "").replace(/```/g, "").trim();
        questions = JSON.parse(cleanText);
      } catch (parseErr) {
        questions = [
          {
            id: 1,
            question: `Key concept question in ${subject}: Which statement is mathematically and conceptually accurate?`,
            options: ["Consistent logical deduction yields accurate results", "Formula only works without proof", "Rules change randomly", "None"],
            correctAnswer: 0,
            explanation: "Core fundamentals lead directly to logical proofs."
          }
        ];
      }

      res.json({ success: true, questions });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Failed to generate quiz" });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Biley Academy server running on http://localhost:${PORT}`);
  });
}

startServer();
