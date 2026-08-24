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
  GraduationCap
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>Our Heritage & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            About Biley Academy
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
            Founded with a vision to revolutionize academic coaching by synthesizing ancient values of character and fearlessness with modern scientific inquiry.
          </p>
        </div>

        {/* Story & Heritage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold text-amber-300 font-serif flex items-center space-x-2">
                <Compass className="w-5 h-5 text-amber-400" />
                <span>The Story Behind the Name "Biley"</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                In his childhood in Kolkata, <strong>Swami Vivekananda</strong> was affectionately called <strong>"Biley" (বিলে)</strong>. 
                Even as a young boy, Biley was renowned for his insatiable curiosity, boundless courage, acute logical acumen, and unwavering habit of testing every concept with direct observation rather than blindly accepting dogma.
              </p>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                At <strong>Biley Academy</strong>, we embody this timeless spirit. We believe that true learning occurs when fear of failure is eradicated, fundamentals are thoroughly understood, and students are empowered to ask questions boldly in every subject from primary school to board exams.
              </p>
            </div>

            {/* What sets us apart */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2.5">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">No Rote Memorization</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Every formula, scientific law, and programming loop is deduced conceptually with physical models.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2.5">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">Intimate Batch Sizes</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Strict cap of 12-18 students per batch ensures individual doubt clearance for every learner.
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights & Visual Credentials */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 shadow-xl space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
                  15+
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Years of Proven Pedagogy</h4>
                  <p className="text-xs text-slate-400">Serving students across CBSE, ICSE & WBCHSE</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Coverage:</strong> Seamless academic progression from Class 1 all the way to Class 12.</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <FlaskConical className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>In-house Science Labs:</strong> Fully equipped apparatus for Physics experiments, Chemistry titrations, and Biology slide preparations.</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Laptop className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Computer Lab:</strong> High-speed workstations for Python, Java, SQL, Scratch, HTML/CSS, and C++.</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Target className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span><strong>Competitive Benchmarks:</strong> Synchronized training for Olympiads, NTSE, JEE Main & Advanced, NEET-UG, and WBJEE.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
