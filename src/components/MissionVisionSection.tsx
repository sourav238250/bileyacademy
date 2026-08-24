import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  Lightbulb, 
  Users, 
  FlaskConical, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { MISSION_VISION } from '../data/academyData';

export const MissionVisionSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillarDetails = [
    {
      title: "Conceptual Clarity First",
      icon: Lightbulb,
      color: "amber",
      desc: "We prioritize understanding the 'why' and 'how' before applying formulas. No rote memorization.",
      expandedPoints: [
        "First-principles breakdown of every formula and scientific law",
        "Physical analogies and daily life applications for abstract theories",
        "Encouraging exploratory questions without fear of being judged"
      ]
    },
    {
      title: "Individual Mentorship & Diagnostics",
      icon: Users,
      color: "emerald",
      desc: "Small batch sizes with personalized tracking, 1-on-1 doubt resolution, and regular parent progress reviews.",
      expandedPoints: [
        "Maximum 12-18 students per batch to guarantee teacher attention",
        "Weekly diagnostic error-analysis reports sent to parents",
        "Dedicated daily doubt clinics before and after regular lectures"
      ]
    },
    {
      title: "Hands-on Practical Labs",
      icon: FlaskConical,
      color: "blue",
      desc: "Fully equipped Physics, Chemistry, Biology, and Computer Labs for real experiential mastery.",
      expandedPoints: [
        "In-house optical ray benches, electrical meters, and microscope workstations",
        "Individual coding terminals for Python, Java, SQL, and Web design",
        "Qualitative chemical analysis and flower/cell slide preparation sessions"
      ]
    },
    {
      title: "Character, Discipline & Resilience",
      icon: ShieldCheck,
      color: "indigo",
      desc: "Instilling punctuality, scientific temper, ethical leadership, and perseverance inspired by Swami Vivekananda.",
      expandedPoints: [
        "Cultivating emotional resilience during high-stakes board and entrance exams",
        "Encouraging ethical collaboration, peer support, and academic honesty",
        "Time-management coaching and stress-free revision schedules"
      ]
    }
  ];

  return (
    <section id="mission-vision" className="py-16 sm:py-20 bg-slate-950 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Mission & Vision
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
            The philosophical pillars that guide our faculty, curriculum design, and mentorship ethos at Biley Academy.
          </p>
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/30 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/15 transition-all" />
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-inner">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Purpose & Commitment</span>
                <h3 className="text-2xl font-black text-white font-serif">{MISSION_VISION.mission.title}</h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-amber-300/90 mb-5">
              {MISSION_VISION.mission.subtitle}
            </p>

            <div className="space-y-3.5">
              {MISSION_VISION.mission.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-indigo-500/30 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/15 transition-all" />
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shadow-inner">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Future Horizon</span>
                <h3 className="text-2xl font-black text-white font-serif">{MISSION_VISION.vision.title}</h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-indigo-300/90 mb-5">
              {MISSION_VISION.vision.subtitle}
            </p>

            <div className="space-y-3.5">
              {MISSION_VISION.vision.points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Interactive Tabs */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
              Our 4 Core Pedagogical Pillars
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click each pillar to explore our classroom methodology:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {pillarDetails.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = selectedPillar === idx;
              return (
                <button
                  key={idx}
                  id={`pillar-tab-${idx}`}
                  onClick={() => setSelectedPillar(idx)}
                  className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-amber-500/15 border-amber-500/50 shadow-lg' 
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">Pillar 0{idx + 1}</span>
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isSelected ? 'text-amber-300' : 'text-slate-200'}`}>
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {pillar.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed View of Selected Pillar */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 animate-in fade-in duration-200">
            <div className="flex items-center space-x-3 mb-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h4 className="text-base sm:text-lg font-bold text-white">
                How we implement: {pillarDetails[selectedPillar].title}
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {pillarDetails[selectedPillar].expandedPoints.map((pt, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
