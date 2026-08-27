import { NoticeItem } from '../types';

export const ACADEMY_NOTICES: NoticeItem[] = [
  {
    id: 'notice-adm-2026-27',
    title: 'Admissions Open for Academic Session 2026–27 (Classes I to XII)',
    category: 'admission',
    categoryLabel: 'Admission Notice',
    date: 'Aug 24, 2026',
    description: 'Registration open for Offline Primary Batches (Class 1-5) and Hybrid Secondary & Higher Secondary Batches (Class 6-12) with JEE/NEET orientation.',
    badge: 'Admissions 2026',
    isNew: true,
    isUrgent: true,
    targetClass: 'Class 1–12 (All Boards)',
    attachmentName: 'Admission_Prospectus_2026.pdf',
    actionText: 'Apply for Admission',
    details: [
      'Class I–V: All subjects offline comprehensive foundational coaching with activity learning.',
      'Class VI–XII: Specialized offline & online classes for Mathematics, Science (Physics & Chemistry), English, Biology, and Computer Science.',
      'Special JEE & NEET foundation modules with tricks, speed calculation, and question banks.',
      'Limited batch strength of 15–18 students per batch for focused individual attention.'
    ]
  },
  {
    id: 'notice-exam-mock-term1',
    title: 'Monthly Diagnostic Assessment & Board Simulation Test Schedule',
    category: 'examination',
    categoryLabel: 'Examination Notice',
    date: 'Aug 22, 2026',
    description: 'First Term Assessment Series commences from September 5th for Classes 9, 10, 11 & 12. Detailed syllabus and admit slips issued.',
    badge: 'Exam Schedule',
    isNew: true,
    isUrgent: false,
    targetClass: 'Class 9, 10, 11 & 12',
    attachmentName: 'Mock_Test_Schedule_Sept2026.pdf',
    actionText: 'View Syllabus & Timetable',
    details: [
      'Class 10 (Secondary): Full board-pattern mock test on Mathematics, Physical Science, and Life Science.',
      'Class 12 (Higher Secondary): 3-hour theoretical + 1-hour MCQ test on Physics, Chemistry, Mathematics & Biology.',
      'Evaluation reports with question-by-question error analytics handed to parents during the upcoming PTM.'
    ]
  },
  {
    id: 'notice-scholarship-bstat-2026',
    title: 'B-STAT 2026 (Biley Scholarship & Talent Admission Test)',
    category: 'admission',
    categoryLabel: 'Scholarship / Admission',
    date: 'Aug 20, 2026',
    description: 'Merit entrance test offering up to 100% tuition waiver for meritorious and financially underprivileged students across Paschim Medinipur.',
    badge: '100% Scholarship',
    isNew: true,
    isUrgent: true,
    targetClass: 'Class 5 to 11 Students',
    attachmentName: 'BSTAT_Scholarship_Form_2026.pdf',
    actionText: 'Register for B-STAT',
    details: [
      'Date of Examination: Second Sunday of upcoming month at Jamna, Pingla Campus.',
      'Syllabus: Quantitative Aptitude, Logical Reasoning, and NCERT/Board Core Sciences of current grade.',
      'Top 10 rankers receive complete tuition sponsorship for the full academic session.'
    ]
  },
  {
    id: 'notice-news-stem-lab',
    title: 'New Optics & Robotics Practical Lab Inaugurated at Jamna Center',
    category: 'news',
    categoryLabel: 'News & Announcements',
    date: 'Aug 18, 2026',
    description: 'Dedicated experiential learning lab equipped with optical benches, compound microscopes, and micro-controllers opened for student practical sessions.',
    badge: 'Campus Update',
    isNew: false,
    isUrgent: false,
    targetClass: 'Class 6 to 12',
    attachmentName: 'Lab_Safety_Guidelines.pdf',
    actionText: 'Learn More',
    details: [
      'Weekly supervised practical experiments mapped directly to CBSE/ICSE/WBCHSE lab syllabi.',
      'Computer laboratory updated with Python and Java programming environments for Class 9–12 Computer Science students.'
    ]
  },
  {
    id: 'notice-exam-jee-neet-series',
    title: 'Sunday Super-30 JEE Main & NEET Booster Practice Drills',
    category: 'examination',
    categoryLabel: 'Examination Notice',
    date: 'Aug 15, 2026',
    description: 'Special timed OMR-based speed drills and shortcut technique sessions every Sunday morning (9:00 AM – 12:00 PM).',
    badge: 'JEE / NEET Drill',
    isNew: false,
    isUrgent: false,
    targetClass: 'Class 11 & 12 Aspirants',
    attachmentName: 'Sunday_Test_Topics_Matrix.pdf',
    actionText: 'View Drill Topics',
    details: [
      'Comprehensive coverage of previous 15 years JEE & NEET questions with short-cut tricks.',
      'Detailed video solution walkthrough and 1-on-1 doubt clearing clinic immediately after tests.'
    ]
  },
  {
    id: 'notice-news-ptm-session',
    title: 'Parent-Teacher Interaction & Academic Progress Review Meet',
    category: 'news',
    categoryLabel: 'News & Announcements',
    date: 'Aug 12, 2026',
    description: 'One-on-one progress review between parents and subject mentors for Classes I through VIII at the Main Academic Wing.',
    badge: 'PTM Notice',
    isNew: false,
    isUrgent: false,
    targetClass: 'Class 1 to 8',
    attachmentName: 'PTM_TimeSlot_Allotment.pdf',
    actionText: 'Check Time Slots',
    details: [
      'Individual discussion on test performance, concept grasp, homework consistency, and exam readiness.',
      'Guidance on personalized study timetables at home and healthy screen time balance.'
    ]
  }
];

export const NOTICE_TICKER_ITEMS = [
  '⚡ Admissions Active for Classes 1–12 (Academic Session 2026-27) • WhatsApp: 9732531730 (WhatsApp Only)',
  '📢 First Term Board Simulation Mock Test Series commences next week for Classes 9–12',
  '🏆 B-STAT 2026 Scholarship Exam Registrations Open: Up to 100% Tuition Fee Waivers',
  '🔬 New Experiential STEM & Optics Science Laboratory Open at Jamna Campus',
  '🎯 Sunday Super-30 JEE Main & NEET Rapid Speed & Tricks Drills every Sunday 9 AM',
  '📍 Campus Location: Jamna, Pingla, Paschim Medinipur - PIN 721140 (Adjacent to Jamna Bus Stand)'
];
