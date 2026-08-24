import React, { useState, useEffect, useRef } from 'react';
import { 
  Bell, 
  Calendar, 
  ChevronUp, 
  ChevronDown, 
  Play, 
  Pause, 
  Sparkles, 
  FileText, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  ExternalLink,
  Flame,
  Volume2,
  Users,
  Search,
  Filter
} from 'lucide-react';
import { ACADEMY_NOTICES } from '../data/noticesData';
import { NoticeCategory, NoticeItem } from '../types';
import { NoticeDetailModal } from './NoticeDetailModal';

interface NoticeBoardWidgetProps {
  onOpenInquiry?: (context?: string) => void;
  className?: string;
}

export const NoticeBoardWidget: React.FC<NoticeBoardWidgetProps> = ({
  onOpenInquiry,
  className = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState<NoticeCategory>('all');
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  const [activeNoticeModal, setActiveNoticeModal] = useState<NoticeItem | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Filtered notices
  const filteredNotices = ACADEMY_NOTICES.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.targetClass && item.targetClass.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Continuous smooth auto-scrolling loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastTime = performance.now();
    const scrollSpeed = 0.45; // pixels per frame

    const step = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (isAutoScrolling && !isHovered && container) {
        // If reached bottom, cycle back seamlessly to top
        if (container.scrollTop + container.clientHeight >= container.scrollHeight - 2) {
          container.scrollTop = 0;
        } else {
          container.scrollTop += scrollSpeed * (delta / 16.67);
        }
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isAutoScrolling, isHovered, filteredNotices.length]);

  // Manual scroll controls
  const handleScrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: -140, behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: 140, behavior: 'smooth' });
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'admission':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'examination':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'news':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div 
      className={`relative bg-slate-900/95 border-2 border-amber-500/40 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden text-slate-100 ${className}`}
    >
      
      {/* Top Header: Title + Live Pulse + Play/Pause Controls */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-3 h-3 rounded-full bg-amber-400 animate-ping opacity-75" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-amber-400" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-slate-100 flex items-center gap-1.5 font-serif">
              <span>Notice & Announcements</span>
              <span className="text-[10px] font-sans font-black bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded uppercase">
                LIVE
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">
              Admissions • Examination Timetables • Official Circulars
            </p>
          </div>
        </div>

        {/* Scroll Controls & Play/Pause */}
        <div className="flex items-center space-x-1.5">
          <button
            onClick={() => setIsAutoScrolling(prev => !prev)}
            className={`p-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
              isAutoScrolling 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30' 
                : 'bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700'
            }`}
            title={isAutoScrolling ? 'Pause Auto-Scroll' : 'Resume Auto-Scroll'}
            aria-label={isAutoScrolling ? 'Pause auto scrolling' : 'Resume auto scrolling'}
          >
            {isAutoScrolling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="text-[10px] hidden xs:inline">{isAutoScrolling ? 'Auto-Scrolling' : 'Paused'}</span>
          </button>

          <div className="flex flex-col space-y-0.5">
            <button
              onClick={handleScrollUp}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Scroll Up"
              aria-label="Scroll up notice list"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleScrollDown}
              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Scroll Down"
              aria-label="Scroll down notice list"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="px-4 py-2.5 bg-slate-950/70 border-b border-slate-800/80 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-1.5 flex-nowrap">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            All Notices ({ACADEMY_NOTICES.length})
          </button>

          <button
            onClick={() => setSelectedCategory('admission')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'admission'
                ? 'bg-emerald-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-emerald-300 hover:bg-slate-800'
            }`}
          >
            Admissions ({ACADEMY_NOTICES.filter(i => i.category === 'admission').length})
          </button>

          <button
            onClick={() => setSelectedCategory('examination')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'examination'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-amber-300 hover:bg-slate-800'
            }`}
          >
            Exams ({ACADEMY_NOTICES.filter(i => i.category === 'examination').length})
          </button>

          <button
            onClick={() => setSelectedCategory('news')}
            className={`px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'news'
                ? 'bg-blue-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-blue-300 hover:bg-slate-800'
            }`}
          >
            News ({ACADEMY_NOTICES.filter(i => i.category === 'news').length})
          </button>
        </div>
      </div>

      {/* Main Auto-Scrolling List Container */}
      <div 
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-[320px] sm:h-[360px] overflow-y-auto p-3 sm:p-4 space-y-3 relative select-none scroll-smooth focus:outline-none"
        tabIndex={0}
        aria-label="Scrolling Notices and Announcements Board"
      >
        
        {/* Notice Items */}
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            onClick={() => setActiveNoticeModal(notice)}
            className="group cursor-pointer p-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 transition-all duration-200 shadow-md relative"
          >
            {/* Urgent Tag or New Badge */}
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${getCategoryBadgeClass(notice.category)}`}>
                  {notice.categoryLabel}
                </span>

                {notice.badge && (
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded shadow-sm">
                    {notice.badge}
                  </span>
                )}

                {notice.isNew && (
                  <span className="text-[10px] font-black text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20 flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    NEW
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-1 text-[11px] text-slate-400 font-medium shrink-0">
                <Calendar className="w-3 h-3 text-amber-400" />
                <span>{notice.date}</span>
              </div>
            </div>

            {/* Notice Title */}
            <h3 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
              {notice.title}
            </h3>

            {/* Notice Snippet */}
            <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
              {notice.description}
            </p>

            {/* Bottom Meta & Action Pill */}
            <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
              {notice.targetClass ? (
                <div className="flex items-center space-x-1 text-slate-400">
                  <Users className="w-3 h-3 text-blue-400" />
                  <span className="truncate max-w-[170px] sm:max-w-[210px]">{notice.targetClass}</span>
                </div>
              ) : (
                <span className="text-slate-500">Official Circular</span>
              )}

              <span className="text-amber-400 font-bold flex items-center space-x-1 group-hover:underline">
                <span>View Notice</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>

          </div>
        ))}

        {filteredNotices.length === 0 && (
          <div className="text-center py-8 text-slate-400">
            <p className="text-xs">No notices currently matching this filter.</p>
          </div>
        )}

      </div>

      {/* Bottom Ticker / Quick CTA Footer */}
      <div className="p-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Hover on list to pause auto-scrolling</span>
        </div>

        {onOpenInquiry && (
          <button
            onClick={() => onOpenInquiry('Admission Inquiry from Noticeboard')}
            className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] transition-colors shadow-sm"
          >
            Apply for Admission
          </button>
        )}
      </div>

      {/* Detail Modal */}
      {activeNoticeModal && (
        <NoticeDetailModal
          notice={activeNoticeModal}
          onClose={() => setActiveNoticeModal(null)}
          onOpenInquiry={onOpenInquiry}
        />
      )}

    </div>
  );
};
