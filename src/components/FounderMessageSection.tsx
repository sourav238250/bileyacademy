import React, { useState } from 'react';
import { 
  Quote, 
  GraduationCap, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  BookOpen,
  FileText,
  Users,
  Presentation,
  Compass,
  Briefcase,
  Layers
} from 'lucide-react';
import { Logo } from './Logo';
import { FOUNDER_INFO } from '../data/academyData';
import souravDindaImg from '../assets/images/sourav_dinda_color_portrait_1787657237922.jpg';

export const FounderMessageSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'message' | 'credentials'>('message');

  return (
    <section id="founder" className="py-16 sm:py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative overflow-hidden">
      {/* Decorative ambient shape */}
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Leadership & Founder Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Founder & Academic Director's Message
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            {FOUNDER_INFO.tagline}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Founder Profile Card with Photo & Credentials */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-slate-950 border-2 border-amber-500/30 shadow-2xl relative overflow-hidden text-center">
              
              {/* Top ambient glow */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />

              {/* Portrait Photo */}
              <div className="relative inline-block mb-4 mt-2">
                <div className="w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden mx-auto border-2 border-amber-400 shadow-2xl p-1 bg-slate-900">
                  <img 
                    src={souravDindaImg} 
                    alt={FOUNDER_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-2.5 right-1/2 translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap">
                  Founder & Academic Director
                </div>
              </div>

              <h3 className="text-2xl font-black text-white font-serif mt-3">
                {FOUNDER_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm text-amber-400 font-bold mt-1">
                {FOUNDER_INFO.title}
              </p>
              
              {/* Experience Badge */}
              <div className="inline-flex items-center space-x-1.5 bg-slate-900 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 mt-2">
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                <span>{FOUNDER_INFO.experience}</span>
              </div>

              {/* Qualifications Container */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 text-left space-y-2.5">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5 mb-1">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>Academic Qualifications</span>
                </div>
                
                {FOUNDER_INFO.qualifications.map((qual, qIdx) => (
                  <div key={qIdx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200 font-medium leading-snug">
                      {qual}
                    </span>
                  </div>
                ))}
              </div>

              {/* Scholastic Milestones Grid */}
              <div className="mt-5 pt-4 border-t border-slate-800 text-left">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5 mb-3">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Scholastic & Research Credentials</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center space-x-1.5 text-amber-400 font-black text-sm">
                      <FileText className="w-3.5 h-3.5" />
                      <span>6</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">Research Publications</div>
                    <div className="text-[10px] text-slate-400">Journals & Conferences</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center space-x-1.5 text-emerald-400 font-black text-sm">
                      <Users className="w-3.5 h-3.5" />
                      <span>100</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">Project Guidance</div>
                    <div className="text-[10px] text-slate-400">Graduate Level</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center space-x-1.5 text-indigo-400 font-black text-sm">
                      <Presentation className="w-3.5 h-3.5" />
                      <span>2</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">FDPs Attended</div>
                    <div className="text-[10px] text-slate-400">Faculty Development</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center space-x-1.5 text-cyan-400 font-black text-sm">
                      <Layers className="w-3.5 h-3.5" />
                      <span>6</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">Workshops</div>
                    <div className="text-[10px] text-slate-400">Active Participation</div>
                  </div>
                </div>

                <div className="mt-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">Conference Organized:</span>
                  <span className="text-amber-400 font-black bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    1 (Lead Convener)
                  </span>
                </div>
              </div>

            </div>

            {/* Guiding Maxim */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed shadow-md">
              <div className="flex items-center space-x-1.5 font-bold text-amber-300 mb-1">
                <Flame className="w-3.5 h-3.5" />
                <span>Our Guiding Philosophy:</span>
              </div>
              "Education is the manifestation of the perfection already in man." — Swami Vivekananda (Biley)
            </div>
          </div>

          {/* Right Column: Comprehensive Message & Academic Philosophy */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Quote Callout Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/20 border-l-4 border-amber-500 shadow-xl">
              <div className="flex items-start space-x-3.5">
                <Quote className="w-9 h-9 text-amber-400 shrink-0 opacity-80" />
                <div>
                  <p className="text-sm sm:text-base font-serif italic text-amber-200 leading-relaxed">
                    {FOUNDER_INFO.quote}
                  </p>
                  <span className="block text-xs text-amber-400/90 font-bold mt-2 text-right">
                    — Swami Vivekananda (Biley)
                  </span>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed shadow-xl">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider pb-2 border-b border-slate-800">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>A Message to Parents and Aspiring Scholars</span>
              </div>

              {FOUNDER_INFO.messageParagraphs.map((paragraph, index) => (
                <p key={index} className="text-justify leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Signature Block */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <Logo size="sm" />
                  <div>
                    <div className="font-serif italic text-amber-400 font-bold text-lg">
                      {FOUNDER_INFO.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      Founder & Academic Director, Biley Academy
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      M.Phil (Comp. Sc.), M.C.S., B.Sc. (Comp. Sc., Math & Physics)
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-slate-300 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Personalized Academic Counseling</span>
                </div>
              </div>
            </div>

            {/* Three Pillar Foundation Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">Scientific Temper</div>
                <div className="text-xs text-slate-400">Hands-on lab experiments & real-world derivation</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">Computational Logic</div>
                <div className="text-xs text-slate-400">Algorithmic thinking from Class 1 to Class 12</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">Character Building</div>
                <div className="text-xs text-slate-400">Confidence, ethics & fearless pursuit of excellence</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

