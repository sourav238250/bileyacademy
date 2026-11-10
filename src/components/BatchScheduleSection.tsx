import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  Users, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  Download,
  FileText,
  Eye,
  Table
} from 'lucide-react';
import { BATCH_TIMINGS, FAQS } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface BatchScheduleSectionProps {
  onOpenInquiry: () => void;
}

export const BatchScheduleSection: React.FC<BatchScheduleSectionProps> = ({ onOpenInquiry }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [expandedRoutineIndex, setExpandedRoutineIndex] = useState<number | null>(0); // Default expanded for Class 2-4
  const { isBengali } = useLanguage();

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const toggleRoutineTable = (idx: number) => {
    setExpandedRoutineIndex(expandedRoutineIndex === idx ? null : idx);
  };

  return (
    <section id="batches" className="py-16 sm:py-24 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{isBengali ? 'অ্যাকাডেমিক রুটিন ও সময়সূচি' : 'Academic Routine & Timetable'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            {isBengali ? 'ব্যাচের সময়সূচি ও ক্লাসের রুটিন' : 'Batch Schedules & Class Timings'}
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            {isBengali 
              ? 'বিদ্যালয়ের হোমওয়ার্ক, স্ব-অধ্যয়ন এবং অ্যাকাডেমিক প্রস্তুতির ভারসাম্য বজায় রেখে সুপরিকল্পিত সাপ্তাহিক ক্লাসের সময়সূচি।'
              : 'Organized weekly class schedules tailored to allow balanced school homework, self-study, and intensive laboratory practicals.'}
          </p>
        </div>

        {/* Timetable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {BATCH_TIMINGS.map((batch, index) => {
            const hasPdfRoutine = Boolean(batch.routinePdfUrl);
            const isTableExpanded = expandedRoutineIndex === index;

            return (
              <div
                key={index}
                id={`batch-card-${index}`}
                className={`p-6 rounded-3xl bg-slate-900 border transition-all flex flex-col justify-between ${
                  hasPdfRoutine 
                    ? 'border-amber-500/50 shadow-xl shadow-amber-500/5 relative overflow-hidden' 
                    : 'border-slate-800 hover:border-amber-500/40'
                }`}
              >
                {hasPdfRoutine && (
                  <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-2 rotate-12 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[10px] font-black px-8 py-0.5 shadow-md uppercase tracking-wider hidden sm:block">
                    Official PDF
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                        Tier 0{index + 1}
                      </span>
                      {hasPdfRoutine && (
                        <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>{isBengali ? 'রুটিন সংযুক্তি' : 'Routine PDF Attached'}</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400 flex items-center space-x-1">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span>{isBengali && batch.batchSizeBn ? batch.batchSizeBn : batch.batchSize}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-serif">
                    {isBengali && batch.categoryBn ? batch.categoryBn : batch.category}
                  </h3>

                  <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>{isBengali ? 'দিন:' : 'Days:'}</strong> {isBengali && batch.scheduleBn ? batch.scheduleBn : batch.schedule}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>{isBengali ? 'সময়:' : 'Timings:'}</strong> {isBengali && batch.timingsBn ? batch.timingsBn : batch.timings}</span>
                    </div>
                    <div className="flex items-start space-x-2 pt-1 text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span><strong>{isBengali ? 'পাঠ্য বিষয়সমূহ:' : 'Covered Subjects:'}</strong> {isBengali && batch.subjectsBn ? batch.subjectsBn : batch.subjects}</span>
                    </div>
                  </div>

                  {/* Primary Routine Attachment & Download Box */}
                  {hasPdfRoutine && batch.routinePdfUrl && (
                    <div className="mt-5 p-4 rounded-2xl bg-slate-950/90 border-2 border-amber-500/30 relative">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-slate-950 flex items-center justify-center font-bold shadow-md shrink-0">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">
                              {isBengali && batch.routineTitleBn ? batch.routineTitleBn : batch.routineTitle}
                            </div>
                            <div className="text-[11px] text-amber-400/90 flex items-center gap-1.5 font-medium mt-0.5">
                              <span>Jamna • Pingla • WBBPE / CBSE</span>
                              <span>•</span>
                              <span>{batch.routinePdfSize || 'PDF'}</span>
                            </div>
                          </div>
                        </div>

                        {/* Direct Download & View Links */}
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <a
                            id="download-primary-routine-btn"
                            href={batch.routinePdfUrl}
                            download={batch.routinePdfName || 'BA_Routine_Class_2to4_WB_CBSE_2027.pdf'}
                            className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                            title={isBengali ? 'রুটিন ফাইল ডাউনলোড করুন' : 'Download Routine PDF'}
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>{isBengali ? 'ডাউনলোড' : 'Download PDF'}</span>
                          </a>

                          <a
                            id="view-primary-routine-btn"
                            href={batch.routinePdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-center gap-1 transition-colors"
                            title={isBengali ? 'নতুন ট্যাবে খুলুন' : 'Open in New Tab'}
                          >
                            <Eye className="w-3.5 h-3.5 text-amber-400" />
                            <span className="hidden sm:inline">{isBengali ? 'দেখুন' : 'View'}</span>
                          </a>
                        </div>
                      </div>

                      {/* Interactive Timetable Toggle */}
                      {batch.routineSlots && batch.routineSlots.length > 0 && (
                        <div className="border-t border-slate-800/80 pt-3">
                          <button
                            type="button"
                            onClick={() => toggleRoutineTable(index)}
                            className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-amber-300 transition-colors py-1 px-1 rounded cursor-pointer"
                          >
                            <span className="flex items-center gap-1.5">
                              <Table className="w-3.5 h-3.5 text-emerald-400" />
                              <span>{isBengali ? 'সম্পূর্ণ সময়সূচি টেবিল দেখুন' : 'View Provisional Routine Table (Class 2 to 4)'}</span>
                            </span>
                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isTableExpanded ? 'rotate-180 text-amber-400' : ''}`} />
                          </button>

                          {isTableExpanded && (
                            <div className="mt-3 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/90 text-[11px] animate-in fade-in duration-200">
                              <table className="w-full text-left border-collapse">
                                <thead>
                                  <tr className="bg-slate-800 text-slate-200 border-b border-slate-700 font-bold">
                                    <th className="p-2.5">Board / Class</th>
                                    <th className="p-2.5">Weekly Days</th>
                                    <th className="p-2.5">Time Slot</th>
                                    <th className="p-2.5">Subject Coverage</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800 text-slate-300">
                                  {batch.routineSlots.map((slot, sIdx) => (
                                    <tr 
                                      key={sIdx}
                                      className={slot.board === 'WBBPE' ? 'hover:bg-emerald-950/20' : 'hover:bg-blue-950/20'}
                                    >
                                      <td className="p-2.5 font-bold text-white flex items-center gap-1.5">
                                        <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                                          slot.board === 'WBBPE' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        }`}>
                                          {slot.board}
                                        </span>
                                        <span>{slot.classLevel}</span>
                                      </td>
                                      <td className="p-2.5 font-medium text-slate-200">{slot.days}</td>
                                      <td className="p-2.5">
                                        <span className="font-semibold text-amber-300">{slot.timeSlot}</span>
                                      </td>
                                      <td className="p-2.5 text-slate-400">{slot.note}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                              <div className="p-2 bg-slate-950/60 text-[10px] text-slate-400 text-center border-t border-slate-800">
                                {isBengali 
                                  ? 'জামনা • পিংলা • পশ্চিম মেদিনীপুর-৭২১১৪০ • প্রোভিশনাল সময়সূচি ২০২৭'
                                  : 'Jamna • Pingla • Paschim Medinipur - 721140 • Provisional Timetable 2027'}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-semibold">
                    ✓ {isBengali ? 'সাপ্তাহিক মক টেস্ট ও ডাউট স্লট অন্তর্ভুক্ত' : 'Includes Weekly Mock Test & Doubt Slot'}
                  </span>
                  <button
                    onClick={onOpenInquiry}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all"
                  >
                    {isBengali ? 'এই ব্যাচে যোগ দিন' : 'Join This Batch'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-serif flex items-center justify-center space-x-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>{isBengali ? 'প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)' : 'Frequently Asked Questions'}</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {isBengali 
                ? 'বিলে অ্যাকাডেমিতে ভর্তির পূর্বে অভিভাবক ও শিক্ষার্থীদের সাধারণ প্রশ্ন ও উত্তর।'
                : 'Everything parents and students need to know before joining Biley Academy.'}
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-amber-300"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
