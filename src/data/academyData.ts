import { FacultyMember, Testimonial } from '../types';
import souravDindaImg from '../assets/images/sourav_dinda_director_official.jpg';

export const FOUNDER_INFO = {
  name: "Mr. Sourav Dinda",
  title: "Founder & Academic Director",
  shortTitle: "Founder & Academic Director, Biley Academy",
  imageUrl: souravDindaImg,
  qualifications: [
    "Master of Philosophy in Computer Science (M.Phil)",
    "Master of Computer Science (M.C.S.)",
    "B.Sc. (Computer Science) with Math and Physics as Minor Paper"
  ],
  experience: "20 Years (Academic & Industry)",
  metrics: [
    { label: "Total Experience", value: "20 Years", detail: "Academic & Industry Leadership" },
    { label: "Research Publications", value: "6", detail: "International Journals & Conferences" },
    { label: "Project Guidance", value: "100+", detail: "Graduate Level Mentorship" },
    { label: "Workshops & FDPs", value: "8+", detail: "2 FDPs & 6 National Workshops" },
    { label: "Conferences Organized", value: "1", detail: "Lead Academic Convener" }
  ],
  academicDistinctions: [
    { title: "M.Phil in Computer Science", desc: "Advanced research in computational algorithms and computer science systems." },
    { title: "Master of Computer Science (M.C.S.)", desc: "Post-graduate specialization in software architectures, data structures, and advanced computing." },
    { title: "B.Sc. (Computer Science)", desc: "Graduated with Mathematics and Physics as minor papers, bridging pure sciences and computational logic." }
  ],
  scholasticProfile: {
    researchPublications: 6,
    fdpAttended: 2,
    conferenceOrganized: 1,
    workshopParticipation: 6,
    projectGuidanceGraduate: 100
  },
  quote: "“Education is not the amount of information that is put into your brain and runs riot there, undigested all your life. We must have life-building, man-making, character-making assimilation of ideas.”",
  tagline: "Inspired by the fearless spirit of Swami Vivekananda (fondly called 'Biley' in his childhood)",
  messageParagraphs: [
    "Welcome to Biley Academy. When we laid the cornerstone of this institution, we had one singular conviction: every child is born with an innate spark of genius, waiting to be ignited by the right catalyst of conceptual clarity, compassionate mentorship, and rigorous practice.",
    "Named in reverence to the childhood name of Swami Vivekananda—'Biley'—our academy embodies the values of fearless inquiry, unshakeable self-confidence, and a relentless pursuit of knowledge. We do not believe in superficial rote memorization. Whether a student is in Class 2 discovering the joy of numbers, science, and languages, or in Class 11–12 mastering Computer Science, Mathematics, and Physical Sciences for board exams and engineering/higher secondary pathways, our pedagogy focuses on building bedrock foundations.",
    "With two decades of blended experience across academia and the technology industry, I believe that modern education must combine timeless human values with analytical and computational problem-solving. At Biley Academy, we equip every learner with state-of-the-art computer labs, hands-on science practicals, intimate batch attention, and dedicated 1-on-1 doubt clearing clinics.",
    "I invite parents and aspiring scholars to experience the Biley difference. Let us join hands to shape not just board toppers and future innovators, but confident, compassionate, and visionary leaders for tomorrow."
  ]
};

