import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  Circle, 
  Flame, 
  Trophy, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  RotateCcw, 
  GraduationCap, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  FlaskConical, 
  Bot, 
  HelpCircle, 
  CalendarCheck,
  CheckCheck,
  Zap,
  Target,
  ArrowRight,
  BookA,
  Calculator,
  Laptop,
  Leaf,
  Atom,
  Dna,
  Code
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ALL_GRADES_DATA } from '../data/curriculumData';
import { SubjectCurriculum, GradeCategory } from '../types';
import { 
  SAMPLE_STUDENT_PROFILES, 
  getCompletedChapterKeys, 
  saveCompletedChapterKeys, 
  toggleChapterCompletionState, 
  calculateGradeOverallProgress, 
  calculateSubjectMetric,
  isChapterCompleted
} from '../utils/progressStore';
import { Logo } from './Logo';

interface StudentDashboardSectionProps {
  onInspectSubject?: (subject: SubjectCurriculum, gradeLabel: string) => void;
  onNavigateToAiTutor?: () => void;
  onNavigateToQuiz?: () => void;
  onSelectCategory?: (category: GradeCategory) => void;
}

export const StudentDashboardSection: React.FC<StudentDashboardSectionProps> = ({
  onInspectSubject,
  onNavigateToAiTutor,
  onNavigateToQuiz,
  onSelectCategory
}) => {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState<number>(0);
  const [activeGradeNumber, setActiveGradeNumber] = useState<number>(10);
  const [completedKeys, setCompletedKeys] = useState<string[]>([]);
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>(null);
  const [filterSubject, setFilterSubject] = useState<string>('all');

  const currentStudent = SAMPLE_STUDENT_PROFILES[selectedStudentIndex];

  // Load progress for active grade
  useEffect(() => {
    const keys = getCompletedChapterKeys(activeGradeNumber);
    setCompletedKeys(keys);
  }, [activeGradeNumber]);

  // Current Grade Data
  const currentGradeData = ALL_GRADES_DATA.find(g => g.gradeNumber === activeGradeNumber) || ALL_GRADES_DATA[9]; // fallback Class 10

  // Calculate Progress Stats
  const overallProgress = calculateGradeOverallProgress(currentGradeData, completedKeys);

  // Handle Chapter Toggle
  const handleToggleChapter = (subjectId: string, chapterIndex: number) => {
    const { keys, isNowCompleted } = toggleChapterCompletionState(
      activeGradeNumber,
      subjectId,
      chapterIndex
    );
    setCompletedKeys([...keys]);

    if (isNowCompleted) {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.8 }
      });
    }
  };

  // Mark all chapters of a subject as complete
  const handleCompleteAllForSubject = (subject: SubjectCurriculum) => {
    const newKeys = [...completedKeys];
    subject.keyChapters.forEach((_, idx) => {
      const key = `${subject.id}-ch-${idx}`;
      if (!newKeys.includes(key)) {
        newKeys.push(key);
      }
    });
    setCompletedKeys(newKeys);
    saveCompletedChapterKeys(activeGradeNumber, newKeys);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  // Reset progress for this class
  const handleResetClassProgress = () => {
    setCompletedKeys([]);
    saveCompletedChapterKeys(activeGradeNumber, []);
  };

  // Quick switch student profile
  const handleSelectStudentPreset = (index: number) => {
    setSelectedStudentIndex(index);
    setActiveGradeNumber(SAMPLE_STUDENT_PROFILES[index].gradeNumber);
    if (onSelectCategory) {
      const category = ALL_GRADES_DATA.find(g => g.gradeNumber === SAMPLE_STUDENT_PROFILES[index].gradeNumber)?.category;
      if (category) onSelectCategory(category);
    }
  };

  // Icon mapping
  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookA': return BookA;
      case 'Calculator': return Calculator;
      case 'Laptop': return Laptop;
      case 'Leaf': return Leaf;
      case 'FlaskConical': return FlaskConical;
      case 'Dna': return Dna;
      case 'Atom': return Atom;
      case 'Code': return Code;
      default: return BookOpen;
    }
  };

  // Filtered Subjects
  const displayedSubjects = filterSubject === 'all' 
    ? currentGradeData.subjects 
    : currentGradeData.subjects.filter(s => s.id === filterSubject);

  return (
    <section id="student-dashboard" className="py-16 sm:py-24 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Real-Time Academic Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Student Curriculum Dashboard
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            Monitor real-time course syllabus completion, interactive chapter mastery, and academic milestones for <strong>Class 1 to 12</strong>.
          </p>
        </div>

        {/* Student Profile & Grade Switcher Bar */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            
            {/* Student Info Card */}
            <div className="flex items-start sm:items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-0.5 shadow-lg shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-amber-400" />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-black text-white font-serif">
                    {currentStudent.name}
                  </h3>
                  <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[11px] font-bold px-2 py-0.5 rounded-full font-mono">
                    {currentStudent.rollNumber}
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1">
                    <Flame className="w-3 h-3" />
                    <span>{currentStudent.streakDays}-Day Study Streak</span>
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  <strong>Batch:</strong> {currentStudent.batchName} • <strong>Target:</strong> {currentStudent.targetExam}
                </p>
              </div>
            </div>

            {/* Quick Profile Selectors & Grade Dropdown */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold text-slate-400 mr-1">Switch Profile:</span>
              {SAMPLE_STUDENT_PROFILES.map((student, idx) => (
                <button
                  key={student.id}
                  id={`btn-profile-${student.id}`}
                  onClick={() => handleSelectStudentPreset(idx)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all border ${
                    selectedStudentIndex === idx
                      ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                      : 'bg-slate-950 text-slate-300 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                >
                  {student.name.split(' ')[0]} ({student.gradeLabel.split(' ')[1]})
                </button>
              ))}

              {/* Class Dropdown for full 1-12 range */}
              <div className="relative">
                <select
                  id="select-custom-grade"
                  value={activeGradeNumber}
                  onChange={(e) => {
                    const gradeNum = parseInt(e.target.value, 10);
                    setActiveGradeNumber(gradeNum);
                    // Match preset if exists or clear preset highlight
                    const matchingIdx = SAMPLE_STUDENT_PROFILES.findIndex(p => p.gradeNumber === gradeNum);
                    if (matchingIdx !== -1) {
                      setSelectedStudentIndex(matchingIdx);
                    }
                  }}
                  className="bg-slate-950 border border-slate-700 text-amber-300 text-xs font-bold rounded-xl px-3 py-1.5 focus:outline-none focus:border-amber-400"
                >
                  {ALL_GRADES_DATA.map(g => (
                    <option key={g.gradeNumber} value={g.gradeNumber}>
                      {g.gradeLabel} (Ages {g.ageGroup})
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Curriculum Mastery
              </span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-black text-amber-400">
                  {overallProgress.overallPercentage}%
                </span>
                <span className="text-xs text-slate-400">
                  ({overallProgress.completedChapters}/{overallProgress.totalChapters} Ch.)
                </span>
              </div>
              {/* Mini progress bar */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                <div 
                  className="bg-amber-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress.overallPercentage}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Study Hours Logged
              </span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-black text-emerald-400">
                  {overallProgress.completedHours}h
                </span>
                <span className="text-xs text-slate-400">
                  / {overallProgress.totalHours}h Total
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                <div 
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress.totalHours > 0 ? (overallProgress.completedHours / overallProgress.totalHours) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Classroom Attendance
              </span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-black text-indigo-400">
                  {currentStudent.attendanceRate}%
                </span>
                <span className="text-xs text-emerald-400 font-semibold">Exemplary</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
                <div 
                  className="bg-indigo-400 h-full rounded-full"
                  style={{ width: `${currentStudent.attendanceRate}%` }}
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Academic Term Focus
              </span>
              <div className="flex items-baseline space-x-1 mt-1">
                <span className="text-base font-black text-white">
                  Term 2 Active
                </span>
              </div>
              <p className="text-[11px] text-amber-400 font-medium mt-1 truncate">
                Pre-Board & Revision Drill
              </p>
            </div>

          </div>
        </div>

        {/* Big Overall Curriculum Progress Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-850 border border-amber-500/30 shadow-2xl mb-10 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <Logo size="lg" />
          </div>

          <div className="relative z-10 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    {currentGradeData.gradeLabel} Master Curriculum
                  </span>
                  <span className="text-xs text-slate-400">
                    {currentGradeData.subjects.length} Enrolled Subjects
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-serif mt-1">
                  Overall Curriculum Progression
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  id="btn-reset-progress"
                  onClick={handleResetClassProgress}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Checkpoints</span>
                </button>
              </div>
            </div>

            {/* Giant Visual Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-end justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center space-x-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Total Syllabus Covered</span>
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-serif">
                  {overallProgress.overallPercentage}% Completed
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl h-6 sm:h-7 p-1 overflow-hidden shadow-inner">
                <div 
                  className={`h-full rounded-xl transition-all duration-700 ease-out flex items-center justify-end pr-2 text-[10px] font-black text-slate-950 ${
                    overallProgress.overallPercentage >= 75
                      ? 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400'
                      : overallProgress.overallPercentage >= 40
                      ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                  }`}
                  style={{ width: `${Math.max(5, overallProgress.overallPercentage)}%` }}
                >
                  {overallProgress.overallPercentage > 15 && `${overallProgress.overallPercentage}%`}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1">
                <span>Completed <strong>{overallProgress.completedChapters}</strong> of <strong>{overallProgress.totalChapters}</strong> Curriculum Units</span>
                <span>Remaining: <strong>{overallProgress.totalChapters - overallProgress.completedChapters}</strong> Units</span>
              </div>
            </div>

            {/* Academic Term Milestones Progress Bars */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Term 1 */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-300">Term 1: Foundational Syllabus</span>
                  <span className="text-xs font-bold text-emerald-400">100%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full w-full" />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Completed & Exam Passed</span>
              </div>

              {/* Term 2 */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-300">Term 2: Advanced Core Modules</span>
                  <span className="text-xs font-bold text-amber-400">
                    {Math.min(100, Math.round(overallProgress.overallPercentage * 1.1))}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-amber-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.round(overallProgress.overallPercentage * 1.1))}%` }}
                  />
                </div>
                <span className="text-[10px] text-amber-300 mt-1 block">Active In Classroom</span>
              </div>

              {/* Term 3 / Revision */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-300">Pre-Board & Final Revisions</span>
                  <span className="text-xs font-bold text-indigo-400">
                    {Math.max(0, Math.round(overallProgress.overallPercentage * 0.5))}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-indigo-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(0, Math.round(overallProgress.overallPercentage * 0.5))}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Scheduled Mock Test Series</span>
              </div>

            </div>

          </div>
        </div>

        {/* Subject-by-Subject Curriculum Progress Section */}
        <div className="space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black text-white font-serif">
                Subject-Wise Curriculum Progress
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Click any chapter to toggle completion status. Progress bars update in real time.
              </p>
            </div>

            {/* Filter by subject pill tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setFilterSubject('all')}
                className={`text-xs px-3 py-1 rounded-xl font-semibold transition-colors ${
                  filterSubject === 'all'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                All Subjects ({currentGradeData.subjects.length})
              </button>
              {currentGradeData.subjects.map(s => (
                <button
                  key={s.id}
                  onClick={() => setFilterSubject(s.id)}
                  className={`text-xs px-2.5 py-1 rounded-xl font-semibold transition-colors ${
                    filterSubject === s.id
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Subjects Grid with Individual Progress Bars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {displayedSubjects.map((subject) => {
              const Icon = getSubjectIcon(subject.iconName);
              const metric = calculateSubjectMetric(subject, completedKeys);
              const isExpanded = expandedSubjectId === subject.id || displayedSubjects.length === 1;

              return (
                <div 
                  key={subject.id}
                  id={`subject-progress-card-${subject.id}`}
                  className="rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
                >
                  <div>
                    
                    {/* Header: Icon, Code, Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[10px] font-mono font-bold bg-slate-950 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">
                              {subject.code}
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              metric.status === 'Ahead' 
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                : metric.status === 'On Track'
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                            }`}>
                              {metric.status}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-white font-serif mt-0.5">
                            {subject.name}
                          </h4>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xl font-black text-amber-400 font-mono">
                          {metric.percentage}%
                        </span>
                        <p className="text-[10px] text-slate-400">
                          {metric.completedChapters}/{metric.totalChapters} Units
                        </p>
                      </div>
                    </div>

                    {/* Subject Linear Progress Bar */}
                    <div className="space-y-1.5 mb-5">
                      <div className="w-full bg-slate-950 border border-slate-800/80 rounded-full h-3 p-0.5 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            metric.percentage >= 75
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                              : metric.percentage >= 40
                              ? 'bg-gradient-to-r from-amber-500 to-orange-400'
                              : 'bg-gradient-to-r from-blue-500 to-indigo-400'
                          }`}
                          style={{ width: `${Math.max(4, metric.percentage)}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span>{metric.completedHours} of {metric.totalHours} hrs covered</span>
                        <span>{subject.weeklyHours} hrs/week</span>
                      </div>
                    </div>

                    {/* Interactive Chapter Checklist */}
                    <div className="space-y-2 pt-3 border-t border-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                          Curriculum Modules & Checkpoints:
                        </span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleCompleteAllForSubject(subject)}
                            className="text-[11px] text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
                          >
                            <CheckCheck className="w-3 h-3" />
                            <span>Mark All Done</span>
                          </button>
                          <button
                            onClick={() => setExpandedSubjectId(isExpanded ? null : subject.id)}
                            className="text-[11px] text-slate-400 hover:text-white p-1 rounded"
                            aria-label="Toggle modules list"
                          >
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      {/* Chapters List */}
                      {isExpanded ? (
                        <div className="space-y-2 mt-2 max-h-60 overflow-y-auto pr-1">
                          {subject.keyChapters.map((chapter, cIdx) => {
                            const completed = isChapterCompleted(completedKeys, subject.id, cIdx);
                            return (
                              <div
                                key={cIdx}
                                id={`chapter-item-${subject.id}-${cIdx}`}
                                onClick={() => handleToggleChapter(subject.id, cIdx)}
                                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start space-x-3 text-xs ${
                                  completed
                                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-100 hover:bg-emerald-950/30'
                                    : 'bg-slate-950 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                                }`}
                              >
                                <button
                                  type="button"
                                  className="mt-0.5 shrink-0 text-slate-400"
                                  aria-label={`Mark ${chapter.title} as ${completed ? 'incomplete' : 'complete'}`}
                                >
                                  {completed ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                  ) : (
                                    <Circle className="w-4 h-4 text-slate-600 hover:text-amber-400 transition-colors" />
                                  )}
                                </button>

                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className={`font-bold ${completed ? 'text-emerald-300 line-through opacity-90' : 'text-white'}`}>
                                      Module {cIdx + 1}: {chapter.title}
                                    </span>
                                    {completed ? (
                                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded shrink-0 ml-1">
                                        Completed
                                      </span>
                                    ) : (
                                      <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded shrink-0 ml-1">
                                        In Progress
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                                    {chapter.description}
                                  </p>
                                  {chapter.practicalOrActivity && (
                                    <span className="inline-flex items-center space-x-1 text-[10px] text-amber-400/90 mt-1">
                                      <FlaskConical className="w-2.5 h-2.5" />
                                      <span className="truncate">{chapter.practicalOrActivity}</span>
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        /* Collapsed preview */
                        <div className="space-y-1.5 mt-2">
                          {subject.keyChapters.slice(0, 2).map((ch, idx) => {
                            const completed = isChapterCompleted(completedKeys, subject.id, idx);
                            return (
                              <div key={idx} className="flex items-center justify-between text-xs text-slate-300">
                                <span className="flex items-center space-x-2 truncate">
                                  {completed ? (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                  ) : (
                                    <Circle className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                                  )}
                                  <span className="truncate">{ch.title}</span>
                                </span>
                                <span className="text-[10px] text-slate-400 shrink-0 ml-2">
                                  {completed ? 'Done' : 'Active'}
                                </span>
                              </div>
                            );
                          })}
                          {subject.keyChapters.length > 2 && (
                            <button
                              onClick={() => setExpandedSubjectId(subject.id)}
                              className="text-[11px] text-amber-400 hover:underline pt-1 block"
                            >
                              + View all {subject.keyChapters.length} modules & track checklist →
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Card Bottom Actions */}
                  <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    {onInspectSubject && (
                      <button
                        onClick={() => onInspectSubject(subject, currentGradeData.gradeLabel)}
                        className="text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1"
                      >
                        <span>Inspect Syllabus</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <div className="flex items-center space-x-2">
                      {onNavigateToAiTutor && (
                        <button
                          onClick={onNavigateToAiTutor}
                          className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-colors flex items-center space-x-1 text-[11px]"
                          title="Ask AI Doubt Solver"
                        >
                          <Bot className="w-3.5 h-3.5 text-amber-400" />
                          <span className="hidden sm:inline">Ask AI Doubt</span>
                        </button>
                      )}
                      {onNavigateToQuiz && (
                        <button
                          onClick={onNavigateToQuiz}
                          className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors flex items-center space-x-1 text-[11px]"
                          title="Take Diagnostic Quiz"
                        >
                          <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="hidden sm:inline">Test Skills</span>
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
