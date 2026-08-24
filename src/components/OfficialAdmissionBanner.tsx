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
  Calendar, 
  Award, 
  GraduationCap, 
  Star, 
  Download, 
  Maximize2, 
  Share2, 
  ArrowRight,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import bannerStudentImg from '../assets/images/academy_banner_hero_1787534988441.jpg';

interface OfficialAdmissionBannerProps {
  onOpenInquiry?: (subjectOrClass?: string) => void;
  onEnlarge?: () => void;
  variant?: 'full' | 'compact' | 'card';
  className?: string;
}

export const OfficialAdmissionBanner: React.FC<OfficialAdmissionBannerProps> = ({
  onOpenInquiry,
  onEnlarge,
  variant = 'full',
  className = ''
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Biley Academy - Official Admission Notice',
          text: 'Admissions open for Classes 1 to 12 at Biley Academy, Jamna, Pingla, Paschim Medinipur. Contact: 9732531730.',
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to clipboard
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Biley Academy (Since 2026) - An Educational Coaching Institute for Classes I-XII. Contact: +91 9732531730 | Jamna, Pingla, Paschim Medinipur - 721140, W.B.`);
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
            Official Admission Banner
          </span>
          <span className="text-xs font-bold hidden sm:inline text-slate-950">
            Academic Session 2026-27 | Government Registered
          </span>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={handleShare}
            className="flex items-center space-x-1 font-bold px-2.5 py-1 rounded-lg bg-slate-950/10 hover:bg-slate-950/20 text-slate-950 transition-colors"
            title="Share Banner"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">{copied ? 'Copied!' : 'Share'}</span>
          </button>
          {onEnlarge && (
            <button
              onClick={onEnlarge}
              className="flex items-center space-x-1 font-bold px-2.5 py-1 rounded-lg bg-slate-950 text-amber-300 hover:bg-slate-800 transition-colors shadow-sm"
              title="View Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Enlarge</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Banner Visual Frame (Replicating the Official Graphic) */}
      <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-slate-950 via-[#0d1424] to-slate-950 relative">
        
        {/* Subtle Background Halftone Dots & Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header: Swami Vivekananda Emblem + Institute Title + BA Monogram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          
          {/* Left: Swami Vivekananda Portrait Emblem */}
          <div className="flex items-center space-x-3.5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 shadow-xl flex-shrink-0">
              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden border-2 border-amber-300/40 relative">
                {/* Stylized Icon Representation of Swami Vivekananda */}
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300">
                  <GraduationCap className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[9px] font-black text-amber-400 tracking-tighter uppercase mt-0.5">Vivekananda</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-full text-[9px] font-black">
                ★
              </div>
            </div>

            <div className="text-center sm:text-left">
              <span className="inline-block text-[11px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                An Educational Coaching Institute
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 drop-shadow-sm">
                BILEY ACADEMY
              </h2>
              <p className="text-xs sm:text-sm font-serif italic text-amber-300/90 font-medium">
                &ldquo;Learn Today, Lead Tomorrow&rdquo;
              </p>
            </div>
          </div>

          {/* Right: BA Crest Monogram */}
          <div className="flex items-center space-x-3 bg-slate-900/90 px-4 py-2 rounded-2xl border border-amber-500/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-inner">
              <span className="font-serif font-black text-2xl text-slate-950 tracking-tighter">BA</span>
            </div>
            <div>
              <div className="text-xs font-black text-amber-400 uppercase tracking-widest">ESTABLISHED</div>
              <div className="text-base font-black text-slate-100">SINCE 2026</div>
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
                For Classes I - V
              </span>
              <div className="text-xs font-bold text-emerald-400 mt-1 uppercase tracking-wide">
                All Subjects [ Offline ]
              </div>
            </div>

            {/* Feature List with Icons */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Well-trained teachers</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Easy-to-understand lessons</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Steady tests & progress checks</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">Helpful parent-teacher meets</span>
              </div>
            </div>

            {onOpenInquiry && (
              <button
                onClick={() => onOpenInquiry('Class 1-5 Primary')}
                className="mt-4 w-full py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Enroll in Classes I-V</span>
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
                  alt="Biley Academy Happy Coaching Students"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-3 inset-x-3 bg-slate-950/90 backdrop-blur-sm p-2 rounded-xl border border-amber-500/40 text-center">
                  <div className="flex items-center justify-center space-x-1.5 text-amber-400 text-xs font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Strong Foundation. Bright Future.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 mt-3 max-w-xs text-center font-medium">
              Concept-first pedagogy with regular evaluations, board prep, and mental arithmetic.
            </p>
          </div>

          {/* Right Column: Classes VI - XII (Secondary & Higher Secondary) */}
          <div className="lg:col-span-4 bg-slate-900/90 p-5 rounded-2xl border border-blue-500/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
            
            {/* Green Badge */}
            <div className="text-center mb-4">
              <span className="inline-block bg-emerald-600 text-white font-black text-sm sm:text-base px-5 py-1 rounded-full shadow-md">
                For Classes VI–XII
              </span>
              <div className="text-xs font-bold text-blue-400 mt-1 uppercase tracking-wide">
                [ Offline / Online ]
              </div>
            </div>

            {/* Subject Strengths */}
            <div className="text-xs font-bold text-slate-300 mb-2 flex items-center justify-center gap-2">
              <span className="text-amber-400">→</span>
              <span className="text-amber-300 uppercase tracking-wide">Strong Support in:</span>
              <span className="text-amber-400">←</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">Mathematics</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">Science</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">English</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0">
                  <Monitor className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">Computer Sci</span>
              </div>
            </div>

            {/* JEE Oriented Highlight Box */}
            <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-500/20 border border-amber-500/50 p-2.5 rounded-xl text-center shadow-inner">
              <div className="text-[10px] font-black text-amber-300 uppercase tracking-wider flex items-center justify-center gap-1">
                <span>★</span>
                <span>JEE ORIENTED</span>
                <span>★</span>
              </div>
              <div className="text-xs font-extrabold text-amber-200">
                Tricks & Methods are Followed
              </div>
            </div>

            {onOpenInquiry && (
              <button
                onClick={() => onOpenInquiry('Class 6-12 Secondary & JEE')}
                className="mt-3 w-full py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Enroll in Classes VI-XII</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3. Bottom Bar: Contact Phone + Full Address + QR Code */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
          
          {/* Direct Phone Dial & WhatsApp */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-2">
            <a 
              href="tel:+919732531730"
              className="flex-1 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-3.5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-transform hover:scale-[1.02]"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-wider text-blue-200">Direct Helpline</div>
                <div className="text-sm font-black tracking-wide">9732531730</div>
              </div>
            </a>

            <a 
              href="https://wa.me/919732531730?text=Hello%20Biley%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Location Address */}
          <div className="md:col-span-5 flex items-start space-x-2 text-slate-300">
            <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <span className="font-bold text-amber-300">Jamna</span> * <span className="font-bold text-slate-100">Pingla</span> * Paschim Medinipur * Pin-721140 * <span className="text-amber-400 font-semibold">W.B. * INDIA</span>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Adjacent to Jamna Bus Stand, Pingla Block
              </div>
            </div>
          </div>

          {/* QR Code & Motto */}
          <div className="md:col-span-3 flex items-center justify-end space-x-2.5">
            <div className="p-1.5 bg-white rounded-lg shadow flex-shrink-0">
              <QrCode className="w-8 h-8 text-slate-950" />
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-amber-400 uppercase">Building Knowledge.</div>
              <div className="text-[10px] font-bold text-slate-200">Building Tomorrow.</div>
            </div>
          </div>
        </div>

      </div>

      {/* Action Strip at bottom */}
      <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>New Admissions Active for 2026-27 | Morning & Evening Batches</span>
        </div>

        <div className="flex items-center space-x-2">
          {onOpenInquiry && (
            <button
              onClick={() => onOpenInquiry('General Inquiry')}
              className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors"
            >
              Book Free Trial Class
            </button>
          )}
          <a
            href="tel:+919732531730"
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>Call 9732531730</span>
          </a>
        </div>
      </div>
    </div>
  );
};