export const MISSION_VISION = {
  mission: {
    title: "Our Mission",
    subtitle: "Empowering Minds Through Conceptual Mastery & Character",
    points: [
      "Deliver rigorous, concept-centric classroom coaching tailored to the developmental stages from Class 2 through Class 12.",
      "Demystify complex subjects—Mathematics, Physical Sciences, Biological Sciences, Computer Programming, and English—through active visualization and lab practicals.",
      "Nurture analytical thinking and problem-solving resilience so students thrive in school board exams, Olympiads, and national competitive benchmarks (JEE / WBJEE / CUET).",
      "Maintain accessible, transparent mentorship where every student receives tailored attention regardless of their starting academic proficiency."
    ]
  },
  vision: {
    title: "Our Vision",
    subtitle: "A Benchmark of Pedagogical Excellence in Eastern India & Beyond",
    points: [
      "To be recognized as the most trusted educational ecosystem that bridges foundational schooling with high-stakes competitive entrance readiness.",
      "To foster an environment where intellectual curiosity is celebrated, scientific temper is cultivated, and moral integrity is seamlessly woven into education.",
      "To empower every young scholar to realize their fullest cognitive potential and emerge as innovative problem-solvers in science, technology, engineering, and humanistic fields."
    ]
  },
  coreValues: [
    {
      title: "Conceptual Clarity First",
      desc: "We prioritize understanding the 'why' and 'how' before applying formulas. No rote learning.",
      icon: "Lightbulb"
    },
    {
      title: "Individual Mentorship",
      desc: "Small batch sizes with personalized tracking, 1-on-1 doubt resolution, and parent-teacher synergy.",
      icon: "Users"
    },
    {
      title: "Hands-on Practical Labs",
      desc: "Fully equipped Physics, Chemistry, Biology, and Computer Labs for real experiential mastery.",
      icon: "FlaskConical"
    },
    {
      title: "Character & Discipline",
      desc: "Instilling punctuality, scientific temper, ethical leadership, and resilience inspired by Swami Vivekananda.",
      icon: "Award"
    }
  ]
};

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Mr. Sourav Dinda",
    role: "Founder & Academic Director (Computer Science & Science Lead)",
    subjects: ["Computer Science (Class 6-12)", "Python, Java & AI", "Physics & Mathematics (Minor Foundations)"],
    qualification: "M.Phil (Comp. Sc.), M.C.S., B.Sc. (Comp. Sc. with Math & Physics)",
    experience: "20 Years (Academic & Industry)",
    bio: "Visionary educator with 20 years of blended academic and industry leadership, 6 research publications, and 100+ project mentorships.",
    avatarUrl: souravDindaImg,
    achievement: "6 Research Papers, 100+ Projects Guided & 20 Yrs Academic Leadership"
  },
  {
    id: "fac-2",
    name: "Mr Buddhadeb Chakraborty",
    role: "Senior Faculty - Mathematics",
    subjects: ["Mathematics (Class 8-12)"],
    qualification: "M.Sc. Pure Mathematics, B.Ed",
    experience: "10+ Years",
    bio: "Master of Calculus, Trigonometry and Coordinate Geometry; famous for his rapid mental shortcuts and Olympiad problem sets.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    achievement: "Olympiad Math Specialist & Mental Shortcuts Master"
  },
  {
    id: "fac-3",
    name: "Miss Soumi Bhattacharya",
    role: "Assistant Faculty - Biology",
    subjects: ["Biology (Class 5-12)", "Speciality in Human Physiology"],
    qualification: "M.Sc ongoing (Vidyasagar University), B.Sc. Human Physiology (RNLKWC)",
    experience: "2+ Years",
    bio: "Speciality in Human Physiology; brings cell biology, organ systems, and genetics alive through detailed diagrams and line-by-line NCERT mastery.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    achievement: "Specialist in Human Physiology & Biology Foundations"
  },
  {
    id: "fac-4",
    name: "Mr Soumyadip Dinda",
    role: "Assistant Faculty - Chemistry",
    subjects: ["Chemistry (Class 9-12)", "Organic Reaction Mechanisms"],
    qualification: "M.Sc. (Chemistry), B.Ed. (Final Year)",
    experience: "3+ Years",
    bio: "Makes complex organic mechanisms and inorganic crystal fields crystal clear with visual electron flow models.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    achievement: "Over 90% students score 90+ in Board Chemistry"
  },
  {
    id: "fac-5",
    name: "Mr. Tanay Mondal",
    role: "Senior Faculty - Computer Science",
    subjects: ["Computer Science (Class 6-12)", "Python, Java & Web Design", "Online Mode Only"],
    qualification: "M.Tech (CSE), B.Tech (CSE) (Calcutta University)",
    experience: "16+ Years",
    bio: "Passionate technologist teaching programming from visual algorithmic problem solving to OOPs, SQL and DSA in Class 12.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    achievement: "Available in Online Mode only"
  },
  {
    id: "fac-6",
    name: "Mr Sanjay Dinda",
    role: "Senior Faculty - English Language & Literature",
    subjects: ["English (Class 5-12)", "Grammar, Comprehension & Public Speaking"],
    qualification: "M.A. English",
    experience: "6+ Years",
    bio: "Specialist in transforming students' expressive writing, grammar precision, and confident English elocution.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    achievement: "Average English Board score of 92.6% across batches"
  },
  {
    id: "fac-7",
    name: "Mr. Sumantra Paul",
    role: "Senior Faculty - Computer Science",
    subjects: ["Computer Science (Class 6-12)", "Python, Java & Web Design, AI", "Online Mode Only"],
    qualification: "M.Tech (IT), M.Sc.(Physics) in Visva-Bharati University",
    experience: "7+ Years",
    bio: "Passionate technologist teaching programming from visual algorithmic problem solving to OOPs, SQL and DSA in Class 12.",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    achievement: "Available in Online Mode only"
  }
];

