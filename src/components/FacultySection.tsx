import React from 'react';
import { 
  Award, 
  GraduationCap, 
  BookOpen, 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { FACULTY_MEMBERS, TESTIMONIALS } from '../data/academyData';
import { useFounderPhoto } from '../utils/founderPhotoStore';

export const FacultySection: React.FC = () => {
  const { photoUrl: founderPhoto } = useFounderPhoto();
  return (
    <section id="faculty" className="py-16 sm:py-24 bg-slate-900 text-slate-100 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Faculty Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-bold text-amber-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Distinguished Educators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Our Expert Faculty & Mentors
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            Passionate educators, Olympiad trainers, and board examiners with decades of proven teaching mastery across science, math, computer programming, and English.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {FACULTY_MEMBERS.map((mentor) => (
            <div
              key={mentor.id}
              id={`faculty-card-${mentor.id}`}
              className="rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all group hover:shadow-xl"
            >
              <div>
                {/* Avatar & Experience */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/40 p-0.5 bg-slate-900 shrink-0">
                    <img 
                      src={mentor.id === 'mentor-1' ? founderPhoto : mentor.avatarUrl} 
                      alt={mentor.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400">
                      {mentor.role}
                    </p>
                    <span className="inline-block text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 mt-1">
                      {mentor.experience} Exp
                    </span>
                  </div>
                </div>

                {/* Qualification & Bio */}
                <div className="space-y-2 text-xs text-slate-300">
                  <p className="font-semibold text-slate-200">
                    🎓 {mentor.qualification}
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>

                {/* Subjects Tagged */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {mentor.subjects.map((sub, sIdx) => (
                    <span key={sIdx} className="text-[10px] bg-slate-900 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center space-x-2 text-xs text-amber-300 font-medium">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{mentor.achievement}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hall of Fame & Testimonials */}
        <div className="border-t border-slate-800 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Student & Parent Testimonials
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Hear from our board toppers, engineering qualifiers, and proud parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed mb-4">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <h4 className="text-xs font-bold text-white">
                    {test.studentName}
                  </h4>
                  {test.parentName && (
                    <p className="text-[10px] text-slate-400">{test.parentName}</p>
                  )}
                  <span className="inline-block text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full mt-1">
                    {test.scoreOrRank}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
