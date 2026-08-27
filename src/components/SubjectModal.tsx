import React, { useState, useEffect } from 'react';
import { 
  X, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Circle,
  FlaskConical, 
  Award, 
  Download, 
  HelpCircle,
  FileText,
  Sparkles,
  Zap,
  BarChart3
} from 'lucide-react';
import { SubjectCurriculum } from '../types';
import { 
  getCompletedChapterKeys, 
  toggleChapterCompletionState, 
  calculateSubjectMetric, 
  isChapterCompleted 
} from '../utils/progressStore';

interface SubjectModalProps {
  subject: SubjectCurriculum | null;
  gradeLabel: string;
  onClose: () => void;
  onOpenInquiry: (subjectName: string) => void;
}

export const SubjectModal: React.FC<SubjectModalProps> = ({ 
  subject, 
  gradeLabel, 
  onClose,
  onOpenInquiry 
}) => {
  const [completedKeys, setCompletedKeys] = useState<string[]>([]);

  // Extract grade number from gradeLabel (e.g. "Class 10 (Secondary School)" -> 10)
  const gradeMatch = gradeLabel.match(/Class\s*(\d+)/i);
  const gradeNumber = gradeMatch ? parseInt(gradeMatch[1], 10) : 10;

  useEffect(() => {
    if (subject) {
      setCompletedKeys(getCompletedChapterKeys(gradeNumber));
    }
  }, [subject, gradeNumber]);

  if (!subject) return null;

  const metric = calculateSubjectMetric(subject, completedKeys);

  const handleToggle = (chapterIndex: number) => {
    const { keys } = toggleChapterCompletionState(gradeNumber, subject.id, chapterIndex);
    setCompletedKeys([...keys]);
  };

  const handlePrintOrDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-slate-800 flex items-start justify-between">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                  {gradeLabel} • {subject.code}
                </span>
                {subject.practicalAvailable && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center space-x-1">
                    <FlaskConical className="w-3 h-3" />
                    <span>In-House Lab Practical</span>
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-black text-white font-serif mt-1">
                {subject.name} Curriculum Blueprint
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          
          {/* Real-time Subject Curriculum Progress Bar Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Student Syllabus Progress
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.2 rounded-full ${
                  metric.status === 'Ahead'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                }`}>
                  {metric.status}
                </span>
              </div>
              <span className="text-base font-black text-amber-400 font-mono">
                {metric.percentage}% Completed
              </span>
            </div>

            <div className="w-full bg-slate-950 rounded-full h-3 p-0.5 border border-slate-800 overflow-hidden">
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

            <div className="flex items-center justify-between text-xs text-slate-400 pt-0.5">
              <span>{metric.completedChapters} of {metric.totalChapters} Modules Mastered</span>
              <span>{metric.completedHours} / {metric.totalHours} Estimated Course Hours Logged</span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Weekly Classes</span>
              <p className="text-base font-black text-amber-400 flex items-center space-x-1 mt-0.5">
                <Clock className="w-4 h-4" />
                <span>{subject.weeklyHours} Hours / Week</span>
              </p>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Total Modules</span>
              <p className="text-base font-black text-white mt-0.5">{subject.totalModules} Core Units</p>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Assessment Mode</span>
              <p className="text-xs font-bold text-emerald-400 mt-0.5 truncate">{subject.examPattern}</p>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-semibold">Board Coverage</span>
              <p className="text-xs font-bold text-indigo-400 mt-0.5">CBSE • WBBPE / WBBSE / WBCHSE</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Course Overview</h4>
            <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
              {subject.description}
            </p>
          </div>

          {/* Key Chapters and Detailed Subtopics */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                <FileText className="w-4 h-4" />
                <span>Syllabus Breakdown & Key Modules</span>
              </h4>
              <span className="text-[11px] text-slate-400">Click circle to toggle completion</span>
            </div>

            <div className="space-y-3">
              {subject.keyChapters.map((chapter, idx) => {
                const isCompleted = isChapterCompleted(completedKeys, subject.id, idx);

                return (
                  <div 
                    key={idx} 
                    className={`p-4 rounded-2xl border transition-all space-y-2 ${
                      isCompleted 
                        ? 'bg-emerald-950/20 border-emerald-500/30' 
                        : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center space-x-2.5">
                        <button
                          type="button"
                          onClick={() => handleToggle(idx)}
                          className="text-slate-400 hover:text-emerald-400 transition-colors"
                          title="Toggle chapter completion"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-600 hover:text-amber-400" />
                          )}
                        </button>
                        <h5 className={`font-bold text-sm ${isCompleted ? 'text-emerald-300 line-through' : 'text-white'}`}>
                          Module {idx + 1}: {chapter.title}
                        </h5>
                      </div>

                      <div className="flex items-center space-x-2">
                        {isCompleted && (
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                            Completed
                          </span>
                        )}
                        {chapter.practicalOrActivity && (
                          <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center space-x-1">
                            <FlaskConical className="w-3 h-3" />
                            <span>Lab: {chapter.practicalOrActivity}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed pl-7">
                      {chapter.description}
                    </p>

                    <div className="pt-2 pl-7 flex flex-wrap gap-1.5">
                      {chapter.subtopics.map((topic, sIdx) => (
                        <span key={sIdx} className="text-[11px] bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                          • {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Target Learning Outcomes</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {subject.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reference Materials & Textbooks */}
          <div>
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Award className="w-4 h-4" />
              <span>Recommended Study Guides & Practice Material</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {subject.referenceMaterials.map((book, idx) => (
                <span key={idx} className="text-xs font-medium bg-indigo-950/40 text-indigo-200 border border-indigo-500/30 px-3 py-1.5 rounded-lg">
                  📖 {book}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handlePrintOrDownload}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors flex items-center space-x-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Print Syllabus Guide</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(subject.name);
              }}
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-400 hover:to-orange-400 shadow-md transition-all"
            >
              Enroll for {subject.name} ({gradeLabel})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
