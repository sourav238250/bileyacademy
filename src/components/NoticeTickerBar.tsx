import React from 'react';
import { Sparkles, Bell, ArrowRight, Phone } from 'lucide-react';
import { NOTICE_TICKER_ITEMS } from '../data/noticesData';

interface NoticeTickerBarProps {
  onOpenInquiry?: (context?: string) => void;
  onJumpToNotices?: () => void;
}

export const NoticeTickerBar: React.FC<NoticeTickerBarProps> = ({
  onOpenInquiry,
  onJumpToNotices
}) => {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-slate-950 px-3 py-1.5 border-b border-amber-400/40 relative overflow-hidden flex items-center">
      
      {/* Static Left Label */}
      <div className="flex items-center space-x-1.5 bg-slate-950 text-amber-300 text-[11px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 mr-3 shadow-sm z-10">
        <Bell className="w-3 h-3 text-amber-400 animate-bounce" />
        <span>Latest Updates</span>
      </div>

      {/* Marquee Scroller */}
      <div className="flex-1 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] text-xs font-bold space-x-8">
          {NOTICE_TICKER_ITEMS.map((item, idx) => (
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
          {NOTICE_TICKER_ITEMS.map((item, idx) => (
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
          href="tel:+919732531730"
          className="flex items-center space-x-1 text-[11px] font-black bg-slate-950 text-white hover:bg-slate-800 px-2 py-0.5 rounded-full transition-colors"
        >
          <Phone className="w-3 h-3 text-amber-400" />
          <span>9732531730</span>
        </a>
      </div>

    </div>
  );
};
