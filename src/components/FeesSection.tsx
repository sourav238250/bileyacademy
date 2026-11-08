import React, { useState, useMemo } from 'react';
import { 
  Receipt, 
  Calculator, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  Info,
  BookOpen,
  HelpCircle,
  Clock,
  Award
} from 'lucide-react';
import { 
  OFFICIAL_FEES_DATA, 
  FEE_HIGHLIGHTS, 
  CurriculumBoard, 
  FeeStructureItem,
  calculateEstimatedFee 
} from '../data/feesData';
import { useLanguage } from '../context/LanguageContext';

interface FeesSectionProps {
  onOpenInquiry?: (subjectName?: string) => void;
}

export const FeesSection: React.FC<FeesSectionProps> = ({ onOpenInquiry }) => {
  const { isBengali, t } = useLanguage();

  // Filter States
  const [selectedBoard, setSelectedBoard] = useState<'all' | CurriculumBoard>('all');
  const [selectedStage, setSelectedStage] = useState<'all' | 'primary' | 'upper_primary' | 'secondary' | 'higher_secondary'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Interactive Calculator State
  const [calcBoard, setCalcBoard] = useState<CurriculumBoard>('W.B. Board');
  const [calcGrade, setCalcGrade] = useState<number>(10);
  const [calcSubjectCount, setCalcSubjectCount] = useState<number>(3);

  // Filtered rows for the rate table
  const filteredFees = useMemo(() => {
    return OFFICIAL_FEES_DATA.filter((item) => {
      // Board filter
      if (selectedBoard !== 'all' && item.curriculumBoard !== selectedBoard) {
        return false;
      }
      // Stage filter
      if (selectedStage !== 'all' && item.academicStage !== selectedStage) {
        return false;
      }
      // Search query (class name, board, track, rate)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchText = `${item.classLevel} ${item.curriculumBoard} ${item.streamTrack} ${item.monthlyTuitionDisplay} ${item.admissionFeeDisplay}`.toLowerCase();
        if (!matchText.includes(q)) return false;
      }
      return true;
    });
  }, [selectedBoard, selectedStage, searchQuery]);

  // Calculator Result
  const calculation = useMemo(() => {
    return calculateEstimatedFee(calcGrade, calcBoard, calcSubjectCount);
  }, [calcGrade, calcBoard, calcSubjectCount]);

  // WhatsApp quick link for the calculated fee
  const calculatedWhatsAppUrl = useMemo(() => {
    const text = isBengali
      ? `নমস্কার বিলে অ্যাকাডেমি, আমি ${calculation.item.classLevel} (${calculation.item.curriculumBoard} - ${calculation.item.streamTrack})-এর ফি ও ভর্তির ব্যাপারে জানতে চাই। নির্ধারিত ভর্তি ফি: ${calculation.item.admissionFeeDisplay}, মাসিক টিউশন: ${calculation.isPackage ? calculation.item.monthlyTuitionDisplay : `${calcSubjectCount}টি বিষয়ের জন্য ₹${calculation.monthlyTuition}/মাস`}। ফ্রি ডেমো বুক করতে চাই।`
      : `Hello Biley Academy, I am inquiring about admission & fee structure for ${calculation.item.classLevel} (${calculation.item.curriculumBoard} - ${calculation.item.streamTrack}). Admission Fee: ${calculation.item.admissionFeeDisplay}, Estimated Monthly Tuition: ${calculation.isPackage ? calculation.item.monthlyTuitionDisplay : `₹${calculation.monthlyTuition}/mon (${calcSubjectCount} subjects)`}. I'd like to book 2 free demo classes.`;
    return `https://wa.me/918918807082?text=${encodeURIComponent(text)}`;
  }, [calculation, calcSubjectCount, isBengali]);

  return (
    <section 
      id="fees" 
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Receipt className="w-4 h-4 text-amber-400" />
            <span>{isBengali ? 'অফিসিয়াল ফি বিবরণী ও স্বচ্ছ হার' : 'Official Transparent Fee Structure'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">{isBengali ? 'সেশন ২০২৬-২৭' : 'Session 2026–27'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-serif tracking-tight">
            {isBengali ? 'সুনির্দিষ্ট ও অভিভাবকবান্ধব মাসিক ফি কাঠামো' : 'Affordable, Transparent & Grade-Wise Tuition Rates'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isBengali
              ? 'বিলে অ্যাকাডেমিতে কোনো লুকানো খরচ বা অতিরিক্ত বার্ষিক চার্জ নেই। শ্রেণিভিত্তিক নামমাত্র ভর্তি ফি (₹১০০/₹১৫০) এবং সাশ্রয়ী মাসিক টিউশন হারের মাধ্যমে উচ্চমানের শিক্ষা প্রদান করা হয়।'
              : 'Zero hidden development charges. Grade-specific nominal admission fee (₹100 for Cl 1-8, ₹150 for Cl 9-12) with transparent monthly packages and per-subject tuition options.'}
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEE_HIGHLIGHTS.map((item, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors space-y-2"
            >
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isBengali ? item.titleBn : item.titleEn}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isBengali ? item.descBn : item.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Fee Estimator & Calculator Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 mb-1">
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>{isBengali ? 'ইনস্ট্যান্ট ফি ক্যালকুলেটর' : 'Instant Fee & Monthly Tuition Estimator'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                {isBengali ? 'আপনার শিক্ষার্থীর শ্রেণি ও বোর্ড নির্বাচন করে মোট ফি হিসাব করুন' : 'Calculate Exact Monthly Fee for Your Student'}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {isBengali 
                  ? 'বোর্ড, ক্লাস এবং প্রয়োজনীয় বিষয়ের সংখ্যা বেছে নিয়ে তাৎক্ষণিক হিসেব পান।' 
                  : 'Select Board, Class Grade, and desired number of subjects to compute total cost.'}
              </p>
            </div>

            <div className="flex items-center space-x-3 text-xs text-slate-400 shrink-0">
              <span className="flex items-center space-x-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{isBengali ? '১০০% স্বচ্ছতা' : 'Guaranteed Fixed Rates'}</span>
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>{isBengali ? '২টি ফ্রি ডেমো ক্লাস অন্তর্ভুক্ত' : '2 Free Demos Included'}</span>
            </div>
          </div>

          {/* Calculator Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Board Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">
                1. {isBengali ? 'শিক্ষাবোর্ড নির্বাচন করুন:' : 'Select Curriculum Board:'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['W.B. Board', 'CBSE'] as CurriculumBoard[]).map((board) => (
                  <button
                    key={board}
                    type="button"
                    onClick={() => setCalcBoard(board)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                      calcBoard === board
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-black'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    {board === 'W.B. Board' ? (isBengali ? 'পশ্চিমবঙ্গ বোর্ড' : 'W.B. Board') : 'CBSE'}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-500">
                {calcBoard === 'W.B. Board' 
                  ? (isBengali ? 'WBBPE, WBBSE মাধ্যমিক ও WBCHSE উচ্চমাধ্যমিক' : 'WBBPE, WBBSE Madhyamik & WBCHSE') 
                  : (isBengali ? 'এনসিইআরটি ও সিবিএসই বোর্ড পাঠ্যক্রম' : 'NCERT Central Board of Secondary Education')}
              </p>
            </div>

            {/* Step 2: Class Level */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">
                2. {isBengali ? 'শ্রেণি / ক্লাস নির্বাচন করুন:' : 'Select Class Level:'}
              </label>
              <select
                value={calcGrade}
                onChange={(e) => setCalcGrade(Number(e.target.value))}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs font-medium focus:border-amber-400 focus:outline-none"
              >
                {Array.from({ length: 11 }, (_, i) => i + 2).map((grade) => (
                  <option key={grade} value={grade}>
                    Class {grade} {grade <= 4 ? '(Primary Package)' : grade <= 8 ? '(Upper Primary)' : grade <= 10 ? '(Secondary Board)' : '(Science Track)'}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-500">
                {calcGrade >= 11 
                  ? (isBengali ? 'স্ট্রীম: সায়েন্স ট্র্যাক (Science Track)' : 'Stream: Science Track') 
                  : (isBengali ? 'স্ট্রীম: সাধারণ / জেনারেল (General)' : 'Stream: General')}
              </p>
            </div>

            {/* Step 3: Subjects Count or Package Notice */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 block">
                3. {calculation.isPackage 
                  ? (isBengali ? 'প্যাকেজের ধরন:' : 'Package Plan:') 
                  : (isBengali ? 'বিষয়ের সংখ্যা নির্বাচন করুন:' : 'Number of Subjects:')}
              </label>

              {calculation.isPackage ? (
                <div className="py-2.5 px-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isBengali ? 'সকল বিষয় অন্তর্ভুক্ত (All Subjects Package)' : 'All Foundation Subjects Included'}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((count) => (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setCalcSubjectCount(count)}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                        calcSubjectCount === count
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md font-black'
                          : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {count} {isBengali ? 'টি' : (count === 1 ? 'Sub' : 'Subs')}
                    </button>
                  ))}
                </div>
              )}

              <p className="text-[11px] text-slate-500">
                {calculation.isPackage 
                  ? (isBengali ? 'ক্লাস ১ থেকে ৪ পর্যন্ত সমন্বিত সর্ববিষয় প্যাকেজ' : 'Fixed monthly flat rate for all subjects') 
                  : `${calculation.item.monthlyTuitionDisplay}`}
              </p>
            </div>
          </div>

          {/* Calculator Output Display Bar */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-auto">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  {isBengali ? 'এককালীন ভর্তি ফি' : 'One-Time Admission Fee'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-400 mt-0.5 block font-mono">
                  {calculation.item.admissionFeeDisplay}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {isBengali ? 'ভর্তির সময় মাত্র একবার' : 'Nominal one-time'}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  {isBengali ? 'মাসিক টিউশন ফি' : 'Monthly Tuition'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-white mt-0.5 block font-mono">
                  ₹{calculation.monthlyTuition.toLocaleString('en-IN')}
                  <span className="text-xs text-slate-400 font-sans font-normal ml-1">/ month</span>
                </span>
                <span className="text-[10px] text-emerald-400 block">
                  {calculation.isPackage 
                    ? (isBengali ? 'সর্ববিষয় সমন্বিত হার' : 'All subjects package') 
                    : `${calcSubjectCount} ${isBengali ? 'টি বিষয়ের মোট টিউশন' : 'subject(s)'}`}
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  {isBengali ? 'প্রথম মাসের সর্বমোট' : 'First Month Total'}
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5 block font-mono">
                  ₹{calculation.totalFirstMonth.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {isBengali ? 'ভর্তি ফি + প্রথম মাসের ফি' : 'Admission + 1st Month Tuition'}
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto shrink-0">
              <a
                href={calculatedWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-md shadow-emerald-600/20"
                title="WhatsApp inquiry for this class and fee"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isBengali ? 'হোয়াটসঅ্যাপে বুক করুন' : 'WhatsApp This Estimate'}</span>
              </a>

              {onOpenInquiry && (
                <button
                  type="button"
                  onClick={() => onOpenInquiry(`Class ${calcGrade} (${calcBoard})`)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isBengali ? '২টি ফ্রি ডেমো বুক করুন' : 'Book 2 Free Demo Classes'}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tabular View & Filters */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
                {isBengali ? 'সম্পূর্ণ ফি তালিকা (শ্রেণিভিত্তিক বিবরণ)' : 'Comprehensive Grade-Wise Fee Table'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isBengali 
                  ? 'পশ্চিমবঙ্গ বোর্ড ও সিবিএসই এর ক্লাস ২ থেকে ১২ পর্যন্ত সম্পূর্ণ প্রাতিষ্ঠানিক হার।' 
                  : 'Official rates for West Bengal Board & CBSE across Classes 2 to 12.'}
              </p>
            </div>

            {/* Board Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedBoard('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedBoard === 'all'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isBengali ? 'উভয় বোর্ড (All Boards)' : 'All Boards'}
              </button>

              <button
                type="button"
                onClick={() => setSelectedBoard('W.B. Board')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedBoard === 'W.B. Board'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isBengali ? 'পশ্চিমবঙ্গ বোর্ড (W.B. Board)' : 'W.B. Board'}
              </button>

              <button
                type="button"
                onClick={() => setSelectedBoard('CBSE')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedBoard === 'CBSE'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                CBSE
              </button>
            </div>
          </div>

          {/* Academic Stage Filter Segmented Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            <span className="text-slate-500 font-semibold text-[11px] shrink-0 mr-1">
              {isBengali ? 'পর্যায় অনুযায়ী দেখুন:' : 'Filter Stage:'}
            </span>

            {[
              { id: 'all', labelEn: 'All Classes (2-12)', labelBn: 'সকল শ্রেণি (২-১২)' },
              { id: 'primary', labelEn: 'Primary (Cl 2-4 Package)', labelBn: 'প্রাথমিক প্যাকেজ (২-৪)' },
              { id: 'upper_primary', labelEn: 'Upper Primary (Cl 5-8)', labelBn: 'উচ্চ প্রাথমিক (৫-৮)' },
              { id: 'secondary', labelEn: 'Secondary Board (Cl 9-10)', labelBn: 'মাধ্যমিক (৯-১০)' },
              { id: 'higher_secondary', labelEn: 'Higher Secondary Science (Cl 11-12)', labelBn: 'উচ্চমাধ্যমিক সায়েন্স (১১-১২)' }
            ].map((stage) => {
              const isSelected = selectedStage === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStage(stage.id as any)}
                  className={`px-3 py-1.5 rounded-lg shrink-0 font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 text-amber-400 border border-amber-500/30 font-bold'
                      : 'bg-slate-950/60 hover:bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {isBengali ? stage.labelBn : stage.labelEn}
                </button>
              );
            })}
          </div>

          {/* The Rate Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90 text-slate-300">
                  <th className="py-3.5 px-4 font-bold text-slate-200">
                    {isBengali ? 'শ্রেণি স্তর (Class Level)' : 'Class Level'}
                  </th>
                  <th className="py-3.5 px-4 font-bold text-slate-200">
                    {isBengali ? 'পাঠ্যক্রম বোর্ড (Curriculum Board)' : 'Curriculum Board'}
                  </th>
                  <th className="py-3.5 px-4 font-bold text-slate-200">
                    {isBengali ? 'স্ট্রীম ট্র্যাক (Stream Track)' : 'Stream Track'}
                  </th>
                  <th className="py-3.5 px-4 font-bold text-slate-200 text-center">
                    {isBengali ? 'ভর্তি ফি (Admission Fee)' : 'Admission Fee'}
                  </th>
                  <th className="py-3.5 px-4 font-bold text-slate-200">
                    {isBengali ? 'মাসিক টিউশন ফি (Monthly Tuition)' : 'Monthly Tuition'}
                  </th>
                  <th className="py-3.5 px-4 font-bold text-slate-200 text-right">
                    {isBengali ? 'অ্যাকশন (Action)' : 'Inquiry'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {filteredFees.map((row) => {
                  const isWb = row.curriculumBoard === 'W.B. Board';
                  return (
                    <tr 
                      key={row.id} 
                      className="hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* Class Level */}
                      <td className="py-3 px-4 font-bold text-white whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className="font-serif">{row.classLevel}</span>
                          {row.gradeNumber <= 4 && (
                            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.2 rounded">
                              Package
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Curriculum Board */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className={`font-semibold ${isWb ? 'text-amber-300' : 'text-blue-300'}`}>
                          {row.curriculumBoard}
                        </span>
                      </td>

                      {/* Stream Track */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className={`text-xs ${row.streamTrack === 'Science' ? 'text-emerald-300 font-bold' : 'text-slate-300'}`}>
                          {row.streamTrack}
                        </span>
                      </td>

                      {/* Admission Fee */}
                      <td className="py-3 px-4 whitespace-nowrap text-center">
                        <span className="font-bold text-amber-400 font-mono text-sm">
                          {row.admissionFeeDisplay}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          one-time
                        </span>
                      </td>

                      {/* Monthly Tuition */}
                      <td className="py-3 px-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-white text-sm">
                            {row.monthlyTuitionDisplay}
                          </span>
                          {row.subjectsIncludedDescription && (
                            <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                              {row.subjectsIncludedDescription}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Action CTA */}
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <div className="inline-flex items-center space-x-2">
                          <a
                            href={`https://wa.me/918918807082?text=${encodeURIComponent(
                              `Hello Biley Academy, I want to inquire about admission for ${row.classLevel} (${row.curriculumBoard} - ${row.streamTrack}). Admission fee: ${row.admissionFeeDisplay}, Tuition: ${row.monthlyTuitionDisplay}. Please provide details.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-600/30 text-emerald-300 hover:text-emerald-200 transition-colors"
                            title="Quick WhatsApp Inquiry for this rate"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>

                          {onOpenInquiry && (
                            <button
                              type="button"
                              onClick={() => onOpenInquiry(`${row.classLevel} (${row.curriculumBoard})`)}
                              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
                            >
                              <span>{isBengali ? 'ভর্তি / ডেমো' : 'Demo'}</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Quick Notice on Rules & Transparent Invoicing */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {isBengali 
                  ? 'সকল ফি প্রদানের পর অ্যাকাডেমি থেকে অফিশিয়াল মানি রসিদ (Printed Receipt) প্রদান করা হয়। কোনো লুকানো বার্ষিক চার্জ নেই।' 
                  : 'Official printed receipts provided for all transactions. Fees are payable within the 10th of each calendar month.'}
              </span>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <span className="font-semibold text-slate-300">
                {isBengali ? 'সরাসরি তথ্য জানতে কল বা হোয়াটসঅ্যাপ:' : 'Helpline:'}
              </span>
              <a
                href="https://wa.me/918918807082"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-amber-400 hover:underline flex items-center space-x-1"
              >
                <span>8918807082</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
