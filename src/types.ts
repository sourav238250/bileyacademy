export type GradeCategory = 'primary' | 'upper_primary' | 'secondary' | 'higher_secondary';

export interface SubjectCurriculum {
  id: string;
  name: string;
  code: string;
  iconName: string;
  color: string;
  description: string;
  weeklyHours: number;
  totalModules: number;
  learningOutcomes: string[];
  keyChapters: {
    title: string;
    description: string;
    subtopics: string[];
    practicalOrActivity?: string;
  }[];
  referenceMaterials: string[];
  examPattern: string;
  practicalAvailable: boolean;
}

export interface ClassGradeInfo {
  gradeNumber: number;
  gradeLabel: string;
  category: GradeCategory;
  ageGroup: string;
  academicFocus: string;
  subjects: SubjectCurriculum[];
  weeklySchedulePreview: {
    days: string;
    timings: string;
    mode: string;
  };
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  subjects: string[];
  qualification: string;
  experience: string;
  bio: string;
  avatarUrl: string;
  achievement: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  parentName?: string;
  gradeOrAchievement: string;
  year: string;
  quote: string;
  scoreOrRank: string;
  rating: number;
}

export interface AdmissionInquiry {
  id?: string;
  studentName: string;
  parentName: string;
  gradeLevel: string;
  subjects: string[];
  phone: string;
  email: string;
  targetGoal: string;
  preferredBatchTime?: string;
  date?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  rollNumber: string;
  gradeNumber: number;
  gradeLabel: string;
  batchName: string;
  academicYear: string;
  targetExam: string;
  attendanceRate: number;
  streakDays: number;
}

export interface SubjectProgressMetric {
  subjectId: string;
  subjectName: string;
  completedChapters: number;
  totalChapters: number;
  percentage: number;
  completedHours: number;
  totalHours: number;
  status: 'Ahead' | 'On Track' | 'Needs Attention';
}

export type GalleryCategory = 'all' | 'banner' | 'classroom' | 'labs' | 'mentorship' | 'events';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'banner' | 'classroom' | 'labs' | 'mentorship' | 'events';
  categoryLabel: string;
  imageUrl: string;
  date: string;
  location: string;
  caption: string;
  tags: string[];
  isFeaturedBanner?: boolean;
}

export type NoticeCategory = 'all' | 'admission' | 'examination' | 'news';

export interface NoticeItem {
  id: string;
  title: string;
  category: 'admission' | 'examination' | 'news';
  categoryLabel: string;
  date: string;
  description: string;
  badge?: string;
  isNew?: boolean;
  isUrgent?: boolean;
  targetClass?: string;
  attachmentName?: string;
  actionText?: string;
  details?: string[];
}

