import React, { useState } from 'react';
import { 
  BookOpen, 
  FlaskConical, 
  Calculator, 
  Laptop, 
  Leaf, 
  Atom, 
  Dna, 
  BookA, 
  Code, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Search, 
  ChevronRight, 
  Download,
  FileCheck2,
  BarChart3
} from 'lucide-react';
import { GRADE_CATEGORIES, ALL_GRADES_DATA } from '../data/curriculumData';
import { GradeCategory, SubjectCurriculum } from '../types';
import { SubjectModal } from './SubjectModal';
import { getCompletedChapterKeys, calculateSubjectMetric, calculateGradeOverallProgress } from '../utils/progressStore';
import { useLanguage } from '../context/LanguageContext';

interface CurriculumSectionProps {
  selectedCategory: GradeCategory;
  onSelectCategory: (category: GradeCategory) => void;
  onOpenInquiry: (subjectName?: string) => void;
  onNavigateToDashboard?: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenInquiry,
  onNavigateToDashboard
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectCurriculum | null>(null);
  const [activeGradeIndex, setActiveGradeIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const { isBengali, t } = useLanguage();

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

  // Get grades corresponding to current active category
  const filteredGrades = ALL_GRADES_DATA.filter(g => g.category === selectedCategory);
  const currentGrade = filteredGrades[activeGradeIndex] || filteredGrades[0] || ALL_GRADES_DATA[0];

  // Current Grade Data & Progress
  const completedKeys = getCompletedChapterKeys(currentGrade.gradeNumber);
  const gradeOverallMetric = calculateGradeOverallProgress(currentGrade, completedKeys);

  // Subject filtering
  const visibleSubjects = currentGrade.subjects.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.keyChapters.some(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="curriculum" className="py-16 sm:py-24 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('curriculumBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            {t('curriculumHeading')}
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            {t('curriculumSubtitle')}
          </p>
        </div>

        {/* 4 Category Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {GRADE_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                id={`category-tab-${category.id}`}
                onClick={() => {
                  onSelectCategory(category.id);
                  setActiveGradeIndex(0);
                  setSearchQuery('');
                }}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/50' 
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {category.classes}
                    </span>
                    <span className="text-[10px] text-slate-400">{category.badge}</span>
                  </div>
                  <h3 className={`text-base font-bold ${isSelected ? 'text-amber-400' : 'text-white'}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1">
                  {category.subjectsList.slice(0, 3).map((sub, i) => (
                    <span key={i} className="text-[10px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded">
                      {sub}
                    </span>
                  ))}
                  {category.subjectsList.length > 3 && (
                    <span className="text-[10px] bg-amber-500/10 text-amber-300 px-1 py-0.5 rounded font-bold">
                      +{category.subjectsList.length - 3}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Multi-Grade Sub-Selector Pills if category contains multiple grades */}
        {filteredGrades.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 mb-6 bg-slate-900/90 p-2 rounded-2xl border border-slate-800">
            <span className="text-xs font-bold text-slate-400 px-2 py-1 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{isBengali ? 'শ্রেণি নির্বাচন:' : 'Select Target Class:'}</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {filteredGrades.map((grade, idx) => {
                const isGradeActive = (activeGradeIndex === idx) || (!filteredGrades[activeGradeIndex] && idx === 0);
                return (
                  <button
                    key={grade.gradeNumber}
                    id={`grade-pill-${grade.gradeNumber}`}
                    onClick={() => {
                      setActiveGradeIndex(idx);
                      setSearchQuery('');
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                      isGradeActive
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black'
                        : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <span>{grade.gradeLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Tier Banner & Filter Toolbar */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {currentGrade.gradeLabel}
                </span>
                <span className="text-xs text-slate-400">
                  {isBengali ? 'বয়সসীমা:' : 'Target Age:'} {currentGrade.ageGroup}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mt-1">
                {isBengali ? 'অ্যাকাডেমিক ফোকাস:' : 'Academic Focus:'} {currentGrade.academicFocus}
              </h3>
            </div>

            {/* Quick Search & Dashboard Link */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={isBengali ? 'বিষয় বা অধ্যায় খুঁজুন...' : 'Search subject or chapter...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-xl text-slate-200 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {onNavigateToDashboard && (
                <button
                  onClick={onNavigateToDashboard}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/30 transition-all shrink-0 flex items-center space-x-1.5"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{isBengali ? 'অগ্রগতি দেখুন' : 'Track Progress'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Curriculum Completion Progress Bar Banner */}
          <div className="py-4 border-b border-slate-800">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-slate-300 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>
                  {currentGrade.gradeLabel} {isBengali ? 'সিলেবাস অগ্রগতি অবস্থা:' : 'Syllabus Completion Status:'}
                </span>
              </span>
              <span className="font-mono font-bold text-amber-400">
                {gradeOverallMetric.overallPercentage}% {isBengali ? 'সম্পন্ন' : 'Completed'} ({gradeOverallMetric.completedChapters}/{gradeOverallMetric.totalChapters} {isBengali ? 'মডিউল' : 'Modules'})
              </span>
            </div>
            <div className="w-full bg-slate-950 rounded-full h-2.5 p-0.5 border border-slate-800 overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 transition-all duration-500"
                style={{ width: `${Math.max(3, gradeOverallMetric.overallPercentage)}%` }}
              />
            </div>
          </div>

          {/* Schedule & Classroom Delivery Mode Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span><strong>{isBengali ? 'সাপ্তাহিক সময়সূচী:' : 'Weekly Timing:'}</strong> {currentGrade.weeklySchedulePreview.days} ({currentGrade.weeklySchedulePreview.timings})</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileCheck2 className="w-4 h-4 text-emerald-400" />
              <span><strong>{isBengali ? 'মোড:' : 'Mode:'}</strong> {currentGrade.weeklySchedulePreview.mode}</span>
            </div>
            <button
              onClick={() => onOpenInquiry()}
              className="font-bold text-amber-400 hover:text-amber-300 underline"
            >
              {isBengali ? 'কাস্টম সাবজেক্ট কম্বিনেশন অনুরোধ করুন →' : 'Request Custom Subject Combo →'}
            </button>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibleSubjects.map((subject) => {
            const Icon = getSubjectIcon(subject.iconName);
            const subjMetric = calculateSubjectMetric(subject, completedKeys);

            return (
              <div
                key={subject.id}
                id={`subject-card-${subject.id}`}
                className="rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-amber-500/5"
              >
                <div>
                  {/* Subject Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-mono font-bold bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                        {subject.code}
                      </span>
                      <div className="text-[11px] text-amber-400/90 font-semibold mt-1">
                        {subject.weeklyHours} {isBengali ? 'ঘণ্টা / সপ্তাহ' : 'Hrs / Week'}
                      </div>
                    </div>
                  </div>

                  {/* Subject Name & Desc */}
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {subject.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {subject.description}
                  </p>

                  {/* Subject Progress Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="text-slate-400 font-medium">
                        {isBengali ? 'সিলেবাস অগ্রগতি' : 'Curriculum Progress'}
                      </span>
                      <span className="font-bold text-amber-400 font-mono">{subjMetric.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-950 rounded-full h-2 border border-slate-800/80 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          subjMetric.percentage >= 75
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                            : subjMetric.percentage >= 40
                            ? 'bg-gradient-to-r from-amber-500 to-orange-400'
                            : 'bg-gradient-to-r from-blue-500 to-indigo-400'
                        }`}
                        style={{ width: `${Math.max(4, subjMetric.percentage)}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1">
                      <span>{subjMetric.completedChapters} of {subjMetric.totalChapters} {isBengali ? 'অধ্যায়' : 'Chapters'}</span>
                      <span>{subjMetric.status}</span>
                    </div>
                  </div>

                  {/* Syllabus Preview Snippets */}
                  <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {isBengali ? 'মূল অধ্যায়সমূহ' : 'Core Modules'} ({subject.keyChapters.length}):
                    </div>
                    <div className="space-y-1.5">
                      {subject.keyChapters.slice(0, 3).map((chapter, cIdx) => {
                        const isDone = completedKeys.includes(`${subject.id}-ch-${cIdx}`);
                        return (
                          <div key={cIdx} className="text-xs flex items-start space-x-2">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${isDone ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                            <span className={`truncate ${isDone ? 'text-slate-400 line-through' : 'text-slate-300'}`}>
                              {chapter.title}
                            </span>
                            {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5 ml-auto" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Lab badge if practical available */}
                  {subject.practicalAvailable && (
                    <div className="mt-4 inline-flex items-center space-x-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                      <FlaskConical className="w-3.5 h-3.5" />
                      <span>{isBengali ? 'বাস্তব প্র্যাক্টিক্যাল ল্যাব সেশন অন্তর্ভুক্ত' : 'Includes In-House Practical Lab Sessions'}</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    id={`btn-view-subject-${subject.id}`}
                    onClick={() => setSelectedSubject(subject)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
                  >
                    <span>{isBengali ? 'সম্পূর্ণ সিলেবাস দেখুন' : 'Inspect Full Syllabus'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenInquiry(subject.name)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 transition-colors"
                  >
                    {isBengali ? 'ভর্তি হন' : 'Enroll Subject'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Curriculum Download Bar */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl shrink-0">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {isBengali ? 'বিলে অ্যাকাডেমির অফিসিয়াল প্রসপেক্টাস ২০২৬-২৭' : 'Download Official Biley Academy Academic Prospectus 2026-27'}
              </h4>
              <p className="text-xs text-slate-400">
                {isBengali ? 'ক্লাস ১ থেকে ১২ এর সিলেবাস, স্কলারশিপ ও অনুষদের সম্পূর্ণ নির্দেশিকা।' : 'Complete syllabus for Class 1 to 12, fee schedule, scholarship criteria & faculty guidelines.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shrink-0 shadow-md flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>{isBengali ? 'প্রিন্ট / সেভ প্রসপেক্টাস' : 'Print / Save Prospectus'}</span>
          </button>
        </div>

      </div>

      {/* Modal for detailed chapter view */}
      {selectedSubject && (
        <SubjectModal
          subject={selectedSubject}
          gradeLabel={currentGrade.gradeLabel}
          onClose={() => setSelectedSubject(null)}
          onOpenInquiry={(subName) => {
            setSelectedSubject(null);
            onOpenInquiry(subName);
          }}
        />
      )}
    </section>
  );
};

