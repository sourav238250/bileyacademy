import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  FlaskConical, 
  Laptop, 
  BookOpen, 
  Calculator, 
  Award,
  Flame,
  Bot
} from 'lucide-react';
import { Logo } from './Logo';
import { ACADEMY_STATS } from '../data/academyData';

interface HeroProps {
  onSelectCategory: (category: 'primary' | 'upper_primary' | 'secondary' | 'higher_secondary') => void;
  onOpenDemoModal: () => void;
  onJumpToAiTutor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCategory, onOpenDemoModal, onJumpToAiTutor }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Logo Badge & Pill Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center space-x-2 bg-slate-900/90 border border-amber-500/30 rounded-2xl px-3 py-1.5 shadow-lg">
                <Logo size="sm" />
                <div className="text-left">
                  <span className="text-xs font-black font-serif text-white tracking-wide block">
                    BILEY ACADEMY
                  </span>
                  <span className="text-[10px] text-amber-400 font-bold tracking-widest block uppercase">
                    SINCE 2026
                  </span>
                </div>
              </div>
              
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs font-semibold text-amber-300">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Awakening Potential • Inspired by Swami Vivekananda</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] font-serif">
              Mastery in Every Subject from <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
                Class 1 to Class 12
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong>Biley Academy</strong> delivers structured, concept-first coaching across 
              <strong> English, Mathematics, Science, Biology, Physics, Chemistry, and Computer Science / Application</strong>. 
              From joyful primary foundations to board exams and competitive engineering/medical benchmarks (JEE/NEET).
            </p>

            {/* Key Value Checks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Small Batches (15-18)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hands-on Science & Comp Lab</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Weekly Mock Test Series</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>1-on-1 Doubt Clearing</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>CBSE / ICSE / WBCHSE</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>JEE & NEET Foundation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                id="hero-btn-book-demo"
                onClick={onOpenDemoModal}
                className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all flex items-center space-x-2"
              >
                <span>Book 2 Free Demo Classes</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-ai-tutor"
                onClick={onJumpToAiTutor}
                className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 hover:border-amber-400 transition-all flex items-center space-x-2 shadow-sm"
              >
                <Bot className="w-4 h-4 text-amber-400" />
                <span>Ask AI Doubt Solver</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Quick Academic Tier Selector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>Explore Grade Curriculums</span>
                  </h2>
                  <p className="text-xs text-slate-400">Select an academic level to inspect detailed syllabus:</p>
                </div>
                <span className="text-[10px] bg-slate-800 text-amber-300 font-bold px-2 py-1 rounded-md border border-slate-700">
                  4 Tiers
                </span>
              </div>

              {/* Tier Cards */}
              <div className="space-y-2.5 pt-4">
                {/* Primary */}
                <div 
                  id="tier-card-primary"
                  onClick={() => onSelectCategory('primary')}
                  className="group p-3.5 rounded-xl bg-slate-950/60 hover:bg-amber-950/20 border border-slate-800 hover:border-amber-500/40 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-bold text-white group-hover:text-amber-300">
                          Class 1 to 4 (Primary)
                        </h3>
                        <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 rounded">Foundation</span>
                      </div>
                      <p className="text-xs text-slate-400">English • Math • Computer • Science</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Upper Primary */}
                <div 
                  id="tier-card-upper-primary"
                  onClick={() => onSelectCategory('upper_primary')}
                  className="group p-3.5 rounded-xl bg-slate-950/60 hover:bg-emerald-950/20 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-bold text-white group-hover:text-emerald-300">
                          Class 5 to 8 (Upper Primary)
                        </h3>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 rounded">Middle School</span>
                      </div>
                      <p className="text-xs text-slate-400">Math • Science • Biology • English • Comp Sci</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Secondary */}
                <div 
                  id="tier-card-secondary"
                  onClick={() => onSelectCategory('secondary')}
                  className="group p-3.5 rounded-xl bg-slate-950/60 hover:bg-blue-950/20 border border-slate-800 hover:border-blue-500/40 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-bold text-white group-hover:text-blue-300">
                          Class 9 & 10 (Secondary)
                        </h3>
                        <span className="text-[10px] text-blue-400 bg-blue-500/10 px-1.5 rounded">Board Target</span>
                      </div>
                      <p className="text-xs text-slate-400">Math • Science (Phy/Chem) • Bio • Eng • Comp Sci</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>

                {/* Higher Secondary */}
                <div 
                  id="tier-card-higher-secondary"
                  onClick={() => onSelectCategory('higher_secondary')}
                  className="group p-3.5 rounded-xl bg-slate-950/60 hover:bg-indigo-950/20 border border-slate-800 hover:border-indigo-500/40 transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                      <FlaskConical className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-bold text-white group-hover:text-indigo-300">
                          Class 11 & 12 (Higher Secondary)
                        </h3>
                        <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-1.5 rounded">Board + JEE/NEET</span>
                      </div>
                      <p className="text-xs text-slate-400">Math • Physics • Chem • Bio • Eng • Comp Sci/App</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>

              {/* Bottom badge */}
              <div className="mt-4 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center space-x-1.5 text-amber-400 font-medium">
                  <Award className="w-3.5 h-3.5" />
                  <span>Personalized 1-on-1 Guidance</span>
                </span>
                <span className="text-slate-400">CBSE • ICSE • WBCHSE</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Statistics Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-t border-slate-800/80 pt-8">
          {ACADEMY_STATS.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 font-serif">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
