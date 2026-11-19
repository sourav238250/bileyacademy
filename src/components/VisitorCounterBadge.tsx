import React, { useState, useEffect } from 'react';
import { Users, Eye, Activity, ArrowUpRight, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SiteVisitorStats } from '../types';

interface VisitorCounterBadgeProps {
  stats: SiteVisitorStats;
  loading?: boolean;
  isLive?: boolean;
  onOpenAnalytics: () => void;
  variant?: 'footer' | 'card';
}

export const VisitorCounterBadge: React.FC<VisitorCounterBadgeProps> = ({
  stats,
  loading = false,
  isLive = false,
  onOpenAnalytics
}) => {
  const { isBengali } = useLanguage();
  const targetVisits = stats.totalVisits ?? 1420;
  const [displayCount, setDisplayCount] = useState<number>(targetVisits);

  // Smooth animated count transition when target updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayCount((prev) => {
        if (prev === targetVisits) {
          clearInterval(interval);
          return prev;
        }
        const diff = targetVisits - prev;
        const step = Math.max(1, Math.ceil(Math.abs(diff) / 8));
        if (Math.abs(diff) <= step) {
          clearInterval(interval);
          return targetVisits;
        }
        return prev + (diff > 0 ? step : -step);
      });
    }, 35);

    return () => clearInterval(interval);
  }, [targetVisits]);

  const formattedVisits = Number(displayCount).toLocaleString();
  const formattedUniques = Number(stats.uniqueVisitors ?? 685).toLocaleString();
  const formattedToday = Number(stats.todayVisits ?? 0).toLocaleString();

  const statusLabel = loading
    ? (isBengali ? 'সিঙ্ক হচ্ছে...' : 'Syncing...')
    : isLive
      ? (isBengali ? 'রিয়েল-টাইম' : 'Firestore Live')
      : (isBengali ? 'ক্যাশ সক্রিয়' : 'Cached Sync');

  return (
    <div className="w-full max-w-full rounded-2xl bg-slate-950/90 border border-amber-500/30 shadow-2xl p-4 sm:p-5 backdrop-blur-md">
      
      {/* Top Row: Live Indicator, Title & Count */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-slate-800">
        
        {/* Left: Indicator & Headline */}
        <div className="flex items-center space-x-3">
          <div className="relative flex h-3 w-3 shrink-0">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLive ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isLive ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {isBengali ? 'ওয়েবসাইট পরিদর্শন কাউন্টার' : 'Official Website Visitor Counter'}
              </span>
              <span className={`text-[10px] px-2 py-0.2 rounded-full font-semibold border ${
                isLive 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
              }`}>
                {loading ? 'Syncing' : isLive ? 'Live' : 'Local'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {isBengali ? 'বিলে অ্যাকাডেমির রিয়েল-টাইম ভিজিটর মেট্রিক্স' : 'Real-time verified visits & academic traffic'}
            </p>
          </div>
        </div>

        {/* Right: Big Counter Badge */}
        <div className="flex items-baseline space-x-2 self-start sm:self-auto bg-slate-900/90 border border-amber-500/20 px-3.5 py-1.5 rounded-xl">
          <Eye className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-medium text-slate-400">
            {isBengali ? 'মোট ভিউ:' : 'Total:'}
          </span>
          <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono tracking-tight">
            {formattedVisits}
          </span>
        </div>
      </div>

      {/* Bottom Row: Mobile-Responsive Metrics Grid & Analytics Button */}
      <div className="mt-3.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 flex-1">
          
          {/* Unique Visitors */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2.5 flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 truncate">
                {isBengali ? 'অনন্য ভিজিটর' : 'Unique Users'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 font-mono">
                {formattedUniques}
              </div>
            </div>
          </div>

          {/* Today's Visits */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-2.5 flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 truncate">
                {isBengali ? 'আজকে সক্রিয়' : "Today's Visits"}
              </div>
              <div className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">
                +{formattedToday}
              </div>
            </div>
          </div>

          {/* Cloud Sync Status */}
          <div className="col-span-2 sm:col-span-1 bg-slate-900/60 border border-slate-800/80 rounded-xl p-2.5 flex items-center space-x-2.5">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Activity className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-slate-400 truncate">
                {isBengali ? 'ক্লাউড স্ট্যাটাস' : 'Cloud Counter'}
              </div>
              <div className="text-[11px] font-bold text-amber-300 truncate">
                {statusLabel}
              </div>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <button
          onClick={onOpenAnalytics}
          className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md hover:shadow-amber-500/20 active:scale-95 cursor-pointer shrink-0"
        >
          <span>{isBengali ? 'ট্রাফিক ও অ্যানালিটিক্স দেখুন' : 'View Live Insights'}</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
