import React from 'react';
import { 
  X, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  FlaskConical, 
  Award, 
  Download, 
  FileText,
  Sparkles
} from 'lucide-react';
import { SubjectCurriculum } from '../types';

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
  if (!subject) return null;

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
              <span className="text-[11px] text-slate-400">{subject.keyChapters.length} Academic Modules</span>
            </div>

            <div className="space-y-3">
              {subject.keyChapters.map((chapter, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl border bg-slate-950 border-slate-800 transition-all space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </span>
                      <h5 className="font-bold text-sm text-white">
                        Module {idx + 1}: {chapter.title}
                      </h5>
                    </div>

                    {chapter.practicalOrActivity && (
                      <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                        <FlaskConical className="w-3 h-3" />
                        <span>Lab: {chapter.practicalOrActivity}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pl-8">
                    {chapter.description}
                  </p>

                  <div className="pt-2 pl-8 flex flex-wrap gap-1.5">
                    {chapter.subtopics.map((topic, sIdx) => (
                      <span key={sIdx} className="text-[11px] bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/60">
                        • {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
