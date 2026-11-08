import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  Award, 
  Clock, 
  Target, 
  ArrowRight, 
  Layers, 
  ChevronRight,
  Brain,
  FlaskConical,
  GraduationCap,
  Users
} from 'lucide-react';
import { ALL_GRADES_DATA, GRADE_CATEGORIES } from '../data/curriculumData';
import { GradeCategory, SubjectCurriculum } from '../types';
import { useLanguage } from '../context/LanguageContext';

export interface StudentDashboardSectionProps {
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
  const { isBengali, t } = useLanguage();
  const [selectedGradeNum, setSelectedGradeNum] = useState<number>(10);
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'benchmarks'>('overview');

  const currentGrade = ALL_GRADES_DATA.find(g => g.gradeNumber === selectedGradeNum) || ALL_GRADES_DATA[9];

  // Category badge helper
  const getCategoryBadge = (cat: GradeCategory) => {
    switch(cat) {
      case 'primary': return { label: isBengali ? 'প্রাথমিক ভিত্তি' : 'Primary Foundation', color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
      case 'upper_primary': return { label: isBengali ? 'উচ্চ প্রাথমিক' : 'Upper Primary', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
      case 'secondary': return { label: isBengali ? 'মাধ্যমিক ও বোর্ড' : 'Secondary & Board', color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' };
      case 'higher_secondary': return { label: isBengali ? 'উচ্চ মাধ্যমিক ও JEE' : 'Higher Secondary & JEE', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30' };
    }
  };

  const badgeInfo = getCategoryBadge(currentGrade.category);

  return (
    <section id="student-dashboard" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider shadow-sm">
            <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
            <span>{isBengali ? 'শিক্ষার্থীর অগ্রগতি ও ট্র্যাকার' : 'Academic Performance & Learning Tracker'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif tracking-tight">
            {isBengali ? 'ধারাবাহিক মূল্যায়ন ও ব্যক্তিগত অগ্রগতি' : 'Structured Progress Tracking & Concept Mastery'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isBengali 
              ? 'বিলে অ্যাকাডেমিতে প্রতিটি শিক্ষার্থীর সাপ্তাহিক মক টেস্ট, ধারণাগত স্পষ্টতা, অধ্যায় সমাপ্তি ও রিভিশন সূচক স্বচ্ছতার সাথে পর্যবেক্ষণ করা হয়।' 
              : 'Monitor chapter completions, weekly test benchmarks, lab practicals, and 1-on-1 mentor feedback across Class 2 to 12.'}
          </p>
        </div>

        {/* Quick Class Grade Selector Pills */}
        <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar shadow-inner">
          <div className="flex items-center gap-1.5 shrink-0 px-1">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-1">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>{isBengali ? 'শ্রেণি:' : 'Class:'}</span>
            </span>
            {ALL_GRADES_DATA.map((grade) => {
              const isSelected = grade.gradeNumber === selectedGradeNum;
              return (
                <button
                  key={grade.gradeNumber}
                  onClick={() => setSelectedGradeNum(grade.gradeNumber)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105' 
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {isBengali ? `শ্রেণি ${grade.gradeNumber}` : `Class ${grade.gradeNumber}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column: Grade Overview & Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${badgeInfo.color}`}>
                  {badgeInfo.label}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {currentGrade.ageGroup}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-serif">
                  {currentGrade.gradeLabel}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {currentGrade.academicFocus}
                </p>
              </div>

              {/* Progress Summary Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {isBengali ? 'মোট বিষয়' : 'Subjects Covered'}
                  </span>
                  <span className="text-xl font-black text-amber-400 mt-1 block">
                    {currentGrade.subjects.length} {isBengali ? 'টি' : 'Subjects'}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    {isBengali ? 'সাপ্তাহিক ক্লাস' : 'Weekly Routine'}
                  </span>
                  <span className="text-sm font-bold text-emerald-400 mt-1 block">
                    {currentGrade.weeklySchedulePreview.timings}
                  </span>
                </div>
              </div>

              {/* Quick AI Tutor / Quiz shortcuts */}
              <div className="pt-2 space-y-2.5">
                {onNavigateToAiTutor && (
                  <button
                    onClick={onNavigateToAiTutor}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-amber-400" />
                      <span>{isBengali ? 'এই ক্লাসের এআই ডাউট সলভার' : 'Launch AI Doubt Tutor'}</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {onNavigateToQuiz && (
                  <button
                    onClick={onNavigateToQuiz}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-emerald-400" />
                      <span>{isBengali ? 'অধ্যায়ভিত্তিক কুইজ ও যাচাই' : 'Take Diagnostic Quiz'}</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Mentor Guidance Note */}
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>{isBengali ? 'ব্যক্তিগত পরামর্শ' : 'Personalized Mentorship'}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {isBengali 
                  ? 'প্রতিটি শিক্ষার্থী মাসে অন্তত ২ বার প্রতিষ্ঠাতা ও সিনিয়র শিক্ষকদের সাথে ব্যক্তিগত আলোচনা সেশনে অংশগ্রহণ করে।' 
                  : 'Every enrolled student receives bi-monthly performance diagnosis and personalized weak-area remediation clinics.'}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Subject Modules & Chapter Roadmap */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <h4 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                    <span>{isBengali ? 'বিষয়ভিত্তিক পাঠ্যক্রম ও ধারণাগত অগ্রগতি' : 'Subject Modules & Conceptual Roadmap'}</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isBengali ? 'বিস্তারিত সিলেবাস ও প্র্যাকটিক্যাল দেখতে বিষয়ে ক্লিক করুন' : 'Click on any subject to explore chapters, outcomes, and syllabus'}
                  </p>
                </div>

                {onSelectCategory && (
                  <button
                    onClick={() => onSelectCategory(currentGrade.category)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <span>{isBengali ? 'পূর্ণ সিলেবাস দেখুন' : 'Full Curriculum'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Subject Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentGrade.subjects.map((subject, idx) => {
                  return (
                    <div
                      key={subject.id || idx}
                      onClick={() => onInspectSubject && onInspectSubject(subject, currentGrade.gradeLabel)}
                      className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 transition-all hover:scale-[1.01] cursor-pointer group space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-amber-400/90 block">
                            {subject.code || `SUB-0${idx + 1}`}
                          </span>
                          <h5 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mt-0.5">
                            {subject.name}
                          </h5>
                        </div>

                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {subject.weeklyHours}h / week
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {subject.description}
                      </p>

                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{subject.keyChapters ? subject.keyChapters.length : 4} {isBengali ? 'অধ্যায়' : 'Key Chapters'}</span>
                        </span>

                        <span className="text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                          {isBengali ? 'সিলেবাস' : 'View'}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Test & Exam Policy Note */}
              <div className="p-4 rounded-2xl bg-slate-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    {isBengali 
                      ? 'সাপ্তাহিক OMR ও বর্ণনামূলক মক টেস্ট প্রতি রবিবার অনুষ্ঠিত হয়।' 
                      : 'Weekly OMR & subjective Board simulation mock tests conducted every Sunday.'}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 shrink-0">
                  100% Board Aligned
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
