import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  Lightbulb, 
  RefreshCw, 
  CheckCircle2,
  Atom,
  Calculator,
  Code
} from 'lucide-react';

import confetti from 'canvas-confetti';
import { useAuth } from '../context/AuthContext';
import { saveAiDoubtToFirestore } from '../lib/firestoreService';

export const AiTutorSection: React.FC = () => {
  const { currentUser, userProfile } = useAuth();
  const [selectedGrade, setSelectedGrade] = useState('Class 10 (Secondary)');
  const [selectedSubject, setSelectedSubject] = useState('Science (Physics/Chemistry)');
  const [questionInput, setQuestionInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState<Array<{ sender: 'user' | 'tutor'; text: string; time: string }>>([
    {
      sender: 'tutor',
      text: `Hello! I am your **Biley Academy Academic Mentor & AI Doubt Solver**. 
Whether you need a step-by-step derivation in Physics/Math, an explanation of cell genetics in Biology, a walkthrough of Python loops, or grammar tips for English—ask me anything related to Class 1 through Class 12!`,
      time: 'Just now'
    }
  ]);

  const presetQuestions = [
    { grade: 'Class 10 (Secondary)', subject: 'Mathematics', q: 'How do I solve quadratic equations using middle-term splitting step-by-step?' },
    { grade: 'Class 12 (Higher Secondary)', subject: 'Physics', q: 'Explain Snell\'s law of refraction and the conditions for Total Internal Reflection (TIR).' },
    { grade: 'Class 8 (Upper Primary)', subject: 'Biology', q: 'What is the main difference between Plant and Animal cells under a microscope?' },
    { grade: 'Class 12 (Higher Secondary)', subject: 'Computer Science', q: 'How do I implement a Stack in Python using lists with PUSH and POP operations?' },
    { grade: 'Class 3 (Primary)', subject: 'English', q: 'Explain the difference between Common Nouns and Proper Nouns with fun examples.' }
  ];

  const handleAskQuestion = async (qText?: string) => {
    const query = qText || questionInput;
    if (!query.trim() || loading) return;

    const userMsg = {
      sender: 'user' as const,
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversation((prev) => [...prev, userMsg]);
    setQuestionInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          grade: selectedGrade,
          subject: selectedSubject,
        })
      });
      const data = await res.json();
      
      const answerText = data.answer || "Thank you for asking! Remember: consistent conceptual practice builds lasting mastery.";

      // Record question & answer to Firestore database
      try {
        await saveAiDoubtToFirestore({
          userId: currentUser?.uid || 'guest',
          userEmail: currentUser?.email || undefined,
          userName: currentUser?.displayName || undefined,
          grade: selectedGrade,
          subject: selectedSubject,
          question: query,
          answer: answerText
        });
      } catch (dbErr) {
        console.warn('Could not record AI doubt to Firestore:', dbErr);
      }

      const tutorMsg = {
        sender: 'tutor' as const,
        text: answerText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setConversation((prev) => [...prev, tutorMsg]);
    } catch (err) {
      setConversation((prev) => [
        ...prev,
        {
          sender: 'tutor',
          text: "I'm having a brief connection delay, but here is a fundamental tip: always write down given values and identify the governing principle before solving!",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tutor" className="py-16 sm:py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Bot className="w-4 h-4 text-amber-400" />
            <span>Interactive AI Learning Assistant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Biley AI Academic Mentor & Doubt Solver
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            Get instant conceptual explanations, formula derivations, code walkthroughs, and study strategies tailored to your exact class and subject.
          </p>
        </div>

        {/* Tutor Interface Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
          
          {/* Controls Bar: Select Grade & Subject */}
          <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Your Grade:</label>
                <select
                  id="ai-tutor-grade-select"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-xs text-white rounded-xl px-3 py-1.5 focus:outline-none focus:border-amber-400"
                >
                  <option value="Class 1-4 (Primary)">Class 1 to 4 (Primary Foundation)</option>
                  <option value="Class 5-8 (Upper Primary)">Class 5 to 8 (Upper Primary)</option>
                  <option value="Class 9 (Secondary)">Class 9 (Secondary)</option>
                  <option value="Class 10 (Secondary)">Class 10 (Board Exam Special)</option>
                  <option value="Class 11 (Higher Secondary)">Class 11 (HS + JEE)</option>
                  <option value="Class 12 (Higher Secondary)">Class 12 (Board + Competitive)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">Subject:</label>
                <select
                  id="ai-tutor-subject-select"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="bg-slate-950 border border-slate-700 text-xs text-white rounded-xl px-3 py-1.5 focus:outline-none focus:border-amber-400"
                >
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="Science (General/Physical)">Science (General / Physical)</option>
                  <option value="Computer Science / Application">Computer Science / Application</option>
                  <option value="English">English Language & Literature</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-xs text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pedagogical AI Engine</span>
            </div>
          </div>

          {/* Preset Suggested Questions */}
          <div className="p-3 bg-slate-900/40 border-b border-slate-800/80 flex items-center space-x-2 overflow-x-auto text-xs scrollbar-thin">
            <span className="text-[11px] text-slate-400 font-semibold shrink-0">Try asking:</span>
            {presetQuestions.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedGrade(preset.grade);
                  setSelectedSubject(preset.subject);
                  handleAskQuestion(preset.q);
                }}
                className="shrink-0 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 transition-colors border border-slate-700/60 truncate max-w-xs text-left"
              >
                "{preset.q}"
              </button>
            ))}
          </div>

          {/* Conversation Area */}
          <div className="p-4 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto bg-slate-950/70">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    msg.sender === 'user'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-indigo-600 text-white'
                  }`}
                >
                  {msg.sender === 'user' ? 'You' : <Bot className="w-5 h-5" />}
                </div>

                <div
                  className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-amber-500/15 border border-amber-500/30 text-amber-100 rounded-tr-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-wrap'
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-[10px] text-slate-400 text-right mt-1.5">
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs sm:text-sm text-slate-400">
                  Biley Academic Mentor is formulating a structured concept explanation...
                </div>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center space-x-3">
            <input
              type="text"
              id="ai-tutor-input"
              placeholder={`Ask any doubt in ${selectedSubject} (${selectedGrade})...`}
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAskQuestion();
              }}
              className="flex-1 bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
            />

            <button
              id="ai-tutor-send-btn"
              onClick={() => handleAskQuestion()}
              disabled={loading || !questionInput.trim()}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md disabled:opacity-50 transition-all flex items-center space-x-1.5 shrink-0"
            >
              <span>Ask</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
