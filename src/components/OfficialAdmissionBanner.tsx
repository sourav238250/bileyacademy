import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Sparkles, 
  QrCode, 
  CheckCircle2, 
  BookOpen, 
  FlaskConical, 
  Calculator, 
  Monitor, 
  Users, 
  Award, 
  GraduationCap, 
  Maximize2, 
  Share2, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import bannerStudentImg from '../assets/images/academy_banner_hero_1787534988441.jpg';
import { useLanguage } from '../context/LanguageContext';

interface OfficialAdmissionBannerProps {
  onOpenInquiry?: (subjectOrClass?: string) => void;
  onEnlarge?: () => void;
  variant?: 'full' | 'compact' | 'card';
  className?: string;
}

export const OfficialAdmissionBanner: React.FC<OfficialAdmissionBannerProps> = ({
  onOpenInquiry,
  onEnlarge,
  className = ''
}) => {
  const { isBengali, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: isBengali ? 'বিলে অ্যাকাডেমি - সরকারি ভর্তি বিজ্ঞপ্তি' : 'Biley Academy - Official Admission Notice',
          text: isBengali 
            ? 'বিলে অ্যাকাডেমিতে ১ম থেকে ১২শ শ্রেণির ভর্তি চলছে। হোয়াটসঅ্যাপ: ৯৭৩২৫৩১৭৩০ (শুধুমাত্র হোয়াটসঅ্যাপ) • ইমেইল: bileyacademy@gmail.com।' 
            : 'Admissions open for Classes 1 to 12 at Biley Academy, Jamna, Pingla, Paschim Medinipur. WhatsApp: 9732531730 (WhatsApp Only) • Email: bileyacademy@gmail.com.',
          url: window.location.href,
        });
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Biley Academy (Since 2026) - An Educational Coaching Institute for Classes I-XII. WhatsApp: +91 9732531730 (WhatsApp Only) • Email: bileyacademy@gmail.com | Jamna, Pingla, Paschim Medinipur - 721140, W.B.`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`relative overflow-hidden rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100 shadow-2xl transition-all duration-300 ${className}`}>
      
      {/* Top Banner Utility Strip */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-slate-950">
        <div className="flex items-center space-x-2">
          <span className="bg-slate-950 text-amber-300 text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {isBengali ? 'অফিসিয়াল ভর্তি ব্যানার' : 'Official Admission Banner'}
          </span>
          <span className="text-xs font-bold hidden sm:inline text-slate-950">
            {isBengali ? 'শিক্ষাবর্ষ ২০২৬-২৭ | সরকারি নির্দেশিকা অনুযায়ী নিবন্ধিত' : 'Academic Session 2026-27 | Government Registered'}
          </span>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={handleShare}
            className="flex items-center space-x-1 font-bold px-2.5 py-1 rounded-lg bg-slate-950/10 hover:bg-slate-950/20 text-slate-950 transition-colors"
            title="Share Banner"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">{copied ? (isBengali ? 'কপি হয়েছে!' : 'Copied!') : (isBengali ? 'শেয়ার' : 'Share')}</span>
          </button>
          {onEnlarge && (
            <button
              onClick={onEnlarge}
              className="flex items-center space-x-1 font-bold px-2.5 py-1 rounded-lg bg-slate-950 text-amber-300 hover:bg-slate-800 transition-colors shadow-sm"
              title="View Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isBengali ? 'বড় করে দেখুন' : 'Enlarge'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Banner Visual Frame */}
      <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-slate-950 via-[#0d1424] to-slate-950 relative">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          
          {/* Left: Swami Vivekananda Portrait Emblem */}
          <div className="flex items-center space-x-3.5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 shadow-xl flex-shrink-0">
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden border-2 border-amber-300/40 relative">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300">
                  <GraduationCap className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[9px] font-black text-amber-400 tracking-tighter uppercase mt-0.5">
                  {isBengali ? 'বিবেকানন্দ' : 'Vivekananda'}
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-full text-[9px] font-black">
                ★
              </div>
            </div>

            <div className="text-center sm:text-left">
              <span className="inline-block text-[11px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                {isBengali ? 'একটি আদর্শ শিক্ষামূলক কোচিং ইনস্টিটিউট' : 'An Educational Coaching Institute'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 drop-shadow-sm">
                {t('heroTitle')}
              </h2>
              <p className="text-xs sm:text-sm font-serif italic text-amber-300/90 font-medium">
                {isBengali ? '“আজকের শিক্ষা, আগামী দিনের নেতৃত্ব”' : '“Learn Today, Lead Tomorrow”'}
              </p>
            </div>
          </div>

          {/* Right: BA Crest Monogram */}
          <div className="flex items-center space-x-3 bg-slate-900/90 px-4 py-2 rounded-2xl border border-amber-500/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-inner">
              <span className="font-serif font-black text-2xl text-slate-950 tracking-tighter">BA</span>
            </div>
            <div>
              <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
                {isBengali ? 'স্থাপিত' : 'ESTABLISHED'}
              </div>
              <div className="text-base font-black text-slate-100">
                {isBengali ? '২০২৬ সাল থেকে' : 'SINCE 2026'}
              </div>
              <div className="flex text-amber-400 text-[10px] space-x-1">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main 3-Column Core: Classes I-V | Student Centerpiece | Classes VI-XII */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-6">
          
          {/* Left Column: Classes I - V (Primary) */}
          <div className="lg:col-span-4 bg-slate-900/90 p-5 rounded-2xl border border-emerald-500/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            
            {/* Green Badge */}
            <div className="text-center mb-4">
              <span className="inline-block bg-emerald-600 text-white font-black text-sm sm:text-base px-5 py-1 rounded-full shadow-md">
                {isBengali ? '১ম থেকে ৫ম শ্রেণির জন্য' : 'For Classes I - V'}
              </span>
              <div className="text-xs font-bold text-emerald-400 mt-1 uppercase tracking-wide">
                {isBengali ? 'সমস্ত বিষয় [ অফলাইন ব্যাচ ]' : 'All Subjects [ Offline ]'}
              </div>
            </div>

            {/* Feature List with Icons */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  {isBengali ? 'দক্ষ ও প্রশিক্ষণপ্রাপ্ত শিক্ষকবৃন্দ' : 'Well-trained teachers'}
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  {isBengali ? 'সহজবোধ্য ও মননশীল পাঠদান' : 'Easy-to-understand lessons'}
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  {isBengali ? 'ধারাবাহিক মক টেস্ট ও মূল্যায়ন' : 'Steady tests & progress checks'}
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  {isBengali ? 'অভিভাবক ও শিক্ষকের নিয়মিত আলোচনা' : 'Helpful parent-teacher meets'}
                </span>
              </div>
            </div>

            {onOpenInquiry && (
              <button
                onClick={() => onOpenInquiry('Class 1-5 Primary')}
                className="mt-4 w-full py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>{isBengali ? '১ম-৫ম শ্রেণিতে ভর্তির আবেদন' : 'Enroll in Classes I-V'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Center Column: Oval Student Showcase + Core Tagline */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center px-2">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-[36px] overflow-hidden border-4 border-amber-400/80 shadow-2xl p-1 bg-gradient-to-b from-amber-400 to-orange-500 group">
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-slate-900 relative">
                <img 
                  src={bannerStudentImg} 
                  alt="Biley Academy Students"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-3 inset-x-3 bg-slate-950/90 backdrop-blur-sm p-2 rounded-xl border border-amber-500/40 text-center">
                  <div className="flex items-center justify-center space-x-1.5 text-amber-400 text-xs font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{isBengali ? 'দৃঢ় ভিত্তি • উজ্জ্বল ভবিষ্যৎ' : 'Strong Foundation. Bright Future.'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 mt-3 max-w-xs text-center font-medium">
              {isBengali 
                ? 'ধারণাগত স্পষ্টতা, নিয়মিত মূল্যায়ন, বোর্ড পরীক্ষার প্রস্তুতি ও বিশ্লেষণাত্মক দক্ষতা।' 
                : 'Concept-first pedagogy with regular evaluations, board prep, and mental arithmetic.'}
            </p>
          </div>

          {/* Right Column: Classes VI - XII (Secondary & Higher Secondary) */}
          <div className="lg:col-span-4 bg-slate-900/90 p-5 rounded-2xl border border-blue-500/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
            
            {/* Green Badge */}
            <div className="text-center mb-4">
              <span className="inline-block bg-emerald-600 text-white font-black text-sm sm:text-base px-5 py-1 rounded-full shadow-md">
                {isBengali ? '৬ষ্ঠ থেকে ১২শ শ্রেণির জন্য' : 'For Classes VI–XII'}
              </span>
              <div className="text-xs font-bold text-blue-400 mt-1 uppercase tracking-wide">
                {isBengali ? '[ অফলাইন / অনলাইন ]' : '[ Offline / Online ]'}
              </div>
            </div>

            {/* Subject Strengths */}
            <div className="text-xs font-bold text-slate-300 mb-2 flex items-center justify-center gap-2">
              <span className="text-amber-400">→</span>
              <span className="text-amber-300 uppercase tracking-wide">
                {isBengali ? 'বিশেষ জোর দেওয়া হয়:' : 'Strong Support in:'}
              </span>
              <span className="text-amber-400">←</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">
                  {isBengali ? 'গণিত' : 'Mathematics'}
                </span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">
                  {isBengali ? 'বিজ্ঞান ও ল্যাব' : 'Science'}
                </span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">
                  {isBengali ? 'ইংরেজি' : 'English'}
                </span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">
                  {isBengali ? 'কম্পিউটার' : 'Computer Sci'}
                </span>
              </div>
            </div>

            {/* JEE Oriented Highlight Box */}
            <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 border border-amber-500/50 p-2.5 rounded-xl text-center shadow-inner">
              <div className="text-[10px] font-black text-amber-300 uppercase tracking-wider flex items-center justify-center gap-1">
                <span>★</span>
                <span>{isBengali ? 'জেইই / নিট ও বোর্ড ভিত্তিক' : 'JEE ORIENTED'}</span>
                <span>★</span>
              </div>
              <div className="text-xs font-extrabold text-amber-200">
                {isBengali ? 'বিশেষ শর্টকাট ও সমস্যা সমাধানের কৌশল' : 'Tricks & Methods are Followed'}
              </div>
            </div>

            {onOpenInquiry && (
              <button
                onClick={() => onOpenInquiry('Class 6-12 Secondary & JEE')}
                className="mt-3 w-full py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>{isBengali ? '৬ষ্ঠ-১২শ শ্রেণিতে ভর্তির আবেদন' : 'Enroll in Classes VI-XII'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
          
          {/* Direct WhatsApp Contact */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-2">
            <a 
              href="https://wa.me/919732531730?text=Hello%20Biley%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center space-x-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-3.5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-transform hover:scale-[1.02]"
            >
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-wider text-emerald-200 font-bold">
                  {isBengali ? 'হোয়াটসঅ্যাপ হেল্পলাইন (শুধুমাত্র)' : 'WhatsApp Helpline (Only)'}
                </div>
                <div className="text-sm font-black tracking-wide">9732531730</div>
              </div>
            </a>
          </div>

          {/* Location Address */}
          <div className="md:col-span-5 flex items-start space-x-2 text-slate-300">
            <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <span className="font-bold text-amber-300">{isBengali ? 'যমুনা' : 'Jamna'}</span> * <span className="font-bold text-slate-100">{isBengali ? 'পিংলা' : 'Pingla'}</span> * {isBengali ? 'পশ্চিম মেদিনীপুর * পিন-৭২১১৪০' : 'Paschim Medinipur * Pin-721140'} * <span className="text-amber-400 font-semibold">{isBengali ? 'পশ্চিমবঙ্গ * ভারত' : 'W.B. * INDIA'}</span>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {isBengali ? 'যমুনা বাস স্ট্যান্ড সংলগ্ন, পিংলা ব্লক' : 'Adjacent to Jamna Bus Stand, Pingla Block'}
              </div>
            </div>
          </div>

          {/* QR Code & Motto */}
          <div className="md:col-span-3 flex items-center justify-end space-x-2.5">
            <div className="p-1.5 bg-white rounded-lg shadow flex-shrink-0">
              <QrCode className="w-8 h-8 text-slate-950" />
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-amber-400 uppercase">
                {isBengali ? 'জ্ঞান অর্জন।' : 'Building Knowledge.'}
              </div>
              <div className="text-[10px] font-bold text-slate-200">
                {isBengali ? 'ভবিষ্যৎ বিনির্মাণ।' : 'Building Tomorrow.'}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Action Strip at bottom */}
      <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {isBengali 
              ? '২০২৬-২৭ সেশনের নতুন ভর্তি চলছে | প্রাতঃকালীন ও সান্ধ্যকালীন ব্যাচ' 
              : 'New Admissions Active for 2026-27 | Morning & Evening Batches'}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {onOpenInquiry && (
            <button
              onClick={() => onOpenInquiry('General Inquiry')}
              className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              {isBengali ? 'বিনামূল্যে ট্রায়াল ক্লাস বুক করুন' : 'Book Free Trial Class'}
            </button>
          )}
          <a
            href="https://wa.me/919732531730?text=Hello%20Biley%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs border border-emerald-600 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{isBengali ? 'হোয়াটসঅ্যাপ: ৯৭৩২৫৩১৭৩০ (শুধুমাত্র)' : 'WhatsApp: 9732531730 (Only)'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

