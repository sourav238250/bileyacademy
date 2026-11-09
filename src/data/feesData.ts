export type CurriculumBoard = 'W.B. Board' | 'CBSE';
export type StreamTrack = 'General' | 'Science';
export type TuitionType = 'package' | 'per_subject';

export interface FeeStructureItem {
  id: string;
  classLevel: string; // e.g. "Class 1"
  gradeNumber: number; // 1 to 12
  curriculumBoard: CurriculumBoard;
  streamTrack: StreamTrack;
  admissionFee: number; // e.g. 100 or 150
  admissionFeeDisplay: string; // "₹100" or "₹150"
  monthlyTuition: number; // base monthly number
  monthlyTuitionDisplay: string; // "₹800/mon All Subjects Package" or "₹300/sub Monthly per subject"
  tuitionType: TuitionType;
  tuitionTypeLabel: string; // "All Subjects Package" or "Monthly per subject"
  academicStage: 'primary' | 'upper_primary' | 'secondary' | 'higher_secondary';
  subjectsIncludedDescription?: string;
}

export const OFFICIAL_FEES_DATA: FeeStructureItem[] = [
  // --- W.B. Board (West Bengal Board - WBBPE / WBBSE / WBCHSE) ---
  {
    id: 'wb-class-2',
    classLevel: 'Class 2',
    gradeNumber: 2,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 800,
    monthlyTuitionDisplay: '₹800/mon All Subjects Package',
    tuitionType: 'package',
    tuitionTypeLabel: 'All Subjects Package',
    academicStage: 'primary',
    subjectsIncludedDescription: 'All Foundation Subjects (Bengali, English, Mathematics, Nature Studies)'
  },
  {
    id: 'wb-class-3',
    classLevel: 'Class 3',
    gradeNumber: 3,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 800,
    monthlyTuitionDisplay: '₹800/mon All Subjects Package',
    tuitionType: 'package',
    tuitionTypeLabel: 'All Subjects Package',
    academicStage: 'primary',
    subjectsIncludedDescription: 'All Foundation Subjects (Bengali, English, Mathematics, Our Environment)'
  },
  {
    id: 'wb-class-4',
    classLevel: 'Class 4',
    gradeNumber: 4,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 800,
    monthlyTuitionDisplay: '₹800/mon All Subjects Package',
    tuitionType: 'package',
    tuitionTypeLabel: 'All Subjects Package',
    academicStage: 'primary',
    subjectsIncludedDescription: 'All Foundation Subjects (Bengali, English, Math, Science & Environment)'
  },
  {
    id: 'wb-class-5',
    classLevel: 'Class 5',
    gradeNumber: 5,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 300,
    monthlyTuitionDisplay: '₹300/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'upper_primary',
    subjectsIncludedDescription: 'Mathematics, Science, English, Bengali, Social Science (Custom combinations available)'
  },
  {
    id: 'wb-class-6',
    classLevel: 'Class 6',
    gradeNumber: 6,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 300,
    monthlyTuitionDisplay: '₹300/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'upper_primary',
    subjectsIncludedDescription: 'Mathematics, Science & Environment, English, Bengali, History & Geography'
  },
  {
    id: 'wb-class-7',
    classLevel: 'Class 7',
    gradeNumber: 7,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 300,
    monthlyTuitionDisplay: '₹300/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'upper_primary',
    subjectsIncludedDescription: 'Mathematics, Science & Environment, English, Bengali, Social Studies'
  },
  {
    id: 'wb-class-8',
    classLevel: 'Class 8',
    gradeNumber: 8,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 300,
    monthlyTuitionDisplay: '₹300/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'upper_primary',
    subjectsIncludedDescription: 'Mathematics, Science (Physical & Life), English, History & Geography'
  },
  {
    id: 'wb-class-9',
    classLevel: 'Class 9',
    gradeNumber: 9,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'General',
    admissionFee: 150,
    admissionFeeDisplay: '₹150',
    monthlyTuition: 350,
    monthlyTuitionDisplay: '₹350/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'secondary',
    subjectsIncludedDescription: 'Madhyamik Foundation: Mathematics, Physical Science, Life Science, English'
  },
  {
    id: 'wb-class-10',
    classLevel: 'Class 10',
    gradeNumber: 10,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'General',
    admissionFee: 150,
    admissionFeeDisplay: '₹150',
    monthlyTuition: 350,
    monthlyTuitionDisplay: '₹350/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'secondary',
    subjectsIncludedDescription: 'WBBSE Madhyamik Target: Mathematics, Physical Science, Life Science, English + ABTA Mock Tests'
  },
  {
    id: 'wb-class-11',
    classLevel: 'Class 11',
    gradeNumber: 11,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'Science',
    admissionFee: 150,
    admissionFeeDisplay: '₹150',
    monthlyTuition: 450,
    monthlyTuitionDisplay: '₹450/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'higher_secondary',
    subjectsIncludedDescription: 'WBCHSE + WBJEE: Physics, Chemistry, Mathematics, Biology, Computer Science'
  },
  {
    id: 'wb-class-12',
    classLevel: 'Class 12',
    gradeNumber: 12,
    curriculumBoard: 'W.B. Board',
    streamTrack: 'Science',
    admissionFee: 150,
    admissionFeeDisplay: '₹150',
    monthlyTuition: 450,
    monthlyTuitionDisplay: '₹450/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'higher_secondary',
    subjectsIncludedDescription: 'WBCHSE HS & WBJEE/JEE Rankers: Physics, Chemistry, Mathematics, Biology, Computer Science'
  },

  // --- CBSE (Central Board of Secondary Education) ---
  {
    id: 'cbse-class-2',
    classLevel: 'Class 2',
    gradeNumber: 2,
    curriculumBoard: 'CBSE',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 1500,
    monthlyTuitionDisplay: '₹1,500/mon All Subjects Package',
    tuitionType: 'package',
    tuitionTypeLabel: 'All Subjects Package',
    academicStage: 'primary',
    subjectsIncludedDescription: 'NCERT Foundation: Bengali, English, Mathematics, Environmental Studies'
  },
  {
    id: 'cbse-class-3',
    classLevel: 'Class 3',
    gradeNumber: 3,
    curriculumBoard: 'CBSE',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 1500,
    monthlyTuitionDisplay: '₹1,500/mon All Subjects Package',
    tuitionType: 'package',
    tuitionTypeLabel: 'All Subjects Package',
    academicStage: 'primary',
    subjectsIncludedDescription: 'NCERT: Bengali, English, Mathematics, EVS (Looking Around)'
  },
  {
    id: 'cbse-class-4',
    classLevel: 'Class 4',
    gradeNumber: 4,
    curriculumBoard: 'CBSE',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 1500,
    monthlyTuitionDisplay: '₹1,500/mon All Subjects Package',
    tuitionType: 'package',
    tuitionTypeLabel: 'All Subjects Package',
    academicStage: 'primary',
    subjectsIncludedDescription: 'NCERT: Bengali, English, Mathematics, Science/EVS'
  },
  {
    id: 'cbse-class-5',
    classLevel: 'Class 5',
    gradeNumber: 5,
    curriculumBoard: 'CBSE',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 750,
    monthlyTuitionDisplay: '₹750/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'upper_primary',
    subjectsIncludedDescription: 'NCERT: Mathematics, General Science, English, and Social Science'
  },
  {
    id: 'cbse-class-6',
    classLevel: 'Class 6',
    gradeNumber: 6,
    curriculumBoard: 'CBSE',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 750,
    monthlyTuitionDisplay: '₹750/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'upper_primary',
    subjectsIncludedDescription: 'NCERT: Mathematics, Integrated Science, English, Social Science (History, Civics, Geography)'
  },
  {
    id: 'cbse-class-7',
    classLevel: 'Class 7',
    gradeNumber: 7,
    curriculumBoard: 'CBSE',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 750,
    monthlyTuitionDisplay: '₹750/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'upper_primary',
    subjectsIncludedDescription: 'NCERT: Mathematics, Science, English Literature & Grammar, Social Studies'
  },
  {
    id: 'cbse-class-8',
    classLevel: 'Class 8',
    gradeNumber: 8,
    curriculumBoard: 'CBSE',
    streamTrack: 'General',
    admissionFee: 100,
    admissionFeeDisplay: '₹100',
    monthlyTuition: 750,
    monthlyTuitionDisplay: '₹750/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'upper_primary',
    subjectsIncludedDescription: 'NCERT & Olympiad Foundation: Mathematics, Science, English, Social Studies'
  },
  {
    id: 'cbse-class-9',
    classLevel: 'Class 9',
    gradeNumber: 9,
    curriculumBoard: 'CBSE',
    streamTrack: 'General',
    admissionFee: 150,
    admissionFeeDisplay: '₹150',
    monthlyTuition: 800,
    monthlyTuitionDisplay: '₹800/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'secondary',
    subjectsIncludedDescription: 'CBSE Board Foundation: Mathematics (Standard/Basic), Science (Physics/Chemistry/Bio), English'
  },
  {
    id: 'cbse-class-10',
    classLevel: 'Class 10',
    gradeNumber: 10,
    curriculumBoard: 'CBSE',
    streamTrack: 'General',
    admissionFee: 150,
    admissionFeeDisplay: '₹150',
    monthlyTuition: 800,
    monthlyTuitionDisplay: '₹800/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'secondary',
    subjectsIncludedDescription: 'CBSE Class 10 Board Target 95%+: Mathematics (Standard/Basic), Science, Social Science, English'
  },
  {
    id: 'cbse-class-11',
    classLevel: 'Class 11',
    gradeNumber: 11,
    curriculumBoard: 'CBSE',
    streamTrack: 'Science',
    admissionFee: 150,
    admissionFeeDisplay: '₹150',
    monthlyTuition: 1000,
    monthlyTuitionDisplay: '₹1,000/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'higher_secondary',
    subjectsIncludedDescription: 'CBSE + JEE / NEET Track: Physics, Chemistry, Mathematics, Biology, Computer Science (Python)'
  },
  {
    id: 'cbse-class-12',
    classLevel: 'Class 12',
    gradeNumber: 12,
    curriculumBoard: 'CBSE',
    streamTrack: 'Science',
    admissionFee: 150,
    admissionFeeDisplay: '₹150',
    monthlyTuition: 1000,
    monthlyTuitionDisplay: '₹1,000/sub Monthly per subject',
    tuitionType: 'per_subject',
    tuitionTypeLabel: 'Monthly per subject',
    academicStage: 'higher_secondary',
    subjectsIncludedDescription: 'CBSE Board Examination + JEE Main / Advanced & NEET: Physics, Chemistry, Mathematics, Biology'
  }
];

