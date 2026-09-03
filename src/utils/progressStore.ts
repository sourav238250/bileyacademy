import { StudentProfile, SubjectProgressMetric, ClassGradeInfo, SubjectCurriculum } from '../types';
import { ALL_GRADES_DATA } from '../data/curriculumData';

export const SAMPLE_STUDENT_PROFILES: StudentProfile[] = [
  {
    id: 'std-1',
    name: 'Aarav Sharma',
    rollNumber: 'BA-2026-X042',
    gradeNumber: 10,
    gradeLabel: 'Class 10 (WBBSE Madhyamik & CBSE)',
    batchName: 'Achievers Secondary Morning Batch',
    academicYear: '2026 - 2027',
    targetExam: 'WBBSE Madhyamik / CBSE Board & NTSE',
    attendanceRate: 96,
    streakDays: 14
  },
  {
    id: 'std-6',
    name: 'Debjit Mukherjee',
    rollNumber: 'BA-2026-IX025',
    gradeNumber: 9,
    gradeLabel: 'Class 9 (WBBSE & CBSE Foundation)',
    batchName: 'Secondary Milestone Evening Batch',
    academicYear: '2026 - 2027',
    targetExam: 'WBBSE Summative Evaluations & Junior Olympiad',
    attendanceRate: 95,
    streakDays: 11
  },
  {
    id: 'std-2',
    name: 'Ananya Sen',
    rollNumber: 'BA-2026-XII018',
    gradeNumber: 12,
    gradeLabel: 'Class 12 (WBCHSE & CBSE Board)',
    batchName: 'Pinnacle Science Super-30 Batch',
    academicYear: '2026 - 2027',
    targetExam: 'WBCHSE / CBSE Board & JEE Advanced / WBJEE',
    attendanceRate: 98,
    streakDays: 22
  },
  {
    id: 'std-7',
    name: 'Sayan Banerjee',
    rollNumber: 'BA-2026-XI009',
    gradeNumber: 11,
    gradeLabel: 'Class 11 (WBCHSE & CBSE HS)',
    batchName: 'Ascent Higher Secondary Batch',
    academicYear: '2026 - 2027',
    targetExam: 'WBCHSE Semester Exams & JEE / NEET Foundation',
    attendanceRate: 97,
    streakDays: 19
  },
  {
    id: 'std-3',
    name: 'Rohan Das',
    rollNumber: 'BA-2026-VIII089',
    gradeNumber: 8,
    gradeLabel: 'Class 8 (Upper Primary)',
    batchName: 'Catalyst Foundation Evening Batch',
    academicYear: '2026 - 2027',
    targetExam: 'School Summative Exams & Junior Olympiad',
    attendanceRate: 94,
    streakDays: 9
  },
  {
    id: 'std-5',
    name: 'Souvik Mondal',
    rollNumber: 'BA-2026-V031',
    gradeNumber: 5,
    gradeLabel: 'Class 5 (WBBSE - West Bengal Board)',
    batchName: 'WBBSE Class 5 Amar Ganit & Science Batch',
    academicYear: '2026 - 2027',
    targetExam: 'WBBSE Summative Evaluations & Math Olympiad',
    attendanceRate: 97,
    streakDays: 16
  },
  {
    id: 'std-4',
    name: 'Isha Roy',
    rollNumber: 'BA-2026-IV012',
    gradeNumber: 4,
    gradeLabel: 'Class 4 (Primary Foundation)',
    batchName: 'Budding Geniuses Afternoon Batch',
    academicYear: '2026 - 2027',
    targetExam: 'Foundational Mastery & Mental Math Showcase',
    attendanceRate: 99,
    streakDays: 18
  }
];

const LOCAL_STORAGE_KEY_PREFIX = 'biley_curriculum_progress_v3_';

// Default initial completed chapters seed to reflect real-time academic progression
const DEFAULT_SEED_PROGRESS: Record<number, string[]> = {
  10: [
    'c10-math-ch-0', 'c10-math-ch-1',
    'c10-sci-ch-0', 'c10-sci-ch-1',
    'c10-bio-ch-0', 'c10-bio-ch-1',
    'c10-eng-ch-0', 'c10-eng-ch-1',
    'c10-comp-ch-0', 'c10-comp-ch-1'
  ],
  9: [
    'c9-math-ch-0', 'c9-math-ch-1',
    'c9-sci-ch-0', 'c9-sci-ch-1',
    'c9-bio-ch-0', 'c9-bio-ch-1',
    'c9-eng-ch-0', 'c9-eng-ch-1',
    'c9-comp-ch-0', 'c9-comp-ch-1'
  ],
  12: [
    'c12-math-ch-0',
    'c12-phy-ch-0',
    'c12-chem-ch-0',
    'c12-bio-ch-0',
    'c12-eng-ch-0',
    'c12-coma-ch-0',
    'c12-coms-ch-0'
  ],
  11: [
    'c11-math-ch-0',
    'c11-phy-ch-0',
    'c11-chem-ch-0',
    'c11-bio-ch-0',
    'c11-eng-ch-0',
    'c11-coma-ch-0',
    'c11-coms-ch-0'
  ],
  8: [
    'c8-math-ch-0', 'c8-math-ch-1',
    'c8-sci-ch-0', 'c8-sci-ch-1',
    'c8-bio-ch-0', 'c8-bio-ch-1',
    'c8-eng-ch-0', 'c8-eng-ch-1',
    'c8-comp-ch-0', 'c8-comp-ch-1'
  ],
  7: [
    'c7-math-ch-0', 'c7-math-ch-1',
    'c7-sci-ch-0', 'c7-sci-ch-1',
    'c7-bio-ch-0', 'c7-bio-ch-1',
    'c7-eng-ch-0', 'c7-eng-ch-1',
    'c7-comp-ch-0'
  ],
  6: [
    'c6-math-ch-0', 'c6-math-ch-1',
    'c6-sci-ch-0', 'c6-sci-ch-1',
    'c6-bio-ch-0',
    'c6-eng-ch-0', 'c6-eng-ch-1',
    'c6-comp-ch-0'
  ],
  5: [
    'c5-math-ch-0', 'c5-math-ch-1', 'c5-math-ch-2',
    'c5-sci-ch-0', 'c5-sci-ch-1',
    'c5-bio-ch-0', 'c5-bio-ch-1',
    'c5-eng-ch-0', 'c5-eng-ch-1',
    'c5-comp-ch-0'
  ],
  4: [
    'c4-eng-ch-0', 'c4-eng-ch-1', 'c4-eng-ch-2',
    'c4-math-ch-0', 'c4-math-ch-1',
    'c4-sci-ch-0', 'c4-sci-ch-1',
    'c4-comp-ch-0', 'c4-comp-ch-1'
  ]
};

