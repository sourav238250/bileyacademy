import React, { useState, useEffect } from 'react';
import { Users, Eye, Sparkles, Activity, Globe, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SiteVisitorStats } from '../types';

interface VisitorCounterBadgeProps {
  stats: SiteVisitorStats;
  loading?: boolean;
  onOpenAnalytics: () => void;
  variant?: 'footer' | 'floating' | 'inline' | 'header';
}

export const VisitorCounterBadge: React.FC<VisitorCounterBadgeProps> = ({
  stats,
  loading = false,
  onOpenAnalytics,
  variant = 'footer'
}) => {
  const { isBengali } = useLanguage();
  const [displayCount, setDisplayCount] = useState<number>(stats.totalVisits || 1420);

  // Smooth animated count transition when count updates
  useEffect(() => {
    const target = stats.totalVisits || 1420;
    if (target === displayCount) return;

    const diff = target - displayCount;
    const step = Math.ceil(Math.abs(diff) / 10);
    const interval = setInterval(() => {
      setDisplayCount((prev) => {
        if (Math.abs(target - prev) <= step) {
          clearInterval(interval);
          return target;
        }
        return prev + (diff > 0 ? step : -step);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [stats.totalVisits]);

  const formattedVisits = Number(displayCount).toLocaleString();
  const formattedUniques = Number(stats.uniqueVisitors || 685).toLocaleString();
  const formattedToday = Number(stats.todayVisits || 48).toLocaleString();

  if (variant === 'header') {
    return (
      <button
        onClick={onOpenAnalytics}
        title={isBengali ? 'ওয়েবসাইট ভিজিটর ও লাইভ ট্রাফিক পরিসংখ্যান' : 'View Live Website Visitor Analytics'}
        className="inline-flex items-center space-x-2 bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-400/60 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-200 transition-all shadow-sm hover:shadow-amber-500/10 group cursor-pointer"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <Users className="w-3.5 h-3.5 text-amber-400" />
        <span className="text-amber-300 font-bold font-mono">
          {formattedVisits}
        </span>
        <span className="hidden sm:inline text-slate-400 text-[11px]">
          {isBengali ? 'ভিজিটর' : 'Visitors'}
        </span>
      </button>
    );
  }

  return (
    <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-950/80 border border-amber-500/30 shadow-xl backdrop-blur-md">
      
      {/* Live Indicator & Main Count */}
      <div className="flex items-center space-x-3 px-1">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </div>

        <div className="flex items-baseline space-x-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {isBengali ? 'ওয়েবসাইট পরিদর্শন' : 'Total Visits'}
          </span>
          <span className="text-xl sm:text-2xl font-extrabold text-amber-400 font-mono tracking-tight">
            {formattedVisits}
          </span>
        </div>
      </div>

      {/* Sub metrics: Today & Unique */}
      <div className="flex items-center space-x-3 text-xs text-slate-400 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
        <div className="flex items-center space-x-1.5">
          <Users className="w-3.5 h-3.5 text-amber-400/80" />
          <span>
            {isBengali ? 'অনন্য ভিজিটর:' : 'Unique:'}{' '}
            <strong className="text-slate-200 font-mono">{formattedUniques}</strong>
          </span>
        </div>

        <div className="h-3 w-px bg-slate-800" />

        <div className="flex items-center space-x-1.5">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>
            {isBengali ? 'আজকে:' : 'Today:'}{' '}
            <strong className="text-emerald-400 font-mono">+{formattedToday}</strong>
          </span>
        </div>
      </div>

      {/* Action Button to Open Traffic Insights */}
      <button
        onClick={onOpenAnalytics}
        className="mt-1 sm:mt-0 sm:ml-2 inline-flex items-center justify-center space-x-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-md hover:shadow-amber-500/20 active:scale-95 cursor-pointer"
      >
        <span>{isBengali ? 'লাইভ অ্যানালিটিক্স' : 'Live Insights'}</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
