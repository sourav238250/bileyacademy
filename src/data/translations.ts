import { GradeCategory } from '../types';

export type Language = 'en' | 'bn';

export interface Translations {
  // Brand & Top Header
  topBannerAdmissions: string;
  topBannerClasses: string;
  topBannerHelpline: string;
  topBannerBookDemo: string;
  academyName: string;
  academyTagline: string;
  sinceYear: string;
  
  // Navigation Links
  navNoticeboard: string;
  navAbout: string;
  navMissionVision: string;
  navFounder: string;
  navCurriculum: string;
  navStudentDashboard: string;
  navGallery: string;
  navAiTutor: string;
  navQuiz: string;
  navFaculty: string;
  navBatches: string;
  navAdmission: string;
  navContact: string;
  navBatchRoutineBtn: string;
  navEnrollDemoBtn: string;
  navAllGrades: string;
  navLiveAi: string;
  navTracker: string;

  // Hero Section
  heroBadge: string;
  heroHeadlinePrefix: string;
  heroHeadlineHighlight: string;
  heroSubtitle: string;
  heroCheck1: string;
  heroCheck2: string;
  heroCheck3: string;
  heroCheck4: string;
  heroCheck5: string;
  heroCheck6: string;
  heroCtaEnroll: string;
  heroCtaCurriculum: string;
  heroCtaAiTutor: string;
  heroTabNotices: string;
  heroTabGrades: string;
  heroSelectGradeHelp: string;

  // Stats
  statStudents: string;
  statStudentsLabel: string;
  statSuccess: string;
  statSuccessLabel: string;
  statFaculty: string;
  statFacultyLabel: string;
  statBatchSize: string;
  statBatchSizeLabel: string;

  // Official Admission Banner
  officialBannerBadge: string;
  officialBannerHeading: string;
  officialBannerSubheading: string;
  officialBannerFeature1: string;
  officialBannerFeature2: string;
  officialBannerFeature3: string;
  officialBannerFeature4: string;
  officialBannerCallNow: string;
  officialBannerBookSeat: string;
  officialBannerLocation: string;

  // About Section
  aboutBadge: string;
  aboutTitle: string;
  aboutSubtitle: string;
  swamiVivekanandaTitle: string;
  swamiVivekanandaLife: string;
  swamiVivekanandaChildhoodName: string;
  swamiVivekanandaQuote: string;
  swamiVivekanandaMotto: string;
  aboutOriginBadge: string;
  aboutOriginTitle: string;
  aboutOriginP1: string;
  aboutOriginP2: string;
  aboutOriginP3: string;
  aboutPillarsTitle: string;
  aboutPillar1Title: string;
  aboutPillar1Desc: string;
  aboutPillar2Title: string;
  aboutPillar2Desc: string;
  aboutPillar3Title: string;
  aboutPillar3Desc: string;
  aboutPillar4Title: string;
  aboutPillar4Desc: string;

  // Mission & Vision
  mvBadge: string;
  mvTitle: string;
  mvSubtitle: string;
  missionTitle: string;
  missionSubtitle: string;
  visionTitle: string;
  visionSubtitle: string;
  coreValuesTitle: string;

  // Founder Section
  founderBadge: string;
  founderTitle: string;
  founderTagline: string;
  founderRole: string;
  founderExperience: string;
  founderQualificationsTitle: string;
  founderScholasticTitle: string;
  founderPubs: string;
  founderPubsDesc: string;
  founderProjects: string;
  founderProjectsDesc: string;
  founderFdps: string;
  founderFdpsDesc: string;
  founderWorkshops: string;
  founderWorkshopsDesc: string;
  founderConfTitle: string;
  founderConfValue: string;
  founderMaximTitle: string;
  founderMaximText: string;
  founderLetterHeader: string;
  founderCounselingBadge: string;
  founderPillar1: string;
  founderPillar1Desc: string;
  founderPillar2: string;
  founderPillar2Desc: string;
  founderPillar3: string;
  founderPillar3Desc: string;

  // Curriculum Section
  curriculumBadge: string;
  curriculumTitle: string;
  curriculumSubtitle: string;
  tabPrimary: string;
  tabUpperPrimary: string;
  tabSecondary: string;
  tabHigherSecondary: string;
  primaryGradeDesc: string;
  upperPrimaryGradeDesc: string;
  secondaryGradeDesc: string;
  higherSecondaryGradeDesc: string;
  viewDetailedSyllabus: string;
  keyChapters: string;
  learningOutcomes: string;
  practicalLabsAvailable: string;
  weeklyHoursText: string;
  bookClassForSubject: string;
  exploreFullDashboard: string;

  // Student Dashboard
  dashboardBadge: string;
  dashboardTitle: string;
  dashboardSubtitle: string;
  dashboardStudentProfile: string;
  dashboardRollNo: string;
  dashboardBatch: string;
  dashboardAttendance: string;
  dashboardStreak: string;
  dashboardTrackProgress: string;
  dashboardSubjectProgress: string;
  dashboardCompleted: string;
  dashboardTestQuizBtn: string;
  dashboardAiAskBtn: string;

  // AI Doubt Solver
  aiTutorBadge: string;
  aiTutorTitle: string;
  aiTutorSubtitle: string;
  aiTutorSelectSubject: string;
  aiTutorPlaceholder: string;
  aiTutorAskButton: string;
  aiTutorSampleQueries: string;
  aiTutorStepByStep: string;
  aiTutorClearChat: string;

  // Quiz Section
  quizBadge: string;
  quizTitle: string;
  quizSubtitle: string;
  quizNextBtn: string;
  quizSubmitBtn: string;
  quizRestartBtn: string;
  quizScoreText: string;
  quizExplanation: string;

  // Faculty Section
  facultyBadge: string;
  facultyTitle: string;
  facultySubtitle: string;
  facultyExperienceLabel: string;
  facultyAchievementsLabel: string;
  testimonialsTitle: string;
  testimonialsSubtitle: string;

  // Gallery Section
  galleryBadge: string;
  galleryTitle: string;
  gallerySubtitle: string;
  galleryFilterAll: string;
  galleryFilterLeadership: string;
  galleryFilterClassrooms: string;
  galleryFilterLabs: string;
  galleryFilterMentorship: string;
  galleryFilterEvents: string;
  galleryEnlargeHint: string;

  // Batch Schedule
  batchesBadge: string;
  batchesTitle: string;
  batchesSubtitle: string;
  batchDaysLabel: string;
  batchTimingsLabel: string;
  batchSeatsLabel: string;
  batchModeLabel: string;
  batchReserveBtn: string;

  // Admission & Contact
  admissionBadge: string;
  admissionTitle: string;
  admissionSubtitle: string;
  admissionStudentName: string;
  admissionParentName: string;
  admissionPhone: string;
  admissionEmail: string;
  admissionGrade: string;
  admissionSelectSubjects: string;
  admissionTargetGoal: string;
  admissionPreferredTime: string;
  admissionSubmitBtn: string;
  admissionSuccessMsg: string;

  contactBadge: string;
  contactTitle: string;
  contactSubtitle: string;
  contactAddressLabel: string;
  contactPhoneLabel: string;
  contactEmailLabel: string;
  contactHoursLabel: string;
  contactFormName: string;
  contactFormEmail: string;
  contactFormPhone: string;
  contactFormType: string;
  contactFormMsg: string;
  contactFormSendBtn: string;
  contactFaqTitle: string;

