import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { Logo } from './Logo';
import { GradeCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (category: GradeCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const { isBengali, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      
      {/* Top Banner: Swami Vivekananda's words */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border-b border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-1">
          <p className="font-serif italic text-amber-300 text-sm sm:text-base max-w-3xl mx-auto">
            {isBengali ? (
              '“একটি ভাব গ্রহণ করো। সেই ভাবটিকে তোমার সমগ্র জীবন করে তোলো — তারই স্বপ্ন দেখো, তারই চিন্তা করো, তারই ওপর বেঁচে থাকো। তোমার মস্তিষ্ক, পেশী, স্নায়ু, তোমার দেহের প্রতিটি অংশ যেন সেই ভাবে পরিপূর্ণ থাকে।”'
            ) : (
              '“Take up one idea. Make that one idea your life; dream of it; think of it; live on that idea. Let the brain, the body, muscles, nerves, every part of your body be full of that idea.”'
            )}
          </p>
          <span className="text-[11px] text-amber-500 font-bold block uppercase tracking-widest">
            {isBengali ? '— স্বামী বিবেকানন্দ (বিলে)' : '— Swami Vivekananda (Biley)'}
          </span>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('hero')}>
              <Logo size="md" />
              <div>
                <span className="text-lg font-black text-white font-serif tracking-tight">
                  {t('heroTitle')}
                </span>
                <p className="text-[11px] text-slate-400">{isBengali ? 'অনবদ্য শিক্ষাদর্শ • ২০২৬ সাল থেকে' : 'Coaching Excellence • Since 2026'}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {isBengali ? (
                '১ম থেকে ১২শ শ্রেণির শিক্ষার্থীদের গণিত, বিজ্ঞান, কম্পিউটার ও ইংরেজিতে গভীর ভিত্তি গঠনের লক্ষ্যে নিবেদিত অ্যাকাডেমিক প্রতিষ্ঠান।'
              ) : (
                'Dedicated coaching institute empowering students from Class 1 through Class 12 with deep conceptual clarity in Mathematics, Physical & Biological Sciences, Computer Science, and English.'
              )}
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1">
              <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isBengali ? 'অনুমোদিত কোচিং ও টেস্টিং সেন্টার' : 'Authorized Coaching & Testing Centre'}</span>
              </div>
              <p className="text-slate-400">CBSE • ICSE / ISC • WBCHSE / WBBSE • JEE / NEET</p>
            </div>
          </div>

          {/* Col 2: Curriculum Progression (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isBengali ? 'পাঠ্যক্রম স্তর' : 'Curriculum Tiers'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('primary');
                    onNavigate('curriculum');
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  • <strong>{isBengali ? 'প্রাথমিক (১ম-৪র্থ):' : 'Primary (Class 1-4):'}</strong> {isBengali ? 'ইংরেজি, গণিত, কম্পিউটার, বিজ্ঞান' : 'Eng, Math, Comp, Science'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('upper_primary');
                    onNavigate('curriculum');
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  • <strong>{isBengali ? 'উচ্চ প্রাথমিক (৫ম-৮ম):' : 'Upper Primary (Class 5-8):'}</strong> {isBengali ? 'গণিত, বিজ্ঞান, জীববিদ্যা, ইংরেজি' : 'Math, Science, Bio, Eng, Comp'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('secondary');
                    onNavigate('curriculum');
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  • <strong>{isBengali ? 'মাধ্যমিক (৯ম-১০ম):' : 'Secondary (Class 9-10):'}</strong> {isBengali ? 'বোর্ড প্রস্তুতি ও ল্যাব' : 'Board Special & Labs'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('higher_secondary');
                    onNavigate('curriculum');
                  }}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  • <strong>{isBengali ? 'উচ্চ মাধ্যমিক (১১শ-১২শ):' : 'Higher Secondary (Class 11-12):'}</strong> {isBengali ? 'বোর্ড + জেইই/নিট' : 'Board + JEE/NEET'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isBengali ? 'প্রয়োজনীয় লিংক' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                  {t('navAbout')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mission-vision')} className="hover:text-amber-400 transition-colors">
                  {t('navMission')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('founder')} className="hover:text-amber-400 transition-colors">
                  {t('navFounder')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('curriculum')} className="hover:text-amber-400 transition-colors">
                  {t('navCurriculum')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('student-dashboard')} className="hover:text-amber-400 transition-colors font-semibold text-amber-300">
                  {t('navProgress')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-400 transition-colors font-semibold text-amber-400">
                  {t('navGallery')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ai-tutor')} className="hover:text-amber-400 transition-colors">
                  {t('navAiTutor')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="hover:text-amber-400 transition-colors">
                  {t('navQuiz')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('batches')} className="hover:text-amber-400 transition-colors">
                  {t('navBatches')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition-colors font-semibold text-amber-400">
                  {t('navContact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus & Helpline (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {isBengali ? 'ক্যাম্পাস ও যোগাযোগ' : 'Campus & Contact'}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-300">{isBengali ? 'বিলে অ্যাকাডেমি ক্যাম্পাস' : 'Biley Academy Campus'}</span>
                  <p className="text-slate-300">
                    {isBengali ? 'যমুনা, পিংলা, পশ্চিম মেদিনীপুর, পিন-৭২১১৪০, পশ্চিমবঙ্গ' : 'Jamna, Pingla, Paschim Medinipur, PIN-721140, West Bengal, India'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919732531730" className="hover:text-amber-400 font-bold text-amber-300">
                  +91 97325 31730
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:admissions@bileyacademy.edu.in" className="hover:text-amber-400">
                  admissions@bileyacademy.edu.in
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isBengali ? 'অফিস সময়: সকাল ৮:০০ – রাত ৮:০০ (প্রতিদিন)' : 'Office Hours: 8:00 AM – 8:00 PM (Daily)'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Biley Academy. {isBengali ? 'সর্বস্বত্ব সংরক্ষিত। চরিত্র গঠন ও শ্রেষ্ঠত্ব অর্জনে নিবেদিত।' : 'All Rights Reserved. Shaping bright futures with character & excellence.'}</p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 flex items-center space-x-1.5 transition-colors border border-slate-800"
          >
            <span>{isBengali ? 'উপরে যান' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

