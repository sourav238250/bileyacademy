import React, { useRef, useState } from 'react';
import { 
  Quote, 
  GraduationCap, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  FileText,
  Users,
  Presentation,
  Briefcase,
  Layers,
  Camera,
  Upload,
  RotateCcw
} from 'lucide-react';
import { Logo } from './Logo';
import { FOUNDER_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';
import { useFounderPhoto } from '../utils/founderPhotoStore';

export const FounderMessageSection: React.FC = () => {
  const { isBengali, t } = useLanguage();
  const { photoUrl, setPhoto, resetPhoto, isCustomPhoto } = useFounderPhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert(isBengali ? 'অনুগ্রহ করে একটি ছবি ফাইল নির্বাচন করুন' : 'Please select a valid image file');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        await setPhoto(dataUrl);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
      setIsUploading(false);
    };
    reader.onerror = () => {
      setIsUploading(false);
      alert('Failed to read image file');
    };
    reader.readAsDataURL(file);
  };

  const founderName = isBengali ? 'সৌরভ দিন্দা' : FOUNDER_INFO.name;
  const founderTitle = isBengali ? 'প্রতিষ্ঠাতা ও অ্যাকাডেমিক ডিরেক্টর, বিলে অ্যাকাডেমি' : FOUNDER_INFO.title;
  const founderExperience = isBengali ? '১৫+ বছরের শিক্ষকতা ও গবেষণার অভিজ্ঞতা' : FOUNDER_INFO.experience;

  const messageParagraphs = isBengali ? [
    "বিলে অ্যাকাডেমির স্বপ্ন নিহিত এক গভীর সত্যের মধ্যে: প্রতিটি শিক্ষার্থীর মধ্যে রয়েছে অপার সম্ভাবনা ও অনন্য মেধা। যখন শিশুরা কেবল মুখস্থবিদ্যার মাধ্যমে শেখে, তখন তারা শেখার আসল আনন্দ হারিয়ে ফেলে। স্বামী বিবেকানন্দের নির্ভীক অনুসন্ধিৎসা এবং চরিত্রের আদর্শ আমাদের অ্যাকাডেমির প্রতিটি পাঠদানকে চালিত করে।",
    "আমরা ক্লাস ১ থেকে শুরু করে ক্লাস ১২ পর্যন্ত প্রতিটি স্তরে মৌলিক ধারণাগত স্পষ্টতা (Conceptual Clarity) নিশ্চিত করি। গণিতের সূত্র হোক কিংবা পদার্থবিদ্যার জটিল নিয়ম বা কম্পিউটারের অ্যালগরিদম — সবই হাতে-কলমে প্র্যাক্টিক্যাল পরীক্ষা ও বাস্তব উদাহরণের মাধ্যমে শেখানো হয়।",
    "আমি ব্যক্তিগতভাবে প্রতিটি ব্যাচের অগ্রগতি পর্যবেক্ষণ করি, শিক্ষার্থীদের আত্মবিশ্বাস জোগাই এবং তাদের বোর্ড পরীক্ষা ও এন্ট্রান্স পরীক্ষার সর্বোচ্চ সাফল্যের জন্য প্রস্তুত করি। বিলে অ্যাকাডেমিতে আপনার সন্তানকে স্বাগত জানাই।"
  ] : FOUNDER_INFO.messageParagraphs;

  const qualifications = isBengali ? [
    "এম.ফিল (কম্পিউটার সায়েন্স) — শীর্ষ গ্রেড গবেষণা",
    "এম.সি.এস. (কম্পিউটার সায়েন্স মাস্টার্স) — বিশেষ কৃতিত্ব",
    "বি.এসসি. (কম্পিউটার সায়েন্স অনার্স, গণিত ও পদার্থবিদ্যা)"
  ] : FOUNDER_INFO.qualifications;

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
            <span>{t('founderBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            {t('founderHeading')}
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            {t('founderTagline')}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Founder Profile Card with Photo & Credentials */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-slate-950 border-2 border-amber-500/30 shadow-2xl relative overflow-hidden text-center">
              
              {/* Top ambient glow */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />

              {/* Hidden file input for uploading genuine portrait */}
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                id="founder-photo-file-input"
              />

              {/* Portrait Photo */}
              <div className="relative inline-block mb-4 mt-2 group">
                <div className="w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden mx-auto border-2 border-amber-400 shadow-2xl p-1 bg-slate-900 relative">
                  <img 
                    src={photoUrl} 
                    alt={FOUNDER_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />

                  {/* Upload overlay hover button */}
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center cursor-pointer rounded-xl text-amber-400 p-2 text-center"
                    title={isBengali ? 'আসল ছবি আপলোড / পরিবর্তন করুন' : 'Click to Upload Authentic Photo'}
                  >
                    <Camera className="w-7 h-7 mb-1.5 animate-bounce" />
                    <span className="text-[11px] font-bold text-white leading-tight">
                      {isBengali ? 'আসল ছবি নির্বাচন করুন' : 'Upload / Change Photo'}
                    </span>
                    <span className="text-[9px] text-slate-300 mt-0.5">
                      {isBengali ? '(জেপিজি / পিএনজি)' : '(JPG / PNG)'}
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-2.5 right-1/2 translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[11px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap">
                  {isBengali ? 'প্রতিষ্ঠাতা ও অ্যাকাডেমিক ডিরেক্টর' : 'Founder & Academic Director'}
                </div>
              </div>

              {/* Photo Upload Actions Toolbar */}
              <div className="flex items-center justify-center gap-2 mt-1 mb-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="inline-flex items-center space-x-1.5 text-[11px] font-bold px-3 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-all cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{isUploading ? (isBengali ? 'আপলোড হচ্ছে...' : 'Uploading...') : (isBengali ? 'ছবি পরিবর্তন করুন' : 'Change Photo')}</span>
                </button>

                {isCustomPhoto && (
                  <button
                    type="button"
                    onClick={resetPhoto}
                    title={isBengali ? 'ডিফল্ট ছবিতে ফিরুন' : 'Reset to Default'}
                    className="inline-flex items-center space-x-1 text-[11px] font-semibold px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{isBengali ? 'রিসেট' : 'Reset'}</span>
                  </button>
                )}
              </div>

              {uploadSuccess && (
                <div className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg py-1 px-2 my-1 animate-pulse">
                  {isBengali ? '✓ ছবি সফলভাবে আপডেট করা হয়েছে' : '✓ Photo updated successfully!'}
                </div>
              )}

              <h3 className="text-2xl font-black text-white font-serif mt-3">
                {founderName}
              </h3>
              <p className="text-xs sm:text-sm text-amber-400 font-bold mt-1">
                {founderTitle}
              </p>
              
              {/* Experience Badge */}
              <div className="inline-flex items-center space-x-1.5 bg-slate-900 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 mt-2">
                <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                <span>{founderExperience}</span>
              </div>

              {/* Qualifications Container */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 text-left space-y-2.5">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-1.5 mb-1">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>{isBengali ? 'শিক্ষাগত যোগ্যতা' : 'Academic Qualifications'}</span>
                </div>
                
                {qualifications.map((qual, qIdx) => (
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
                  <span>{isBengali ? 'গবেষণা ও শিক্ষাক্ষেত্রে কৃতিত্ব' : 'Scholastic & Research Credentials'}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center space-x-1.5 text-amber-400 font-black text-sm">
                      <FileText className="w-3.5 h-3.5" />
                      <span>৬টি</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">{isBengali ? 'গবেষণা পত্র' : 'Research Publications'}</div>
                    <div className="text-[10px] text-slate-400">{isBengali ? 'জার্নাল ও কনফারেন্স' : 'Journals & Conferences'}</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center space-x-1.5 text-emerald-400 font-black text-sm">
                      <Users className="w-3.5 h-3.5" />
                      <span>১০০+</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">{isBengali ? 'প্রজেক্ট গাইডেন্স' : 'Project Guidance'}</div>
                    <div className="text-[10px] text-slate-400">{isBengali ? 'স্নাতক স্তর' : 'Graduate Level'}</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center space-x-1.5 text-indigo-400 font-black text-sm">
                      <Presentation className="w-3.5 h-3.5" />
                      <span>২টি</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">{isBengali ? 'FDP প্রশিক্ষণ' : 'FDPs Attended'}</div>
                    <div className="text-[10px] text-slate-400">{isBengali ? 'অনুষদ উন্নয়ন' : 'Faculty Development'}</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex items-center space-x-1.5 text-cyan-400 font-black text-sm">
                      <Layers className="w-3.5 h-3.5" />
                      <span>৬টি</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium mt-0.5">{isBengali ? 'ওয়ার্কশপ' : 'Workshops'}</div>
                    <div className="text-[10px] text-slate-400">{isBengali ? 'সক্রিয় অংশগ্রহণ' : 'Active Participation'}</div>
                  </div>
                </div>

                <div className="mt-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">{isBengali ? 'কনফারেন্স পরিচালনা:' : 'Conference Organized:'}</span>
                  <span className="text-amber-400 font-black bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {isBengali ? '১ (প্রধান আহ্বায়ক)' : '1 (Lead Convener)'}
                  </span>
                </div>
              </div>

            </div>

            {/* Guiding Maxim */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed shadow-md">
              <div className="flex items-center space-x-1.5 font-bold text-amber-300 mb-1">
                <Flame className="w-3.5 h-3.5" />
                <span>{isBengali ? 'আমাদের পথপ্রদর্শক দর্শন:' : 'Our Guiding Philosophy:'}</span>
              </div>
              "{t('aboutQuote')}" — {t('aboutQuoteAuthor')}
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
                    "{t('aboutQuote')}"
                  </p>
                  <span className="block text-xs text-amber-400/90 font-bold mt-2 text-right">
                    — {t('aboutQuoteAuthor')}
                  </span>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed shadow-xl">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider pb-2 border-b border-slate-800">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{isBengali ? 'অভিভাবক ও শিক্ষার্থী বন্ধুদের প্রতি বার্তা' : 'A Message to Parents and Aspiring Scholars'}</span>
              </div>

              {messageParagraphs.map((paragraph, index) => (
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
                      {founderName}
                    </div>
                    <div className="text-xs text-slate-400">
                      {founderTitle}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                      M.Phil (Comp. Sc.), M.C.S., B.Sc. (Comp. Sc., Math & Physics)
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-slate-300 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isBengali ? 'ব্যক্তিগত অ্যাকাডেমিক কাউন্সিলিং' : 'Personalized Academic Counseling'}</span>
                </div>
              </div>
            </div>

            {/* Three Pillar Foundation Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
                  {isBengali ? 'বৈজ্ঞানিক অনুসন্ধিৎসা' : 'Scientific Temper'}
                </div>
                <div className="text-xs text-slate-400">
                  {isBengali ? 'হাতে-কলমে ল্যাব পরীক্ষা ও প্রত্যক্ষ উপলব্ধি' : 'Hands-on lab experiments & real-world derivation'}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
                  {isBengali ? 'গাণিতিক ও কম্পিউটেশনাল যুক্তি' : 'Computational Logic'}
                </div>
                <div className="text-xs text-slate-400">
                  {isBengali ? 'ক্লাস ১ থেকে ১২ পর্যন্ত অ্যালগরিদমিক চিন্তা' : 'Algorithmic thinking from Class 1 to Class 12'}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <div className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-1">
                  {isBengali ? 'চরিত্র ও নৈতিকতা গঠন' : 'Character Building'}
                </div>
                <div className="text-xs text-slate-400">
                  {isBengali ? 'আত্মবিশ্বাস, মানবিকতা ও নির্ভীক মেধা' : 'Confidence, ethics & fearless pursuit of excellence'}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


