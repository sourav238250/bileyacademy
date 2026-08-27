import React from 'react';
import { Bell, MessageCircle } from 'lucide-react';
import { NOTICE_TICKER_ITEMS } from '../data/noticesData';
import { useLanguage } from '../context/LanguageContext';

interface NoticeTickerBarProps {
  onOpenInquiry?: (context?: string) => void;
  onJumpToNotices?: () => void;
}

const BENGALI_NOTICES = [
  '🎉 ২০২৬-২৭ সেশনের ভর্তি শুরু হয়েছে — ১ম থেকে ১২শ শ্রেণি • হোয়াটসঅ্যাপ: ৯৭৩২৫৩১৭৩০',
  '🔬 পদার্থবিদ্যা, রসায়ন ও জীববিদ্যার জন্য আধুনিক প্র্যাক্টিক্যাল ল্যাব সেশন উপলব্ধ',
  '🏆 মেধাভিত্তিক স্কলারশিপ টেস্ট ২০২৬: সর্বোচ্চ ১০০% পর্যন্ত ছাড়',
  '💻 ষষ্ঠ থেকে দ্বাদশ শ্রেণির জন্য প্র্যাকটিক্যাল কোডিং ও পাইথন প্রোগ্রামিং অন্তর্ভুক্ত',
  '🌟 অভিজ্ঞ শিক্ষক ও গবেষকদের দ্বারা প্রত্যক্ষ পাঠদান'
];

export const NoticeTickerBar: React.FC<NoticeTickerBarProps> = ({
  onJumpToNotices
}) => {
  const { isBengali } = useLanguage();
  const notices = isBengali ? BENGALI_NOTICES : NOTICE_TICKER_ITEMS;

  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-slate-950 px-3 py-1.5 border-b border-amber-400/40 relative overflow-hidden flex items-center">
      
      {/* Static Left Label */}
      <div className="flex items-center space-x-1.5 bg-slate-950 text-amber-300 text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 mr-3 shadow-sm z-10">
        <Bell className="w-3 h-3 text-amber-400 animate-bounce" />
        <span>{isBengali ? 'সর্বশেষ সংবাদ' : 'Latest Updates'}</span>
      </div>

      {/* Marquee Scroller */}
      <div className="flex-1 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] text-xs font-bold space-x-8">
          {notices.map((item, idx) => (
            <span 
              key={idx} 
              className="inline-flex items-center space-x-2 text-slate-950 hover:underline cursor-pointer"
              onClick={onJumpToNotices}
            >
              <span>{item}</span>
              <span className="text-slate-950 font-black">★</span>
            </span>
          ))}
          {/* Repeat for seamless infinite looping */}
          {notices.map((item, idx) => (
            <span 
              key={`repeat-${idx}`} 
              className="inline-flex items-center space-x-2 text-slate-950 hover:underline cursor-pointer"
              onClick={onJumpToNotices}
            >
              <span>{item}</span>
              <span className="text-slate-950 font-black">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Right Quick Action */}
      <div className="hidden sm:flex items-center space-x-2 shrink-0 ml-3 z-10">
        <a
          href="https://wa.me/919732531730?text=Hello%20Biley%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-[11px] font-black bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-700/50 px-2 py-0.5 rounded-full transition-colors"
          title="WhatsApp Contact Only"
        >
          <MessageCircle className="w-3 h-3 text-emerald-400" />
          <span>WhatsApp: 9732531730</span>
        </a>
      </div>

    </div>
  );
};