export const ACADEMY_STATS = [
  { label: "Years of Academic Heritage", value: "15+", sub: "Since 2011" },
  { label: "Students Mentored", value: "4,500+", sub: "Class 2 to 12" },
  { label: "Board Exam 90%+ Scorers", value: "96.4%", sub: "CBSE • WBBSE / WBCHSE" },
  { label: "Olympiad & Entrance Selections", value: "850+", sub: "JEE, WBJEE, NTSE" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    studentName: "Sneha Chatterjee",
    gradeOrAchievement: "Class 12 Board Topper (98.2%) & JEE Ranker",
    year: "Batch 2025",
    quote: "Biley Academy transformed my approach to Computer Science, Math, and Physics. Mr. Sourav Dinda sir's conceptual derivations and mentorship made even the toughest problems effortless during board exams and entrances.",
    scoreOrRank: "98.2% Board | JEE Adv Rank 1420",
    rating: 5
  },
  {
    id: "t-2",
    studentName: "Aditya Bhattacharya",
    parentName: "Sanjib Bhattacharya (Parent)",
    gradeOrAchievement: "Class 10 Board (97.6%)",
    year: "Batch 2025",
    quote: "My son joined Biley Academy in Class 6. The foundational training in Science, Biology, and Computer Science built immense confidence. The regular parent-teacher reports kept us completely informed.",
    scoreOrRank: "97.6% CBSE Board",
    rating: 5
  },
  {
    id: "t-3",
    studentName: "Riya Roychowdhury",
    gradeOrAchievement: "Class 12 Pure Science Topper (98.4%) & WBJEE Ranker",
    year: "Batch 2024",
    quote: "The Biology line-by-line NCERT workshops by Miss Soumi ma'am and weekly science mock drills gave me the conceptual precision needed to secure 98.4% in Board exams and top ranks in WBJEE.",
    scoreOrRank: "98.4% Board | WBJEE Rank 420",
    rating: 5
  },
  {
    id: "t-4",
    studentName: "Prithwiraj Saha",
    gradeOrAchievement: "Class 4 Primary Math & Science Olympiad Gold",
    year: "Batch 2025",
    quote: "I love the fun math games and science activities at Biley Academy! The teachers make every lesson engaging.",
    scoreOrRank: "Olympiad Gold Medalist",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "What makes Biley Academy unique compared to other coaching institutes?",
    a: "Unlike typical commercial coaching centers with crowded 100+ student batches, Biley Academy maintains small, focused batches (maximum 15-20 students). We provide individual attention, dedicated hands-on science and computer labs, weekly mock test analytics, and personalized 1-on-1 doubt clearing sessions inspired by the holistic mentorship of Swami Vivekananda."
  },
  {
    q: "Do you teach students from all major education boards?",
    a: "Yes! Our curriculum is tailored for CBSE and West Bengal State Boards — WBBPE (Primary Class 2-4), WBBSE (Secondary Class 5-10 / Madhyamik), and WBCHSE (Higher Secondary Class 11-12) syllabi, alongside foundation programs for competitive benchmarks like Science/Math Olympiads, NTSE, WBJEE, and JEE Main & Advanced."
  },
  {
    q: "How are classes structured for primary grades (Class 2 to 4)?",
    a: "Primary classes focus on joyous, interactive learning without overwhelming pressure. We combine phonics, mental math techniques, hands-on environmental discovery, and curiosity-driven science activities."
  },
  {
    q: "Are laboratory practicals included in the coaching?",
    a: "Absolutely. We have full-fledged in-house laboratories for Physics, Chemistry, Biology, and Computer Science/Application. Every student from Class 6 upwards participates in hands-on experiments, microscope slide preparations, and live coding sessions."
  },
  {
    q: "How can I enroll or book a free trial demo class?",
    a: "You can use our online Admission / Demo Booking form on this website, call or WhatsApp our admissions helpline (+91 89188 07082), or visit our campus directly between 10:00 AM and 8:00 PM Monday through Saturday."
  }
];

export interface RoutineSlot {
  board: 'WBBPE' | 'CBSE';
  classLevel: string;
  days: string;
  timeSlot: string;
  timingType: 'Morning' | 'Afternoon';
  note: string;
}

export interface BatchTimingItem {
  category: string;
  categoryBn?: string;
  schedule: string;
  scheduleBn?: string;
  timings: string;
  timingsBn?: string;
  subjects: string;
  subjectsBn?: string;
  batchSize: string;
  batchSizeBn?: string;
  routinePdfUrl?: string;
  routinePdfName?: string;
  routinePdfSize?: string;
  routineTitle?: string;
  routineTitleBn?: string;
  routineSlots?: RoutineSlot[];
}