  // Footer
  footerAboutText: string;
  footerQuickLinks: string;
  footerCurriculumLinks: string;
  footerContactUs: string;
  footerRights: string;
  footerMotto: string;

  // Extra Aliases & Component Headings
  heroTitle: string;
  aboutHeading: string;
  aboutGuidingInspiration: string;
  aboutSwamijiName: string;
  aboutSwamijiChildhood: string;
  aboutQuote: string;
  aboutQuoteAuthor: string;
  aboutWhyNamedPrefix: string;
  aboutWhyNamedHighlight: string;
  aboutStoryP1: string;
  aboutStoryP2: string;
  aboutNoRoteTitle: string;
  aboutNoRoteDesc: string;
  aboutSmallBatchTitle: string;
  aboutSmallBatchDesc: string;
  admissionHeading: string;
  modalStudentName: string;
  modalParentName: string;
  modalPhone: string;
  modalEmail: string;
  modalSelectClass: string;
  modalSelectSubjects: string;
  modalSubmitBtn: string;
  contactHeading: string;
  curriculumHeading: string;
  founderHeading: string;
  missionBadge: string;
  missionHeading: string;
  navMission: string;
  navProgress: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    topBannerAdmissions: "Admissions Open 2026-27",
    topBannerClasses: "Classes 1 to 12 (CBSE / ICSE / WBCHSE + JEE / NEET)",
    topBannerHelpline: "+91 97325 31730",
    topBannerBookDemo: "Book 2 Free Demo Classes",
    academyName: "Biley Academy",
    academyTagline: "Premier Coaching • Class 1 to 12",
    sinceYear: "Since 2026",

    navNoticeboard: "Noticeboard",
    navAbout: "About Us",
    navMissionVision: "Mission & Vision",
    navFounder: "Founder Message",
    navCurriculum: "Curriculum (Cl 1-12)",
    navStudentDashboard: "Student Progress",
    navGallery: "Campus Gallery",
    navAiTutor: "AI Doubt Solver",
    navQuiz: "Diagnostic Quiz",
    navFaculty: "Faculty & Results",
    navBatches: "Batch Routine",
    navAdmission: "Admissions",
    navContact: "Contact Us",
    navBatchRoutineBtn: "Batch Routine",
    navEnrollDemoBtn: "Enroll / Free Demo",
    navAllGrades: "All Grades",
    navLiveAi: "Live AI",
    navTracker: "Tracker",

    heroBadge: "Awakening Potential • Inspired by Swami Vivekananda",
    heroHeadlinePrefix: "Mastery in Every Subject from",
    heroHeadlineHighlight: "Class 1 to Class 12",
    heroSubtitle: "Biley Academy delivers structured, concept-first coaching across English, Mathematics, Science, Biology, Physics, Chemistry, and Computer Science / Application in Jamna, Pingla. Offline foundations for primary grades and Hybrid JEE/NEET orientation for secondary & higher secondary.",
    heroCheck1: "Small Batches (15-18)",
    heroCheck2: "Hands-on Science Labs",
    heroCheck3: "Weekly Mock Tests",
    heroCheck4: "1-on-1 Doubt Clearing",
    heroCheck5: "Computer Practical Labs",
    heroCheck6: "Parent Monthly Progress",
    heroCtaEnroll: "Book Free Demo & Admission",
    heroCtaCurriculum: "Explore Class 1-12 Syllabus",
    heroCtaAiTutor: "Try AI Doubt Solver",
    heroTabNotices: "Official Notices (2026-27)",
    heroTabGrades: "Quick Grade Navigator",
    heroSelectGradeHelp: "Select your target class to jump directly to its complete curriculum, schedule & subject roadmap.",

    statStudents: "500+",
    statStudentsLabel: "Enrolled Scholars",
    statSuccess: "98.4%",
    statSuccessLabel: "Board & Exam Pass Rate",
    statFaculty: "15+",
    statFacultyLabel: "Senior Specialist Mentors",
    statBatchSize: "15-18",
    statBatchSizeLabel: "Students per Batch Limit",

    officialBannerBadge: "OFFICIAL NOTICE • SESSION 2026-27",
    officialBannerHeading: "ADMISSIONS OPEN FOR ALL BATCHES",
    officialBannerSubheading: "Classes 1 to 12 • Comprehensive Subject Coverage • ICSE, CBSE & WBBSE / WBCHSE",
    officialBannerFeature1: "All Core Subjects: English, Math, Science, Physics, Chemistry, Biology & Computer Science",
    officialBannerFeature2: "Specialized Computer Programming Labs: Scratch, Python, Java & Web Tech",
    officialBannerFeature3: "Dedicated Foundation for Olympiads, JEE (Main + Adv) & NEET-UG",
    officialBannerFeature4: "Personalized 1-on-1 Doubt Clearing Clinics with Founder & Senior Faculty",
    officialBannerCallNow: "Call Helpline: +91 97325 31730",
    officialBannerBookSeat: "Reserve Seat / Free Demo",
    officialBannerLocation: "Campus: Jamna, Pingla, Paschim Medinipur, West Bengal - 721140",

    aboutBadge: "Our Heritage & Guiding Light",
    aboutTitle: "About Biley Academy",
    aboutSubtitle: "Founded with a vision to revolutionize academic coaching by synthesizing ancient values of character, fearlessness, and scientific inquiry inspired by Swami Vivekananda.",
    swamiVivekanandaTitle: "Swami Vivekananda",
    swamiVivekanandaLife: "(1863 – 1902)",
    swamiVivekanandaChildhoodName: 'Childhood Name: "Biley" (বিলে)',
    swamiVivekanandaQuote: "“Education is the manifestation of the perfection already in man.”",
    swamiVivekanandaMotto: "— The Eternal Motto of Biley Academy",
    aboutOriginBadge: "The Origin & Heritage",
    aboutOriginTitle: 'Why We Are Named "Biley Academy"',
    aboutOriginP1: "Swami Vivekananda, born Narendranath Datta, was affectionately called 'Biley' (বিলে) during his early childhood in Kolkata. Even as a young boy, Biley was renowned for his insatiable curiosity, boundless courage, love for truth, and razor-sharp intellect.",
    aboutOriginP2: "He never accepted any dogma without rigorous logical reasoning and direct experimental verification. When he sat under trees meditating or asking searching questions to teachers, he demonstrated that real education is not mechanical cramming, but the awakening of innate mental concentration and fearlessness.",
    aboutOriginP3: "Biley Academy was founded in 2026 to bring that sacred fire back to classroom learning. We cultivate fearless scholars who master scientific derivation, computational logic, and moral integrity.",
    aboutPillarsTitle: "Four Bedrock Pillars of Our Pedagogy",
    aboutPillar1Title: "Fearless Scientific Inquiry",
    aboutPillar1Desc: "Encouraging students to question deeply, derive first principles, and conduct real laboratory experiments rather than memorizing formulas.",
    aboutPillar2Title: "Computational & Analytical Rigor",
    aboutPillar2Desc: "Integrated computer science from primary coding logic to advanced Python, Java, and data systems alongside mathematics.",
    aboutPillar3Title: "Character & Compassionate Leadership",
    aboutPillar3Desc: "Instilling punctuality, ethical conduct, mutual respect, and social responsibility inspired by Swami Vivekananda's life.",
    aboutPillar4Title: "Accessible Individual Mentorship",
    aboutPillar4Desc: "Ensuring every student from Jamna, Pingla, and surrounding regions receives world-class coaching in intimate batches.",

