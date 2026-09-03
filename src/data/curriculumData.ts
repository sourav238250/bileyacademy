import { ClassGradeInfo } from '../types';
import { PRIMARY_GRADES_DATA } from './curriculum/primaryData';
import { UPPER_PRIMARY_GRADES_DATA } from './curriculum/upperPrimaryData';
import { SECONDARY_GRADES_DATA } from './curriculum/secondaryData';
import { HIGHER_SECONDARY_GRADES_DATA } from './curriculum/higherSecondaryData';

export const GRADE_CATEGORIES = [
  {
    id: 'primary' as const,
    title: 'Primary Foundation',
    classes: 'Classes 1 to 4 (WBBPE / CBSE)',
    badge: 'Ages 6 - 10',
    description: 'Nurturing curiosity, logical reasoning (WBBPE / CBSE), computational thinking, and language fluency through activity-based learning.',
    icon: 'Sparkles',
    color: 'amber',
    subjectsList: ['English', 'Mathematics', 'Computer', 'Science']
  },
  {
    id: 'upper_primary' as const,
    title: 'Upper Primary',
    classes: 'Classes 5 to 8 (WBBSE / CBSE)',
    badge: 'Ages 10 - 14',
    description: 'Transitioning to structured conceptual sciences, algebra, biology, programming (WBBSE / CBSE), and strong analytical problem solving.',
    icon: 'BookOpen',
    color: 'emerald',
    subjectsList: ['Mathematics', 'Science', 'Biology', 'English', 'Computer Science / Application']
  },
  {
    id: 'secondary' as const,
    title: 'Secondary School',
    classes: 'Classes 9 and 10 (WBBSE / CBSE)',
    badge: 'Ages 14 - 16',
    description: 'Rigorous Board Exam preparation (WBBSE Madhyamik & CBSE), in-depth laboratory practicals, Olympiad foundations, and analytical precision.',
    icon: 'GraduationCap',
    color: 'blue',
    subjectsList: ['Mathematics', 'Science', 'Biology', 'English', 'Computer Science / Application']
  },
  {
    id: 'higher_secondary' as const,
    title: 'Higher Secondary',
    classes: 'Classes 11 and 12 (WBCHSE / CBSE)',
    badge: 'Ages 16 - 18',
    description: 'Dual-track mastery for Board Exams (WBCHSE / CBSE) and competitive entrances (JEE Main/Adv, WBJEE, Olympiads).',
    icon: 'Atom',
    color: 'indigo',
    subjectsList: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Computer Application', 'Computer Science']
  }
];

export const ALL_GRADES_DATA: ClassGradeInfo[] = [
  ...PRIMARY_GRADES_DATA,
  ...UPPER_PRIMARY_GRADES_DATA,
  ...SECONDARY_GRADES_DATA,
  ...HIGHER_SECONDARY_GRADES_DATA
];

export { PRIMARY_GRADES_DATA, UPPER_PRIMARY_GRADES_DATA, SECONDARY_GRADES_DATA, HIGHER_SECONDARY_GRADES_DATA };