export const BATCH_TIMINGS: BatchTimingItem[] = [
  {
    category: "Primary Foundation (Class 2 - 4)",
    categoryBn: "প্রাথমিক ভিত্তি (ক্লাস ২ - ৪)",
    schedule: "WBBPE: Tue, Wed, Sat, Sun | CBSE: Mon, Tue, Wed, Thu, Fri, Sun",
    scheduleBn: "WBBPE: মঙ্গল, বুধ, শনি, রবি | CBSE: সোম, মঙ্গল, বুধ, বৃহস্পতি, শুক্র, রবি",
    timings: "Morning (6:30 AM – 8:00 AM) & Afternoon (4:00 PM – 5:30 PM)",
    timingsBn: "সকাল (৬:৩০ – ৮:০০) এবং বিকাল (৪:০০ – ৫:৩০)",
    subjects: "Bengali, English, Mathematics, Science & EVS",
    subjectsBn: "বাংলা, ইংরেজি, গণিত, পরিবেশ ও বিজ্ঞান",
    batchSize: "Max 12-15 students per batch",
    batchSizeBn: "প্রতি ব্যাচে ১২-১৫ জন শিক্ষার্থী",
    routinePdfUrl: "/assets/aistudio/BA_Routine_Class_2to4_WB_CBSE_2027_258d0f86.pdf",
    routinePdfName: "BA_Routine_Class_2to4_WB_CBSE_2027.pdf",
    routinePdfSize: "222 KB PDF",
    routineTitle: "Provisional Time Table-2027 (Class 2 to 4 WBBPE / CBSE)",
    routineTitleBn: "প্রোভিশনাল সময়সূচি-২০২৭ (ক্লাস ২ থেকে ৪ WBBPE / CBSE)",
    routineSlots: [
      {
        board: "WBBPE",
        classLevel: "WB/CLASS-2",
        days: "Saturday & Tuesday",
        timeSlot: "6:30 AM – 8:00 AM",
        timingType: "Morning",
        note: "All Subjects (1 hr/per subject)"
      },
      {
        board: "WBBPE",
        classLevel: "WB/CLASS-3",
        days: "Monday & Wednesday",
        timeSlot: "6:30 AM – 8:00 AM",
        timingType: "Morning",
        note: "All Subjects (1 hr/per subject)"
      },
      {
        board: "WBBPE",
        classLevel: "WB/CLASS-4",
        days: "Saturday & Sunday",
        timeSlot: "4:00 PM – 5:30 PM",
        timingType: "Afternoon",
        note: "All Subjects (1 hr/per subject)"
      },
      {
        board: "CBSE",
        classLevel: "CBSE/CLASS-2",
        days: "Tuesday & Wednesday",
        timeSlot: "4:00 PM – 5:30 PM",
        timingType: "Afternoon",
        note: "All Subjects (1 hr/per subject)"
      },
      {
        board: "CBSE",
        classLevel: "CBSE/CLASS-3",
        days: "Thursday & Friday",
        timeSlot: "4:00 PM – 5:30 PM",
        timingType: "Afternoon",
        note: "All Subjects (1 hr/per subject)"
      },
      {
        board: "CBSE",
        classLevel: "CBSE/CLASS-4",
        days: "Monday (4:00–5:30 PM) & Sunday (6:30–8:00 AM)",
        timeSlot: "Morning & Afternoon Slots",
        timingType: "Morning",
        note: "All Subjects (1 hr/per subject)"
      }
    ]
  },
  {
    category: "Upper Primary (Class 5 - 8)",
    schedule: "Tuesday, Thursday & Saturday",
    timings: "4:00 PM – 6:45 PM",
    subjects: "Math, Science, Biology, English, Computer Science (Cl 6-8)",
    batchSize: "Max 16 students per batch"
  },
  {
    category: "Secondary (Class 9 & 10 Board Special)",
    schedule: "Monday to Saturday (6 Days)",
    timings: "4:30 PM – 7:45 PM",
    subjects: "Math, Physics-Chemistry, Biology, English, Computer Science / App",
    batchSize: "Max 18 students per batch + Sunday Mock Tests"
  },
  {
    category: "Higher Secondary (Class 11 & 12 Board + Entrance)",
    schedule: "Monday to Saturday (6 Days)",
    timings: "3:00 PM – 8:30 PM (Flexible Stream Slots)",
    subjects: "Math, Physics, Chemistry, Biology, English, Computer Science / App",
    batchSize: "Max 20 students + Weekly All-India Level Diagnostic Tests"
  }
];