export const getCompletedChapterKeys = (gradeNumber: number): string[] => {
  if (typeof window === 'undefined') {
    return DEFAULT_SEED_PROGRESS[gradeNumber] || [];
  }

  try {
    const saved = localStorage.getItem(`${LOCAL_STORAGE_KEY_PREFIX}${gradeNumber}`);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('Failed to load curriculum progress from localStorage', e);
  }

  // Fallback to seed or default first ~60% of chapters
  if (DEFAULT_SEED_PROGRESS[gradeNumber]) {
    return DEFAULT_SEED_PROGRESS[gradeNumber];
  }

  // Generate sensible default for any class 1-12
  const gradeData = ALL_GRADES_DATA.find(g => g.gradeNumber === gradeNumber);
  if (!gradeData) return [];

  const autoSeed: string[] = [];
  gradeData.subjects.forEach(subject => {
    // mark first 1 or 2 chapters as completed
    const chaptersToComplete = Math.min(2, Math.max(1, Math.floor(subject.keyChapters.length * 0.5)));
    for (let i = 0; i < chaptersToComplete; i++) {
      autoSeed.push(`${subject.id}-ch-${i}`);
    }
  });

  return autoSeed;
};

export const saveCompletedChapterKeys = (gradeNumber: number, keys: string[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(`${LOCAL_STORAGE_KEY_PREFIX}${gradeNumber}`, JSON.stringify(keys));
  } catch (e) {
    console.warn('Failed to save curriculum progress to localStorage', e);
  }
};

export const toggleChapterCompletionState = (
  gradeNumber: number,
  subjectId: string,
  chapterIndex: number
): { keys: string[]; isNowCompleted: boolean } => {
  const currentKeys = getCompletedChapterKeys(gradeNumber);
  const chapterKey = `${subjectId}-ch-${chapterIndex}`;
  const exists = currentKeys.includes(chapterKey);

  let newKeys: string[];
  if (exists) {
    newKeys = currentKeys.filter(k => k !== chapterKey);
  } else {
    newKeys = [...currentKeys, chapterKey];
  }

  saveCompletedChapterKeys(gradeNumber, newKeys);
  return { keys: newKeys, isNowCompleted: !exists };
};

export const isChapterCompleted = (
  completedKeys: string[],
  subjectId: string,
  chapterIndex: number
): boolean => {
  return completedKeys.includes(`${subjectId}-ch-${chapterIndex}`);
};

export const calculateSubjectMetric = (
  subject: SubjectCurriculum,
  completedKeys: string[]
): SubjectProgressMetric => {
  const totalChapters = Math.max(1, subject.keyChapters.length);
  let completedChapters = 0;

  subject.keyChapters.forEach((_, idx) => {
    if (completedKeys.includes(`${subject.id}-ch-${idx}`)) {
      completedChapters++;
    }
  });

  const percentage = Math.round((completedChapters / totalChapters) * 100);
  const totalHours = subject.weeklyHours * 12; // Approx 12-week course term
  const completedHours = Math.round((percentage / 100) * totalHours);

  let status: 'Ahead' | 'On Track' | 'Needs Attention' = 'On Track';
  if (percentage >= 75) status = 'Ahead';
  else if (percentage < 40) status = 'Needs Attention';

  return {
    subjectId: subject.id,
    subjectName: subject.name,
    completedChapters,
    totalChapters,
    percentage,
    completedHours,
    totalHours,
    status
  };
};

export const calculateGradeOverallProgress = (
  grade: ClassGradeInfo,
  completedKeys: string[]
) => {
  let totalChapters = 0;
  let completedChapters = 0;
  let totalHours = 0;
  let completedHours = 0;

  const subjectMetrics: SubjectProgressMetric[] = grade.subjects.map(subj => {
    const metric = calculateSubjectMetric(subj, completedKeys);
    totalChapters += metric.totalChapters;
    completedChapters += metric.completedChapters;
    totalHours += metric.totalHours;
    completedHours += metric.completedHours;
    return metric;
  });

  const overallPercentage = totalChapters > 0 
    ? Math.round((completedChapters / totalChapters) * 100) 
    : 0;

  return {
    overallPercentage,
    totalChapters,
    completedChapters,
    totalHours,
    completedHours,
    subjectMetrics
  };
};