    mvBadge: "Core Guiding Philosophy",
    mvTitle: "Mission, Vision & Core Values",
    mvSubtitle: "Our institutional blueprint for cultivating academic excellence, intellectual curiosity, and enduring human character.",
    missionTitle: "Our Mission",
    missionSubtitle: "Empowering Minds Through Conceptual Mastery & Character",
    visionTitle: "Our Vision",
    visionSubtitle: "A Benchmark of Pedagogical Excellence in Eastern India & Beyond",
    coreValuesTitle: "Four Guiding Value Pillars",

    founderBadge: "Academic Leadership & Founder Desk",
    founderTitle: "Founder & Academic Director's Message",
    founderTagline: "Inspired by the fearless spirit of Swami Vivekananda (fondly called 'Biley' in his childhood)",
    founderRole: "Founder & Academic Director",
    founderExperience: "20 Years (Academic & Industry Leadership)",
    founderQualificationsTitle: "Academic Qualifications",
    founderScholasticTitle: "Scholastic & Research Credentials",
    founderPubs: "Research Publications",
    founderPubsDesc: "Journals & Conferences",
    founderProjects: "Project Guidance",
    founderProjectsDesc: "Graduate Level",
    founderFdps: "FDPs Attended",
    founderFdpsDesc: "Faculty Development",
    founderWorkshops: "Workshops",
    founderWorkshopsDesc: "Active Participation",
    founderConfTitle: "Conference Organized:",
    founderConfValue: "1 (Lead Convener)",
    founderMaximTitle: "Our Guiding Philosophy:",
    founderMaximText: "“Education is the manifestation of the perfection already in man.” — Swami Vivekananda (Biley)",
    founderLetterHeader: "A Message to Parents and Aspiring Scholars",
    founderCounselingBadge: "Personalized Academic Counseling Available",
    founderPillar1: "Scientific Temper",
    founderPillar1Desc: "Hands-on lab experiments & real-world derivation",
    founderPillar2: "Computational Logic",
    founderPillar2Desc: "Algorithmic thinking from Class 1 to Class 12",
    founderPillar3: "Character Building",
    founderPillar3Desc: "Confidence, ethics & fearless pursuit of excellence",

    curriculumBadge: "Structured Learning Framework",
    curriculumTitle: "Comprehensive Curriculum (Class 1 to 12)",
    curriculumSubtitle: "Carefully designed academic syllabi combining school board excellence (CBSE / ICSE / WBBSE / WBCHSE) with entrance exam readiness (JEE, NEET, Olympiads).",
    tabPrimary: "Primary (Class 1-4)",
    tabUpperPrimary: "Upper Primary (Class 5-8)",
    tabSecondary: "Secondary (Class 9-10)",
    tabHigherSecondary: "Higher Secondary (Class 11-12)",
    primaryGradeDesc: "Foundational Literacy, Numeracy, Environmental Discovery, Coding Logic & Creative Expression.",
    upperPrimaryGradeDesc: "Bridging concrete ideas to abstract concepts in Mathematics, Physics, Chemistry, Biology & Computer Science.",
    secondaryGradeDesc: "Board exam excellence (Class 9-10) with foundation for Olympiads, NTSE, and competitive entrance tracks.",
    higherSecondaryGradeDesc: "Specialized streams in Pure Science, Mathematics, Computer Science & AI, targeting Board Toppers + JEE / NEET / WBJEE.",
    viewDetailedSyllabus: "View Complete Syllabus & Chapters",
    keyChapters: "Key Chapters & Modules",
    learningOutcomes: "Key Learning Outcomes",
    practicalLabsAvailable: "Lab Practical Sessions Included",
    weeklyHoursText: "Hours / Week",
    bookClassForSubject: "Inquire for this Subject",
    exploreFullDashboard: "Open Student Progress Tracker",

    dashboardBadge: "Real-Time Academic Monitoring",
    dashboardTitle: "Student Academic Dashboard & Tracker",
    dashboardSubtitle: "Interactive preview of our continuous diagnostic tracking system used by students and parents.",
    dashboardStudentProfile: "Enrolled Scholar Profile",
    dashboardRollNo: "Roll No",
    dashboardBatch: "Current Batch",
    dashboardAttendance: "Attendance Rate",
    dashboardStreak: "Study Streak",
    dashboardTrackProgress: "Subject-wise Progress & Completion",
    dashboardSubjectProgress: "Chapter & Lab Completion",
    dashboardCompleted: "Completed",
    dashboardTestQuizBtn: "Take Diagnostic Quiz",
    dashboardAiAskBtn: "Ask AI Doubt Solver",

    aiTutorBadge: "Antigravity AI Learning Companion",
    aiTutorTitle: "24/7 AI Concept & Doubt Solver",
    aiTutorSubtitle: "Ask any academic doubt from Class 1 to 12 across Mathematics, Physics, Chemistry, Biology, Computer Science, and English.",
    aiTutorSelectSubject: "Select Subject Domain:",
    aiTutorPlaceholder: "Type your homework problem, formula derivation, or concept doubt here...",
    aiTutorAskButton: "Solve Concept",
    aiTutorSampleQueries: "Try asking these instant concept questions:",
    aiTutorStepByStep: "Step-by-Step Pedagogical Explanation",
    aiTutorClearChat: "Reset Conversation",

    quizBadge: "Instant Diagnostic Evaluation",
    quizTitle: "Interactive Concept Diagnostic Quiz",
    quizSubtitle: "Test your fundamental understanding across STEM subjects and identify areas for improvement.",
    quizNextBtn: "Next Question",
    quizSubmitBtn: "Check My Score",
    quizRestartBtn: "Try Quiz Again",
    quizScoreText: "Your Diagnostic Performance",
    quizExplanation: "Pedagogical Explanation:",

    facultyBadge: "Academic Mentorship",
    facultyTitle: "Distinguished Faculty & Mentors",
    facultySubtitle: "Learn under senior educators with proven track records of shaping board rankers and entrance qualifiers.",
    facultyExperienceLabel: "Teaching Experience",
    facultyAchievementsLabel: "Notable Distinction",
    testimonialsTitle: "What Our Students & Parents Say",
    testimonialsSubtitle: "Real stories of academic transformation and confidence building at Biley Academy.",

    galleryBadge: "Campus Life & Photographic Showcase",
    galleryTitle: "Life at Biley Academy",
    gallerySubtitle: "Take a visual tour of our classrooms, science & computer labs, 1-on-1 mentorship desks, and founder leadership.",
    galleryFilterAll: "All Photos & Banners",
    galleryFilterLeadership: "Leadership & Banners",
    galleryFilterClassrooms: "Classrooms & Learning",
    galleryFilterLabs: "Science & Computer Labs",
    galleryFilterMentorship: "1-on-1 Doubt Mentorship",
    galleryFilterEvents: "Academic Events & Awards",
    galleryEnlargeHint: "Click any photo to enlarge in high-resolution lightbox",

