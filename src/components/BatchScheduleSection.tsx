import React, { useState } from 'react';
import { 
  Clock, 
  Calendar, 
  Users, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { BATCH_TIMINGS, FAQS } from '../data/academyData';

interface BatchScheduleSectionProps {
  onOpenInquiry: () => void;
}

export const BatchScheduleSection: React.FC<BatchScheduleSectionProps> = ({ onOpenInquiry }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="batches" className="py-16 sm:py-24 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Academic Routine & Timetable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Batch Schedules & Class Timings
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            Organized weekly class schedules tailored to allow balanced school homework, self-study, and intensive laboratory practicals.
          </p>
        </div>

        {/* Timetable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {BATCH_TIMINGS.map((batch, index) => (
            <div
              key={index}
              id={`batch-card-${index}`}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    Tier 0{index + 1}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-slate-500" />
                    <span>{batch.batchSize}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-serif">
                  {batch.category}
                </h3>

                <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Days:</strong> {batch.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Timings:</strong> {batch.timings}</span>
                  </div>
                  <div className="flex items-start space-x-2 pt-1 text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span><strong>Covered Subjects:</strong> {batch.subjects}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-semibold">
                  ✓ Includes Weekly Mock Test & Doubt Slot
                </span>
                <button
                  onClick={onOpenInquiry}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all"
                >
                  Join This Batch
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-serif flex items-center justify-center space-x-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>Frequently Asked Questions</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Everything parents and students need to know before joining Biley Academy.
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
