import { FacultyMember, Testimonial } from '../types';
import souravDindaImg from '../assets/images/sourav_dinda_color_portrait_1787657237922.jpg';

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
    "Named in reverence to the childhood name of Swami Vivekananda—'Biley'—our academy embodies the values of fearless inquiry, unshakeable self-confidence, and a relentless pursuit of knowledge. We do not believe in superficial rote memorization. Whether a student is in Class 1 discovering the joy of numbers, science, and languages, or in Class 11–12 mastering Computer Science, Mathematics, and Physical Sciences for board exams and engineering/higher secondary pathways, our pedagogy focuses on building bedrock foundations.",
    "With two decades of blended experience across academia and the technology industry, I believe that modern education must combine timeless human values with analytical and computational problem-solving. At Biley Academy, we equip every learner with state-of-the-art computer labs, hands-on science practicals, intimate batch attention, and dedicated 1-on-1 doubt clearing clinics.",
    "I invite parents and aspiring scholars to experience the Biley difference. Let us join hands to shape not just board toppers and future innovators, but confident, compassionate, and visionary leaders for tomorrow."
  ]
};

export const MISSION_VISION = {
  mission: {
    title: "Our Mission",
    subtitle: "Empowering Minds Through Conceptual Mastery & Character",
    points: [
      "Deliver rigorous, concept-centric classroom coaching tailored to the developmental stages from Class 1 through Class 12.",
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
    subjects: ["Computer Science (Class 1-12)", "Python, Java & AI", "Physics & Mathematics (Minor Foundations)"],
    qualification: "M.Phil (Comp. Sc.), M.C.S., B.Sc. (Comp. Sc. with Math & Physics)",
    experience: "20 Years (Academic & Industry)",
    bio: "Visionary educator with 20 years of blended academic and industry leadership, 6 research publications, and 100+ project mentorships.",
    avatarUrl: souravDindaImg,
    achievement: "6 Research Papers, 100+ Projects Guided & 20 Yrs Academic Leadership"
  },
  {
    id: "fac-2",
    name: "Prof. Aniruddha Roy",
    role: "Senior Faculty - Mathematics",
    subjects: ["Mathematics (Class 9-12)", "Higher Secondary Calculus"],
    qualification: "M.Sc. Pure Mathematics, ISI Associate",
    experience: "18+ Years",
    bio: "Master of Calculus, Trigonometry and Coordinate Geometry; famous for his rapid mental shortcuts and Olympiad problem sets.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    achievement: "Author of 3 best-selling Board Mathematics guides"
  },
  {
    id: "fac-3",
    name: "Dr. Malabika Dasgupta",
    role: "Senior Faculty - Biological Sciences",
    subjects: ["Biology (Class 5-12)", "Genetics & Advanced Botany/Zoology"],
    qualification: "M.Sc. Zoology, Ph.D. in Genetics (CSIR-NET JRF)",
    experience: "15+ Years",
    bio: "Brings cell biology and genetics alive through 3D diagram workshops and line-by-line NCERT mastery.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    achievement: "Consistently producing 95%+ Board Scorers in Biological Sciences"
  },
  {
    id: "fac-4",
    name: "Prof. Tathagata Ghosh",
    role: "Senior Faculty - Chemistry",
    subjects: ["Chemistry (Class 9-12)", "Organic Reaction Mechanisms"],
    qualification: "M.Tech Chemical Sciences, GATE Topper",
    experience: "14+ Years",
    bio: "Makes complex organic mechanisms and inorganic crystal fields crystal clear with visual electron flow models.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    achievement: "Over 90% students score 90+ in Board Chemistry"
  },
  {
    id: "fac-5",
    name: "Shreya Sen",
    role: "Lead - Computer Science & Coding Wing",
    subjects: ["Computer Science (Class 1-12)", "Python, Java & Web Design"],
    qualification: "B.Tech Computer Science (Jadavpur University)",
    experience: "10+ Years",
    bio: "Passionate technologist teaching programming from Scratch block coding in primary classes to OOPs, SQL and DSA in Class 12.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    achievement: "Guided students to win National Coding Olympiads"
  },
  {
    id: "fac-6",
    name: "Debolina Mukherjee",
    role: "Faculty - English Language & Literature",
    subjects: ["English (Class 1-12)", "Grammar, Comprehension & Public Speaking"],
    qualification: "M.A. English (Calcutta University), Cambridge CELTA",
    experience: "12+ Years",
    bio: "Specialist in transforming students' expressive writing, grammar precision, and confident English elocution.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    achievement: "Average English Board score of 94.6% across batches"
  }
];

export const ACADEMY_STATS = [
  { label: "Years of Academic Heritage", value: "15+", sub: "Since 2011" },
  { label: "Students Mentored", value: "4,500+", sub: "Class 1 to 12" },
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
    quote: "The Biology line-by-line NCERT workshops by Dr. Malabika ma'am and weekly science mock drills gave me the conceptual precision needed to secure 98.4% in Board exams and top ranks in WBJEE.",
    scoreOrRank: "98.4% Board | WBJEE Rank 420",
    rating: 5
  },
  {
    id: "t-4",
    studentName: "Prithwiraj Saha",
    gradeOrAchievement: "Class 4 Primary Math & Science Olympiad Gold",
    year: "Batch 2025",
    quote: "I love the computer lab and the fun math games at Biley Academy! Shreya ma'am taught me how to make games in Scratch coding and math puzzles.",
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
    a: "Yes! Our curriculum is tailored for CBSE and West Bengal State Boards — WBBPE (Primary Class 1-4), WBBSE (Secondary Class 5-10 / Madhyamik), and WBCHSE (Higher Secondary Class 11-12) syllabi, alongside foundation programs for competitive benchmarks like Science/Math Olympiads, NTSE, WBJEE, and JEE Main & Advanced."
  },
  {
    q: "How are classes structured for primary grades (Class 1 to 4)?",
    a: "Primary classes focus on joyous, interactive learning without overwhelming pressure. We combine phonics, mental math abacus techniques, touch-and-learn computing (Scratch/Tux Paint), and live curiosity-driven science experiments."
  },
  {
    q: "Are laboratory practicals included in the coaching?",
    a: "Absolutely. We have full-fledged in-house laboratories for Physics, Chemistry, Biology, and Computer Science/Application. Every student from Class 5 upwards participates in hands-on experiments, microscope slide preparations, and live coding sessions."
  },
  {
    q: "How can I enroll or book a free trial demo class?",
    a: "You can use our online Admission / Demo Booking form on this website, call our admissions helpline (+91 98300 24567), or visit our campus directly between 10:00 AM and 8:00 PM Monday through Saturday."
  }
];

export const BATCH_TIMINGS = [
  {
    category: "Primary Foundation (Class 1 - 4)",
    schedule: "Monday, Wednesday & Friday",
    timings: "3:30 PM – 5:30 PM",
    subjects: "English, Mathematics, Computer, Science",
    batchSize: "Max 12 students per batch"
  },
  {
    category: "Upper Primary (Class 5 - 8)",
    schedule: "Tuesday, Thursday & Saturday",
    timings: "4:00 PM – 6:45 PM",
    subjects: "Math, Science, Biology, English, Computer Science",
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