    batchesBadge: "Weekly Routine & Schedules",
    batchesTitle: "Batch Schedules & Timings (2026-27)",
    batchesSubtitle: "Convenient morning and evening batches designed to seamlessly complement regular school hours.",
    batchDaysLabel: "Scheduled Days",
    batchTimingsLabel: "Batch Timings",
    batchSeatsLabel: "Remaining Seats",
    batchModeLabel: "Classroom Mode",
    batchReserveBtn: "Reserve Seat in this Batch",

    admissionBadge: "Session 2026-27 Enrollment",
    admissionTitle: "Admission Inquiry & Free Demo Class",
    admissionSubtitle: "Register for 2 free diagnostic demo classes with zero admission commitment.",
    admissionStudentName: "Student's Full Name",
    admissionParentName: "Parent / Guardian Name",
    admissionPhone: "WhatsApp / Contact Mobile",
    admissionEmail: "Email Address",
    admissionGrade: "Grade / Class Applying For",
    admissionSelectSubjects: "Select Subjects of Interest",
    admissionTargetGoal: "Target Academic Goal (Boards / JEE / NEET / Olympiad)",
    admissionPreferredTime: "Preferred Demo Timing",
    admissionSubmitBtn: "Submit Admission Inquiry",
    admissionSuccessMsg: "Thank you! Your inquiry has been received. Our academic coordinator will call you within 24 hours.",

    contactBadge: "Get in Touch",
    contactTitle: "Contact & Campus Location",
    contactSubtitle: "Visit our campus in Jamna, Pingla or connect with our academic admissions office.",
    contactAddressLabel: "Campus Location",
    contactPhoneLabel: "Helpline & WhatsApp",
    contactEmailLabel: "Official Email",
    contactHoursLabel: "Office Hours",
    contactFormName: "Your Full Name",
    contactFormEmail: "Email Address",
    contactFormPhone: "Phone Number",
    contactFormType: "Inquiry Type",
    contactFormMsg: "Your Message or Question",
    contactFormSendBtn: "Send Message",
    contactFaqTitle: "Frequently Asked Questions (FAQs)",

    footerAboutText: "Biley Academy is a premier coaching institute in Jamna, Pingla, delivering comprehensive, concept-first education from Class 1 to 12 inspired by Swami Vivekananda.",
    footerQuickLinks: "Quick Navigation",
    footerCurriculumLinks: "Grade Curricula",
    footerContactUs: "Campus & Helpline",
    footerRights: "All Rights Reserved.",
    footerMotto: "Awakening the fearless learner within every child.",

