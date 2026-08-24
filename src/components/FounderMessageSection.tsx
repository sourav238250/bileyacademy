import React, { useState } from 'react';
import { 
  Quote, 
  GraduationCap, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { Logo } from './Logo';
import { FOUNDER_INFO } from '../data/academyData';

export const FounderMessageSection: React.FC = () => {
  const [highlightActive, setHighlightActive] = useState(false);

  return (
    <section id="founder" className="py-16 sm:py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative overflow-hidden">
      {/* Decorative ambient shape */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Founder & Director's Message
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            {FOUNDER_INFO.tagline}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Founder Profile Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden text-center">
              <div className="relative inline-block mb-4">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden mx-auto border-2 border-amber-500/50 shadow-lg p-1 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80" 
                    alt={FOUNDER_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-amber-500 text-slate-950 text-[11px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  Founder & Director
                </div>
              </div>

              <h3 className="text-xl font-black text-white font-serif mt-2">
                {FOUNDER_INFO.name}
              </h3>
              <p className="text-xs text-amber-400 font-semibold mt-1">
                {FOUNDER_INFO.title}
              </p>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed px-2">
                {FOUNDER_INFO.credentials}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2 text-left text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>22+ Years in STEM Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>180+ IITians & Top Rankers Mentored</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Senior Physics & Olympiad Specialist</span>
                </div>
              </div>
            </div>

            {/* Quick Inspiration Card */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
              <div className="flex items-center space-x-1.5 font-bold text-amber-300 mb-1">
                <Flame className="w-3.5 h-3.5" />
                <span>Our Guiding Maxim:</span>
              </div>
              "Arise, awake, and stop not till the goal is reached." — Swami Vivekananda
            </div>
          </div>

          {/* Right Column: Detailed Founder Letter */}
          <div className="lg:col-span-8 space-y-5">
            
            {/* Swami Vivekananda Quote Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/20 border-l-4 border-amber-500 shadow-md">
              <div className="flex items-start space-x-3">
                <Quote className="w-8 h-8 text-amber-400 shrink-0 opacity-70" />
                <div>
                  <p className="text-sm sm:text-base font-serif italic text-amber-200 leading-relaxed">
                    {FOUNDER_INFO.quote}
                  </p>
                  <span className="block text-xs text-amber-400/80 font-bold mt-2 text-right">
                    — Swami Vivekananda (Biley)
                  </span>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {FOUNDER_INFO.messageParagraphs.map((paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}

              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <Logo size="sm" />
                  <div>
                    <div className="font-serif italic text-amber-400 font-bold text-lg">
                      Dr. Sourav Banerjee
                    </div>
                    <div className="text-xs text-slate-400">
                      Founder & Academic Director, Biley Academy (Since 2026)
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Available for 1-on-1 Parent Consultation</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