export const FEE_HIGHLIGHTS = [
  {
    titleEn: 'Nominal One-Time Admission Fee',
    titleBn: 'নামমাত্র একবারের ভর্তি ফি',
    descEn: 'Only ₹100 for Classes 2–8 and ₹150 for Classes 9–12 across both West Bengal Board and CBSE.',
    descBn: 'ক্লাস ২ থেকে ৮ পর্যন্ত মাত্র ১০০ টাকা এবং ক্লাস ৯ থেকে ১২ পর্যন্ত মাত্র ১৫০ টাকা।'
  },
  {
    titleEn: 'All-Subjects Package for Primary (Class 2-4)',
    titleBn: 'প্রাথমিক শ্রেণির জন্য সর্ববিষয় প্যাকেজ (ক্লাস ২-৪)',
    descEn: 'Classes 2–4 enjoy comprehensive all-subject coverage (₹800/mon for W.B. Board, ₹1,500/mon for CBSE) with dedicated attention.',
    descBn: 'ক্লাস ২-৪ এর জন্য সকল বিষয়ের সমন্বিত মাসিক প্যাকেজ (পশ্চিমবঙ্গ বোর্ডে ৮০০ টাকা ও সিবিএসই-তে ১৫০০ টাকা)।'
  },
  {
    titleEn: 'Affordable Per-Subject Flexibility',
    titleBn: 'নমনীয় বিষয়ভিত্তিক মাসিক ফি',
    descEn: 'From Class 5 onwards, choose only the subjects you need help with (from ₹300/sub for W.B. Board, from ₹750/sub for CBSE).',
    descBn: 'পঞ্চম শ্রেণি থেকে শুধুমাত্র প্রয়োজনীয় বিষয় নির্বাচন করার পূর্ণ স্বাধীনতা রয়েছে।'
  },
  {
    titleEn: '2 Free Demo Classes Included',
    titleBn: '২টি ফ্রি ডেমো ক্লাসের সুযোগ',
    descEn: 'Experience our conceptual teaching and meet our faculty before paying any tuition fees or making commitments.',
    descBn: 'কোনো আর্থিক অঙ্গীকারের পূর্বেই ২টি ডায়াগনস্টিক ডেমো ক্লাস করে শিক্ষাপদ্ধতি যাচাই করার সম্পূর্ণ সুযোগ।'
  }
];