    heroTitle: "Biley Academy",
    aboutHeading: "About Biley Academy",
    aboutGuidingInspiration: "Guiding Spiritual & Intellectual Mentor",
    aboutSwamijiName: "Swami Vivekananda",
    aboutSwamijiChildhood: "(Affectionately called 'Biley' in his childhood)",
    aboutQuote: "Take up one idea. Make that one idea your life; dream of it; think of it; live on that idea. Let the brain, the body, muscles, nerves, every part of your body be full of that idea.",
    aboutQuoteAuthor: "Swami Vivekananda (Biley)",
    aboutWhyNamedPrefix: "Why the name",
    aboutWhyNamedHighlight: "'Biley' Academy?",
    aboutStoryP1: "Swami Vivekananda was born as Narendranath Datta in Kolkata and was affectionately called 'Biley' during his childhood. As young Biley, he was renowned for his insatiable curiosity, boundless courage, acute intellect, compassionate heart, and fearless questioning mind.",
    aboutStoryP2: "At Biley Academy, we strive to awaken that very spirit in every child. We don't just prepare students for school board examinations; we cultivate razor-sharp analytical thinking, scientific temperament, strong moral character, and lifelong love for learning.",
    aboutNoRoteTitle: "Zero Rote Memorization",
    aboutNoRoteDesc: "Concepts are broken down with intuitive real-world examples, visual derivations, and hands-on experiments.",
    aboutSmallBatchTitle: "Small Batches & Individual Care",
    aboutSmallBatchDesc: "Strict batch limits ensure every student receives personalized mentoring, doubt resolution, and progress tracking.",
    admissionHeading: "Admissions Open 2026-27",
    modalStudentName: "Student's Full Name",
    modalParentName: "Parent / Guardian Name",
    modalPhone: "WhatsApp / Mobile Number",
    modalEmail: "Email Address (Optional)",
    modalSelectClass: "Select Class",
    modalSelectSubjects: "Select Subjects Needed",
    modalSubmitBtn: "Submit Admission Inquiry",
    contactHeading: "Get in Touch with Biley Academy",
    curriculumHeading: "Comprehensive Grade-Wise Curriculum (Class 1-12)",
    founderHeading: "Message from the Founder & Academic Director",
    missionBadge: "Our Core Purpose",
    missionHeading: "Mission & Vision",
    navMission: "Mission & Vision",
    navProgress: "Student Progress Tracker"
  },

  bn: {
    topBannerAdmissions: "ভর্তি চলছে ২০২৬-২৭ শিক্ষাবর্ষে",
    topBannerClasses: "ক্লাস ১ থেকে ১২ (CBSE / ICSE / WBCHSE + JEE / NEET)",
    topBannerHelpline: "+৯১ ৯৭৩২৫ ৩১৭৩০",
    topBannerBookDemo: "২টি ফ্রি ডেমো ক্লাস বুক করুন",
    academyName: "বিলে অ্যাকাডেমি",
    academyTagline: "প্রিমিয়ার কোচিং • ক্লাস ১ থেকে ১২",
    sinceYear: "প্রতিষ্ঠা ২০২৬",

    navNoticeboard: "নোটিস বোর্ড",
    navAbout: "আমাদের কথা",
    navMissionVision: "লক্ষ্য ও উদ্দেশ্য",
    navFounder: "প্রতিষ্ঠাতার বার্তা",
    navCurriculum: "পাঠ্যক্রম (ক্লাস ১-১২)",
    navStudentDashboard: "শিক্ষার্থীর অগ্রগতি",
    navGallery: "ক্যাম্পাস গ্যালারি",
    navAiTutor: "এআই ডাউট সলভার",
    navQuiz: "যাচাই কুইজ",
    navFaculty: "শিক্ষকমণ্ডলী ও ফলাফল",
    navBatches: "ব্যাচ রুটিন",
    navAdmission: "ভর্তি প্রক্রিয়া",
    navContact: "যোগাযোগ",
    navBatchRoutineBtn: "ব্যাচ রুটিন",
    navEnrollDemoBtn: "ভর্তি / ফ্রি ডেমো",
    navAllGrades: "সকল শ্রেণি",
    navLiveAi: "লাইভ এআই",
    navTracker: "ট্র্যাকার",

    heroBadge: "সুপ্ত প্রতিভার জাগরণ • স্বামী বিবেকানন্দের আদর্শে অনুপ্রাণিত",
    heroHeadlinePrefix: "প্রতিটি বিষয়ে গভীর পারদর্শিতা —",
    heroHeadlineHighlight: "ক্লাস ১ থেকে ক্লাস ১২",
    heroSubtitle: "বিলে অ্যাকাডেমি (Biley Academy) জামনা, পিংলায় ইংরেজি, গণিত, বিজ্ঞান, জীবন বিজ্ঞান, পদার্থবিদ্যা, রসায়ন এবং কম্পিউটার সায়েন্স ও অ্যাপ্লিকেশনের সুসংগঠিত কনসেপ্ট-ফার্স্ট কোচিং প্রদান করে। প্রাথমিক শ্রেণির জন্য অফলাইন ভিত্তি এবং মাধ্যমিক ও উচ্চ মাধ্যমিকের জন্য হাইব্রিড JEE/NEET ওরিয়েন্টেশন।",
    heroCheck1: "ছোট ব্যাচ (১৫-১৮ জন)",
    heroCheck2: "বিজ্ঞান ল্যাব ও প্র্যাকটিক্যাল",
    heroCheck3: "সাপ্তাহিক মক টেস্ট",
    heroCheck4: "১-অন-১ ডাউট ক্লিয়ারিং",
    heroCheck5: "কম্পিউটার প্র্যাকটিক্যাল ল্যাব",
    heroCheck6: "অভিভাবকদের মাসিক রিপোর্ট",
    heroCtaEnroll: "ফ্রি ডেমো ক্লাস ও ভর্তি বুক করুন",
    heroCtaCurriculum: "ক্লাস ১-১২ পাঠ্যক্রম দেখুন",
    heroCtaAiTutor: "এআই ডাউট সলভার ব্যবহার করুন",
    heroTabNotices: "অফিসিয়াল নোটিস (২০২৬-২৭)",
    heroTabGrades: "দ্রুত শ্রেণি নেভিগেটর",
    heroSelectGradeHelp: "আপনার কাঙ্ক্ষিত শ্রেণি নির্বাচন করে সম্পূর্ণ পাঠ্যক্রম, রুটিন এবং সিলেবাস দেখুন।",

    statStudents: "৫০০+",
    statStudentsLabel: "নথিভুক্ত শিক্ষার্থী",
    statSuccess: "৯৮.৪%",
    statSuccessLabel: "বোর্ড ও পরীক্ষার সাফল্য হার",
    statFaculty: "১৫+",
    statFacultyLabel: "অভিজ্ঞ শিক্ষক ও মেন্টর",
    statBatchSize: "১৫-১৮",
    statBatchSizeLabel: "প্রতি ব্যাচে শিক্ষার্থী সীমাবদ্ধতা",

    officialBannerBadge: "অফিসিয়াল বিজ্ঞপ্তি • শিক্ষাবর্ষ ২০২৬-২৭",
    officialBannerHeading: "সমস্ত ব্যাচে ভর্তি চলছে",
    officialBannerSubheading: "ক্লাস ১ থেকে ১২ • সম্পূর্ণ বিষয়ভিত্তিক পাঠদান • ICSE, CBSE এবং WBBSE / WBCHSE",
    officialBannerFeature1: "সকল প্রধান বিষয়: ইংরেজি, গণিত, বিজ্ঞান, পদার্থবিদ্যা, রসায়ন, জীবনবিজ্ঞান ও কম্পিউটার সায়েন্স",
    officialBannerFeature2: "বিশেষ কম্পিউটার প্রোগ্রামিং ল্যাব: স্ক্র্যাচ, পাইথন, জাভা ও ওয়েব টেকনোলজি",
    officialBannerFeature3: "অলিম্পিয়াড, JEE (মেইন + অ্যাডভান্সড) এবং NEET-UG-এর সুদৃঢ় ভিত্তি",
    officialBannerFeature4: "প্রতিষ্ঠাতা ও বরিষ্ঠ শিক্ষকদের সঙ্গে ব্যক্তিগত ১-অন-১ ডাউট ক্লিয়ারিং ক্লিনিক",
    officialBannerCallNow: "হেল্পলাইন নম্বরে কল করুন: +৯১ ৯৭৩২৫ ৩১৭৩০",
    officialBannerBookSeat: "আসন সংরক্ষণ / ফ্রি ডেমো",
    officialBannerLocation: "ক্যাম্পাস: জামনা, পিংলা, পশ্চিম মেদিনীপুর, পশ্চিমবঙ্গ - ৭২১১৪০",

    aboutBadge: "আমাদের ঐতিহ্য ও অনুপ্রেরণা",
    aboutTitle: "বিলে অ্যাকাডেমি সম্পর্কে",
    aboutSubtitle: "স্বামী বিবেকানন্দের চরিত্র গঠন, নির্ভীক মনন এবং বিজ্ঞানসম্মত অনুসন্ধিৎসার চিরন্তন আদর্শকে পাথেয় করে গড়ে উঠেছে বিলে অ্যাকাডেমি।",
    swamiVivekanandaTitle: "স্বামী বিবেকানন্দ",
    swamiVivekanandaLife: "(১৮৬৩ – ১৯০২)",
    swamiVivekanandaChildhoodName: 'বাল্যকালের স্নেহনাম: "বিলে" (Biley)',
    swamiVivekanandaQuote: "“মানুষের মধ্যে যে পূর্ণতা পূর্ব হইতেই বিদ্যমান, তাহারই প্রকাশ হইল শিক্ষা।”",
    swamiVivekanandaMotto: "— বিলে অ্যাকাডেমির চিরন্তন মূলমন্ত্র",
    aboutOriginBadge: "নামকরণের ইতিহাস ও ঐতিহ্য",
    aboutOriginTitle: 'কেন আমাদের নাম "বিলে অ্যাকাডেমি"',
    aboutOriginP1: "কলকাতার সিমুলিয়ায় শৈশবে স্বামী বিবেকানন্দকে (নরেন্দ্রনাথ দত্ত) সবাই ভালোবেসে 'বিলে' বলে ডাকত। শৈশব থেকেই বিলে ছিলেন অসীম সাহসী, অদম্য কৌতূহলী এবং তীব্র প্রখর মেধার অধিকারী।",
    aboutOriginP2: "কোনো বিষয় যুক্তি ও প্রত্যক্ষ পরীক্ষা ছাড়া তিনি কখনোই মেনে নিতেন না। গাছের ডালে বসে ধ্যান করা থেকে শুরু করে শিক্ষকদের গভীর প্রশ্ন জিজ্ঞাসা—তাঁর শৈশব প্রমাণ করে যে শিক্ষা মানে অন্ধ মুখস্থ নয়, বরং মনের একাগ্রতা ও নির্ভীক সত্যের অন্বেষণ।",
    aboutOriginP3: "সেই শাশ্বত জ্ঞান ও চরিত্র গঠনের চেতনাকে প্রতিটি শিক্ষার্থীর মধ্যে জাগ্রত করতে ২০২৬ সালে প্রতিষ্ঠিত হয়েছে বিলে অ্যাকাডেমি। আমরা গড়ে তুলি এমন ছাত্রছাত্রী যারা বিজ্ঞানের যুক্তি, কম্পিউটার প্রোগ্রামিং এবং নৈতিক মূল্যবোধে হবে অগ্রণী।",
    aboutPillarsTitle: "আমাদের পাঠদানের চারটি প্রধান স্তম্ভ",
    aboutPillar1Title: "নির্ভীক বৈজ্ঞানিক অনুসন্ধান",
    aboutPillar1Desc: "অন্ধ মুখস্থ নয়, বরং প্রথম সূত্র থেকে অনুধাবন এবং হাতে-কলমে ল্যাব পরীক্ষার মাধ্যমে সত্য আবিষ্কার।",
    aboutPillar2Title: "কম্পিউটেশনাল ও বিশ্লেষণী দক্ষতা",
    aboutPillar2Desc: "প্রাথমিক শ্রেণির কোডিং লজিক থেকে শুরু করে উচ্চ মাধ্যমিক স্তরের পাইথন, জাভা ও ডেটা সিস্টেমের সমন্বিত পাঠদান।",
    aboutPillar3Title: "নৈতিক চরিত্র ও নেতৃত্ব",
    aboutPillar3Desc: "সময়ানুবর্তিতা, পারস্পরিক শ্রদ্ধা, দায়িত্বশীলতা এবং স্বামীজির নির্ভীক মানবতাবাদী আদর্শে চরিত্র গঠন।",
    aboutPillar4Title: "সহজলভ্য ব্যক্তিগত মেন্টরশিপ",
    aboutPillar4Desc: "জামনা, পিংলা এবং পার্শ্ববর্তী অঞ্চলের প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত যত্ন ও বিশ্বমানের কোচিং নিশ্চিত করা।",

    mvBadge: "আমাদের মূল দর্শন",
    mvTitle: "মিশন, ভিশন ও মূল মূল্যবোধ",
    mvSubtitle: "শিক্ষাগত উৎকর্ষ, চিন্তাশীল মেধা এবং আদর্শ চরিত্র গঠনের রূপরেখা।",
    missionTitle: "আমাদের মিশন (লক্ষ্য)",
    missionSubtitle: "ধারণাগত স্পষ্টতা ও চরিত্র গঠনের মাধ্যমে মনের বিকাশ",
    visionTitle: "আমাদের ভিশন (দূরদৃষ্টি)",
    visionSubtitle: "পূর্ব ভারতের অন্যতম শীর্ষস্থানীয় ও নির্ভরযোগ্য শিক্ষাপ্রতিষ্ঠান হওয়া",
    coreValuesTitle: "চারটি মূল মূল্যবোধ",

    founderBadge: "একাডেমিক নেতৃত্ব ও প্রতিষ্ঠাতার বার্তা",
    founderTitle: "প্রতিষ্ঠাতা ও একাডেমিক ডিরেক্টরের বার্তা",
    founderTagline: "স্বামী বিবেকানন্দের (বাল্যকালের স্নেহনাম 'বিলে') নির্ভীক চেতনায় অনুপ্রাণিত",
    founderRole: "প্রতিষ্ঠাতা ও একাডেমিক ডিরেক্টর",
    founderExperience: "২০ বছরের অভিজ্ঞতা (একাডেমিক ও ইন্ডাস্ট্রি নেতৃত্ব)",
    founderQualificationsTitle: "শিক্ষাগত যোগ্যতা",
    founderScholasticTitle: "গবেষণা ও শিক্ষাগত সাফল্য",
    founderPubs: "গবেষণা পত্র",
    founderPubsDesc: "আন্তর্জাতিক জার্নাল ও কনফারেন্স",
    founderProjects: "প্রকল্প নির্দেশনা",
    founderProjectsDesc: "স্নাতক স্তর",
    founderFdps: "এফডিপি সম্পন্ন",
    founderFdpsDesc: "শিক্ষক প্রশিক্ষণ",
    founderWorkshops: "কর্মশালা অংশগ্রহণ",
    founderWorkshopsDesc: "জাতীয় ও রাজ্য স্তরে",
    founderConfTitle: "কনফারেন্স আয়োজন:",
    founderConfValue: "১ (প্রধান আহ্বায়ক)",
    founderMaximTitle: "আমাদের পথপ্রদর্শক দর্শন:",
    founderMaximText: "“মানুষের মধ্যে যে পূর্ণতা পূর্ব হইতেই বিদ্যমান, তাহারই প্রকাশ হইল শিক্ষা।” — স্বামী বিবেকানন্দ (বিলে)",
    founderLetterHeader: "অভিভাবক ও প্রিয় শিক্ষার্থীদের প্রতি বার্তা",
    founderCounselingBadge: "ব্যক্তিগত একাডেমিক কাউন্সেলিং উপলব্ধ",
    founderPillar1: "বৈজ্ঞানিক মনন",
    founderPillar1Desc: "হাতে-কলমে ল্যাব প্র্যাকটিক্যাল ও বাস্তব উদাহরণভিত্তিক পাঠ",
    founderPillar2: "কম্পিউটেশনাল লজিক",
    founderPillar2Desc: "ক্লাস ১ থেকে ১২ পর্যন্ত অ্যালগরিদমিক চিন্তা ও কোডিং",
    founderPillar3: "চরিত্র গঠন",
    founderPillar3Desc: "আত্মবিশ্বাস, নীতি ও নির্ভীক সফলতার সাধনা",

    curriculumBadge: "সুসংগঠিত পাঠ্যক্রম কাঠামো",
    curriculumTitle: "সম্পূর্ণ পাঠ্যক্রম (ক্লাস ১ থেকে ১২)",
    curriculumSubtitle: "স্কুল বোর্ডের সিলেবাস (CBSE / ICSE / WBBSE / WBCHSE) এবং সর্বভারতীয় প্রবেশিকা পরীক্ষার (JEE, NEET, Olympiad) ভারসাম্যপূর্ণ সমন্বয়।",
    tabPrimary: "প্রাথমিক (ক্লাস ১-৪)",
    tabUpperPrimary: "উচ্চ প্রাথমিক (ক্লাস ৫-৮)",
    tabSecondary: "মাধ্যমিক (ক্লাস ৯-১০)",
    tabHigherSecondary: "উচ্চ মাধ্যমিক (ক্লাস ১১-১২)",
    primaryGradeDesc: "মৌলিক সাক্ষরতা, সংখ্যার জ্ঞান, পরিবেশ পর্যবেক্ষণ, প্রাথমিক কোডিং লজিক ও সৃজনশীল বিকাশ।",
    upperPrimaryGradeDesc: "গণিত, পদার্থবিদ্যা, রসায়ন, জীবনবিজ্ঞান ও কম্পিউটার সায়েন্সের ধারণাগত উত্তরণ।",
    secondaryGradeDesc: "বোর্ড পরীক্ষায় শীর্ষস্থান অর্জনের পাশাপাশি অলিম্পিয়াড ও প্রবেশিকা পরীক্ষার ভিত্তি নির্মাণ।",
    higherSecondaryGradeDesc: "বিশুদ্ধ বিজ্ঞান, গণিত, কম্পিউটার সায়েন্স ও এআই স্পেশালাইজেশন — বোর্ড টপার ও JEE / NEET / WBJEE প্রস্তুতি।",
    viewDetailedSyllabus: "সম্পূর্ণ সিলেবাস ও অধ্যায় তালিকা দেখুন",
    keyChapters: "গুরুত্বপূর্ণ অধ্যায় ও মডিউল",
    learningOutcomes: "শিক্ষাগত ফলাফল ও দক্ষতা",
    practicalLabsAvailable: "ল্যাব প্র্যাকটিক্যাল সেশন অন্তর্ভুক্ত",
    weeklyHoursText: "ঘণ্টা / সপ্তাহ",
    bookClassForSubject: "এই বিষয়ে ভর্তির আবেদন করুন",
    exploreFullDashboard: "শিক্ষার্থীর অগ্রগতি ট্র্যাকার খুলুন",

    dashboardBadge: "রিয়েল-টাইম একাডেমিক ট্র্যাকিং",
    dashboardTitle: "শিক্ষার্থীর প্রগ্রেস ড্যাশবোর্ড ও ট্র্যাকার",
    dashboardSubtitle: "শিক্ষার্থী ও অভিভাবকদের জন্য সার্বক্ষণিক অগ্রগতি ও পারফরম্যান্স পর্যবেক্ষণের ডেমো সিস্টেম।",
    dashboardStudentProfile: "শিক্ষার্থীর প্রোফাইল",
    dashboardRollNo: "রোল নম্বর",
    dashboardBatch: "বর্তমান ব্যাচ",
    dashboardAttendance: "উপস্থিতির হার",
    dashboardStreak: "ধারাবাহিক অধ্যবসায়",
    dashboardTrackProgress: "বিষয়ভিত্তিক অগ্রগতি ও সমাপ্তি",
    dashboardSubjectProgress: "অধ্যায় ও ল্যাব সমাপ্তির হার",
    dashboardCompleted: "সম্পন্ন",
    dashboardTestQuizBtn: "যাচাই কুইজ দিন",
    dashboardAiAskBtn: "এআই ডাউট সলভারকে জিজ্ঞাসা করুন",

    aiTutorBadge: "অ্যান্টিগ্র্যাভিটি এআই লার্নিং সহায়ক",
    aiTutorTitle: "২৪/৭ এআই কনসেপ্ট ও ডাউট সলভার",
    aiTutorSubtitle: "ক্লাস ১ থেকে ১২-এর গণিত, পদার্থবিদ্যা, রসায়ন, জীববিজ্ঞান, কম্পিউটার সায়েন্স ও ইংরেজির যেকোনো প্রশ্নের তাৎক্ষণিক উত্তর পান।",
    aiTutorSelectSubject: "বিষয় নির্বাচন করুন:",
    aiTutorPlaceholder: "আপনার হোমওয়ার্কের সমস্যা, সূত্রের প্রমাণ বা জটিল ধারণা এখানে লিখুন...",
    aiTutorAskButton: "ধারণা সমাধান করুন",
    aiTutorSampleQueries: "নিচের নমুনা প্রশ্নগুলিতে ক্লিক করে তাৎক্ষণিক সমাধান দেখুন:",
    aiTutorStepByStep: "ধাপে ধাপে সহজ বাংলায় ব্যাখ্যা",
    aiTutorClearChat: "কথোপকথন রিসেট করুন",

    quizBadge: "তাৎক্ষণিক মূল্যায়ন পরীক্ষা",
    quizTitle: "ইন্টারেক্টিভ কনসেপ্ট যাচাই কুইজ",
    quizSubtitle: "বিজ্ঞান ও গণিতের মূল ধারণাগুলির ওপর আপনার দখল যাচাই করুন এবং দুর্বলতা চিহ্নিত করুন।",
    quizNextBtn: "পরবর্তী প্রশ্ন",
    quizSubmitBtn: "ফলাফল দেখুন",
    quizRestartBtn: "পুনরায় কুইজ দিন",
    quizScoreText: "আপনার কুইজ পারফরম্যান্স",
    quizExplanation: "শিক্ষামূলক বিশদ ব্যাখ্যা:",

    facultyBadge: "অভিজ্ঞ শিক্ষকমণ্ডলী",
    facultyTitle: "বিশিষ্ট শিক্ষক ও মেন্টরবৃন্দ",
    facultySubtitle: "অভিজ্ঞ শিক্ষকদের প্রত্যক্ষ তত্ত্বাবধানে গড়ে উঠুন ভবিষ্যৎ কৃতি ও সফল ব্যক্তিত্ব হিসেবে।",
    facultyExperienceLabel: "শিক্ষাদানের অভিজ্ঞতা",
    facultyAchievementsLabel: "বিশেষ সাফল্য ও ভূমিকা",
    testimonialsTitle: "শিক্ষার্থী ও অভিভাবকদের মতামত",
    testimonialsSubtitle: "বিলে অ্যাকাডেমিতে অধ্যয়নের মাধ্যমে আত্মবিশ্বাস ও পরীক্ষার সেরা সাফল্যের বাস্তব গল্প।",

    galleryBadge: "ক্যাম্পাস জীবন ও আলোকচিত্র",
    galleryTitle: "বিলে অ্যাকাডেমির ক্যাম্পাস গ্যালারি",
    gallerySubtitle: "আমাদের শ্রেণিকক্ষ, বিজ্ঞান ও কম্পিউটার ল্যাব, ১-অন-১ ডাউট সেশন এবং প্রতিষ্ঠাতার নেতৃত্বের ছবি দেখুন।",
    galleryFilterAll: "সব ছবি ও ব্যানার",
    galleryFilterLeadership: "নেতৃত্ব ও ব্যানার",
    galleryFilterClassrooms: "শ্রেণিকক্ষ ও পাঠদান",
    galleryFilterLabs: "বিজ্ঞান ও কম্পিউটার ল্যাব",
    galleryFilterMentorship: "১-অন-১ ডাউট মেন্টরশিপ",
    galleryFilterEvents: "একাডেমিক অনুষ্ঠান ও পুরস্কার",
    galleryEnlargeHint: "যেকোনো ছবিতে ক্লিক করে ফুল-স্ক্রিন লাইটবক্সে বড় করে দেখুন",

    batchesBadge: "সাপ্তাহিক রুটিন ও সময়সূচি",
    batchesTitle: "ব্যাচ সময়সূচি ও রুটিন (২০২৬-২৭)",
    batchesSubtitle: "স্কুলের সময়ের সাথে সামঞ্জস্য রেখে সকাল ও সন্ধ্যার সুবিধাজনক ব্যাচ ব্যবস্থা।",
    batchDaysLabel: "নির্ধারিত দিন",
    batchTimingsLabel: "ব্যাচের সময়",
    batchSeatsLabel: "অবশিষ্ট আসন",
    batchModeLabel: "ক্লাসের মাধ্যম",
    batchReserveBtn: "এই ব্যাচে আসন সংরক্ষণ করুন",

    admissionBadge: "শিক্ষাবর্ষ ২০২৬-২৭ ভর্তি",
    admissionTitle: "ভর্তি অনুসন্ধান ও ফ্রি ডেমো ক্লাস",
    admissionSubtitle: "কোনো পূর্বশর্ত ছাড়াই ২টি ফ্রি ডেমো ক্লাসে অংশগ্রহণ করে আমাদের পাঠদান পদ্ধতি যাচাই করুন।",
    admissionStudentName: "শিক্ষার্থীর সম্পূর্ণ নাম",
    admissionParentName: "অভিভাবকের নাম",
    admissionPhone: "হোয়াটসঅ্যাপ / মোবাইল নম্বর",
    admissionEmail: "ইমেল ঠিকানা",
    admissionGrade: "ভর্তির শ্রেণি / ক্লাস",
    admissionSelectSubjects: "কাঙ্ক্ষিত বিষয়সমূহ নির্বাচন করুন",
    admissionTargetGoal: "প্রধান লক্ষ্য (বোর্ড পরীক্ষা / JEE / NEET / অলিম্পিয়াড)",
    admissionPreferredTime: "ডেমো ক্লাসের সুবিধাজনক সময়",
    admissionSubmitBtn: "ভর্তি আবেদন জমা দিন",
    admissionSuccessMsg: "ধন্যবাদ! আপনার আবেদন গৃহীত হয়েছে। আমাদের একাডেমিক সমন্বয়কারী ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবেন।",

    contactBadge: "যোগাযোগ করুন",
    contactTitle: "যোগাযোগ ও ক্যাম্পাস ঠিকানা",
    contactSubtitle: "জামনা, পিংলা ক্যাম্পাসে সরাসরি আসুন অথবা আমাদের অফিসে যোগাযোগ করুন।",
    contactAddressLabel: "ক্যাম্পাসের ঠিকানা",
    contactPhoneLabel: "হেল্পলাইন ও হোয়াটসঅ্যাপ",
    contactEmailLabel: "অফিসিয়াল ইমেল",
    contactHoursLabel: "অফিস সময়",
    contactFormName: "আপনার নাম",
    contactFormEmail: "ইমেল ঠিকানা",
    contactFormPhone: "ফোন নম্বর",
    contactFormType: "অনুসন্ধানের ধরন",
    contactFormMsg: "আপনার বার্তা বা প্রশ্ন",
    contactFormSendBtn: "বার্তা পাঠান",
    contactFaqTitle: "সাধারণ প্রশ্নোত্তর (FAQ)",

    footerAboutText: "বিলে অ্যাকাডেমি পশ্চিম মেদিনীপুরের জামনা, পিংলায় ক্লাস ১ থেকে ১২ পর্যন্ত স্বামী বিবেকানন্দের শিক্ষাদর্শে পরিচালিত এক অগ্রণী কোচিং প্রতিষ্ঠান।",
    footerQuickLinks: "দ্রুত লিঙ্ক",
    footerCurriculumLinks: "শ্রেণিভিত্তিক পাঠ্যক্রম",
    footerContactUs: "ক্যাম্পাস ও হেল্পলাইন",
    footerRights: "সর্বস্বত্ব সংরক্ষিত।",
    footerMotto: "প্রতিটি শিশুর অন্তর্নিহিত নির্ভীক মেধার প্রকাশ।",

    heroTitle: "বিলে অ্যাকাডেমি",
    aboutHeading: "বিলে অ্যাকাডেমি সম্পর্কে",
    aboutGuidingInspiration: "আমাদের পথপ্রদর্শক ও আধ্যাত্মিক প্রেরণা",
    aboutSwamijiName: "স্বামী বিবেকানন্দ",
    aboutSwamijiChildhood: "(শৈশবে যিনি 'বিলে' নামে পরিচিত ছিলেন)",
    aboutQuote: "একটি ভাব গ্রহণ করো। সেই ভাবটিকে তোমার সমগ্র জীবন করে তোলো — তারই স্বপ্ন দেখো, তারই চিন্তা করো, তারই ওপর বেঁচে থাকো। তোমার মস্তিষ্ক, পেশী, স্নায়ু, তোমার দেহের প্রতিটি অংশ যেন সেই ভাবে পরিপূর্ণ থাকে।",
    aboutQuoteAuthor: "স্বামী বিবেকানন্দ (বিলে)",
    aboutWhyNamedPrefix: "কেন এই নামকরণ",
    aboutWhyNamedHighlight: "‘বিলে’ অ্যাকাডেমি?",
    aboutStoryP1: "স্বামী বিবেকানন্দ কলকাতায় জন্মগ্রহণ করেন বীরেশ্বর বা নরেন্দ্রনাথ দত্ত নামে, যাঁকে শৈশবে স্নেহভরে সকলে ‘বিলে’ বলে ডাকতেন। বালক বিলে ছিলেন অদম্য কৌতূহলী, নির্ভীক, তীব্র বুদ্ধিসম্পন্ন, দয়ালু এবং প্রতিটি বিষয়ের গভীরে সত্যানুসন্ধানী।",
    aboutStoryP2: "বিলে অ্যাকাডেমিতে আমরা প্রতিটি শিক্ষার্থীর মাঝে সেই শৈশবের ‘বিলে’র মতো অনুসন্ধিৎসু চেতনা ও নির্ভীক মনোভাব জাগ্রত করতে সচেষ্ট। শুধুমাত্র অন্ধ মুখস্থ নয়, যুক্তিপূর্ণ চিন্তাভাবনা, বিজ্ঞানমনস্কতা ও আদর্শ চরিত্র গঠনে আমরা অঙ্গীকারবদ্ধ।",
    aboutNoRoteTitle: "মুখস্থবিদ্যার বদলে স্পষ্ট ধারণা",
    aboutNoRoteDesc: "বাস্তব জীবনের উদাহরণ, চাক্ষুষ প্র্যাকটিক্যাল ও হাতে-কলমে পরীক্ষার মাধ্যমে প্রতিটি বিষয়কে সহজবোধ্য করে তোলা হয়।",
    aboutSmallBatchTitle: "ছোট ব্যাচ ও ব্যক্তিগত নজরদারি",
    aboutSmallBatchDesc: "প্রতিটি ব্যাচে সীমিত সংখ্যক ছাত্রছাত্রী রাখা হয় যাতে শিক্ষক প্রতিটি শিক্ষার্থীর দুর্বলতা শনাক্ত করে যত্ন নিতে পারেন।",
    admissionHeading: "ভর্তি চলছে ২০২৬-২৭ শিক্ষাবর্ষে",
    modalStudentName: "শিক্ষার্থীর সম্পূর্ণ নাম",
    modalParentName: "অভিভাবকের নাম",
    modalPhone: "হোয়াটসঅ্যাপ / মোবাইল নম্বর",
    modalEmail: "ইমেল ঠিকানা (ঐচ্ছিক)",
    modalSelectClass: "শ্রেণি নির্বাচন করুন",
    modalSelectSubjects: "প্রয়োজনীয় বিষয়সমূহ নির্বাচন করুন",
    modalSubmitBtn: "ভর্তি আবেদন জমা দিন",
    contactHeading: "বিলে অ্যাকাডেমির সাথে যোগাযোগ করুন",
    curriculumHeading: "শ্রেণিভিত্তিক সামগ্রিক পাঠ্যক্রম (১ম থেকে ১২শ শ্রেণি)",
    founderHeading: "প্রতিষ্ঠাতা ও পরিচালকের বার্তা",
    missionBadge: "আমাদের মূল দর্শন",
    missionHeading: "মিশন, ভিশন ও মূল মূল্যবোধ",
    navMission: "লক্ষ্য ও উদ্দেশ্য",
    navProgress: "শিক্ষার্থীর অগ্রগতি"
  }
};
