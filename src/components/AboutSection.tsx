import React from 'react';
import { 
  Flame, 
  Lightbulb, 
  Target, 
  Users, 
  FlaskConical, 
  Laptop, 
  CheckCircle, 
  ShieldCheck, 
  Compass,
  GraduationCap,
  Sparkles,
  Quote
} from 'lucide-react';
import swamiVivekanandaImg from '../assets/images/swami_vivekananda_portrait_1787621856392.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Our Heritage & Guiding Light</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            About Biley Academy
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
            Founded with a vision to revolutionize academic coaching by synthesizing ancient values of character, fearlessness, and scientific inquiry inspired by Swami Vivekananda.
          </p>
        </div>

        {/* Swami Vivekananda Heritage Showcase & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
          
          {/* Left Column: Swami Vivekananda Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group">
              
              {/* Subtle ambient aura behind image */}
              <div className="absolute top-0 right-1/2 translate-x-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/30 transition-all" />
              
              {/* Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl bg-slate-950">
                <img 
                  src={swamiVivekanandaImg} 
                  alt="Swami Vivekananda - Childhood name Biley, inspiration for Biley Academy" 
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 text-center">
                  <span className="inline-block bg-amber-500 text-slate-950 text-[11px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md mb-1">
                    Guiding Inspiration
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif tracking-wide">
                    Swami Vivekananda
                  </h3>
                  <p className="text-xs text-amber-300 font-medium">
                    (1863 – 1902) • Childhood Name: <span className="font-bold text-white">"Biley" (বিলে)</span>
                  </p>
                </div>
              </div>

              {/* Inscribed Quote Plaque */}
              <div className="mt-4 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center relative">
                <Quote className="w-5 h-5 text-amber-400/40 absolute top-2 left-2" />
                <p className="text-xs sm:text-sm text-amber-200 italic font-serif leading-relaxed px-3">
                  "Education is the manifestation of the perfection already in man."
                </p>
                <div className="mt-1 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  — The Eternal Motto of Biley Academy
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative of Biley & Academic Distinctives */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-950 border border-slate-800 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl" />
              
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>The Origin & Heritage</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                Why We Are Named <span className="text-amber-400">"Biley Academy"</span>
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                In his childhood in Kolkata, <strong>Swami Vivekananda</strong> was affectionately called <strong>"Biley" (বিলে)</strong>. 
                Even as a young boy, Biley was renowned for his insatiable curiosity, boundless courage, sharp logical intellect, and unwavering insistence on testing every fact with direct observation rather than blindly accepting dogma.
              </p>
              
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                At <strong>Biley Academy</strong> in Jamna, Pingla, we bring this transformative spirit into the classroom. We empower students to shed exam fear, question boldly, cultivate scientific rigor, and achieve absolute conceptual mastery from Class 1 to Class 12.
              </p>
            </div>

            {/* What sets us apart grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2.5">
                  <Lightbulb className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-sm font-bold text-white">No Rote Memorization</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Every formula, scientific law, and math theorem is deduced through first principles and real-world experiments.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
                  <Users className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-sm font-bold text-white">Small Focused Batches</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Strict batch size of 12-18 students ensures dedicated individual mentorship and daily doubt-solving.
                </p>
              </div>
            </div>

            {/* Feature Credentials Bar */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Class 1 to 12 (All Boards)</span>
              </div>
              <div className="flex items-center space-x-2">
                <FlaskConical className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>In-House Practical Science Lab</span>
              </div>
              <div className="flex items-center space-x-2">
                <Laptop className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Dedicated Coding Workstations</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