// Helper to filter items
export function getFeeItems(board?: 'all' | CurriculumBoard, stage?: 'all' | 'primary' | 'upper_primary' | 'secondary' | 'higher_secondary') {
  return OFFICIAL_FEES_DATA.filter((item) => {
    if (board && board !== 'all' && item.curriculumBoard !== board) {
      return false;
    }
    if (stage && stage !== 'all' && item.academicStage !== stage) {
      return false;
    }
    return true;
  });
}

// Calculator function
export function calculateEstimatedFee(
  gradeNumber: number,
  curriculumBoard: CurriculumBoard,
  subjectCount: number = 1
): {
  item: FeeStructureItem;
  admissionFee: number;
  monthlyTuition: number;
  isPackage: boolean;
  totalFirstMonth: number;
} {
  const match = OFFICIAL_FEES_DATA.find(
    (f) => f.gradeNumber === gradeNumber && f.curriculumBoard === curriculumBoard
  ) || OFFICIAL_FEES_DATA[0];

  const isPackage = match.tuitionType === 'package';
  const monthlyTuition = isPackage ? match.monthlyTuition : match.monthlyTuition * Math.max(1, subjectCount);
  const totalFirstMonth = match.admissionFee + monthlyTuition;

  return {
    item: match,
    admissionFee: match.admissionFee,
    monthlyTuition,
    isPackage,
    totalFirstMonth
  };
}
