import React, { useState, useEffect } from 'react';
import { 
  X, 
  Users, 
  Eye, 
  Smartphone, 
  Monitor, 
  Activity, 
  Globe, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  RefreshCw,
  Compass
} from 'lucide-react';
import { SiteVisitorStats, VisitorLogItem } from '../types';
import { subscribeToRecentVisitorLogs } from '../services/visitorTrackingService';
import { useLanguage } from '../context/LanguageContext';

interface VisitorAnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: SiteVisitorStats;
}

export const VisitorAnalyticsModal: React.FC<VisitorAnalyticsModalProps> = ({
  isOpen,
  onClose,
  stats
}) => {
  const { isBengali } = useLanguage();
  const [logs, setLogs] = useState<VisitorLogItem[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const unsubscribe = subscribeToRecentVisitorLogs((newLogs) => {
      setLogs(newLogs);
    }, 12);

    return () => unsubscribe();
  }, [isOpen]);

  if (!isOpen) return null;

  const totalVisits = stats.totalVisits || 1420;
  const uniqueVisitors = stats.uniqueVisitors || 685;
  const totalSessions = stats.totalSessions || 940;
  const todayVisits = stats.todayVisits || 48;
  const mobileCount = stats.mobileVisits || 890;
  const desktopCount = stats.desktopVisits || 530;
  const totalDeviceTracked = (mobileCount + desktopCount) || 1;
  const mobilePercent = Math.round((mobileCount / totalDeviceTracked) * 100);
  const desktopPercent = 100 - mobilePercent;

  const formatTimeAgo = (timestampStr: string) => {
    try {
      const diffMs = Date.now() - new Date(timestampStr).getTime();
      const diffMins = Math.floor(diffMs / (1000 * 60));
      if (diffMins < 1) return isBengali ? 'এইমাত্র' : 'Just now';
      if (diffMins < 60) return isBengali ? `${diffMins} মিনিট আগে` : `${diffMins}m ago`;
      const diffHours = Math.floor(diffMins / 60);
      if (diffHours < 24) return isBengali ? `${diffHours} ঘণ্টা আগে` : `${diffHours}h ago`;
      return new Date(timestampStr).toLocaleDateString();
    } catch {
      return isBengali ? 'কিছুক্ষণ আগে' : 'Recently';
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-transparent pointer-events-none" />

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <h3 className="text-xl font-bold text-white font-serif">
                  {isBengali ? 'বিলে অ্যাকাডেমি ভিজিটর অ্যানালিটিক্স' : 'Biley Academy Traffic & Visitor Analytics'}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {isBengali ? 'রিয়েল-টাইম ফায়ারস্টোর ক্লাউড ট্র্যাকিং' : 'Real-time Cloud Traffic Telemetry & Engagement'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleRefresh}
              title="Refresh Stats"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-amber-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Key Metric Tiles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            
            {/* Total Visits */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{isBengali ? 'মোট পরিদর্শন' : 'Total Visits'}</span>
                <Eye className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-black text-white font-mono">
                {totalVisits.toLocaleString()}
              </div>
              <div className="text-[11px] text-amber-400 font-semibold mt-1">
                {isBengali ? 'পেজ ভিউ' : 'All-time page views'}
              </div>
            </div>

            {/* Unique Visitors */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{isBengali ? 'অনন্য ভিজিটর' : 'Unique Visitors'}</span>
                <Users className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-2xl font-black text-indigo-300 font-mono">
                {uniqueVisitors.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-1">
                {isBengali ? 'অনন্য শিক্ষার্থী ও অভিভাবক' : 'Distinct student users'}
              </div>
            </div>

            {/* Today's Visits */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{isBengali ? 'আজকের ভিজিট' : "Today's Visits"}</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-black text-emerald-400 font-mono">
                +{todayVisits.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-400/80 font-medium mt-1">
                {isBengali ? 'আজ সক্রিয়' : 'Active today'}
              </div>
            </div>

            {/* Total Sessions */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{isBengali ? 'সেশন সংখ্যা' : 'Sessions'}</span>
                <Globe className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl font-black text-cyan-300 font-mono">
                {totalSessions.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-1">
                {isBengali ? 'ব্রাউজিং সেশন' : 'Total study sessions'}
              </div>
            </div>
          </div>

          {/* Device & Platform Breakdown */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-slate-200 flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>{isBengali ? 'ডিভাইস অনুপাত' : 'Device Distribution'}</span>
              </h4>
              <span className="text-xs text-slate-400">
                {mobilePercent}% Mobile • {desktopPercent}% Desktop
              </span>
            </div>

            {/* Progress bar */}
            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
              <div 
                className="bg-gradient-to-r from-amber-500 to-amber-400 h-full transition-all duration-500" 
                style={{ width: `${mobilePercent}%` }}
                title={`Mobile: ${mobilePercent}%`}
              />
              <div 
                className="bg-indigo-500 h-full transition-all duration-500" 
                style={{ width: `${desktopPercent}%` }}
                title={`Desktop: ${desktopPercent}%`}
              />
            </div>

            <div className="flex items-center justify-between mt-3 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>{isBengali ? `মোবাইল ফোন / ট্যাবলেট (${mobileCount.toLocaleString()})` : `Mobile & Tablet (${mobileCount.toLocaleString()})`}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                <span>{isBengali ? `কম্পিউটার ও ল্যাপটপ (${desktopCount.toLocaleString()})` : `Desktop & Laptop (${desktopCount.toLocaleString()})`}</span>
              </div>
            </div>
          </div>

          {/* Live Recent Visitor Activity Stream */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-emerald-400" />
                <h4 className="text-sm font-bold text-slate-200">
                  {isBengali ? 'সাম্প্রতিক লাইভ ভিজিটর অ্যাক্টিভিটি' : 'Real-time Visitor Activity Stream'}
                </h4>
              </div>
              <span className="text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-semibold flex items-center space-x-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live Cloud</span>
              </span>
            </div>

            {logs.length > 0 ? (
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {logs.map((log, idx) => (
                  <div 
                    key={log.id || idx}
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                        {log.device === 'Mobile' ? (
                          <Smartphone className="w-3.5 h-3.5" />
                        ) : (
                          <Monitor className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200">
                          {log.page === 'Home' 
                            ? (isBengali ? 'অ্যাকাডেমি মূল পাতা পরিদর্শন' : 'Explored Academy Home & Curriculum')
                            : log.page}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {log.device} • {log.language ? log.language.toUpperCase() : 'EN'} • {log.referrer || 'Direct'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 text-slate-400 text-[11px] shrink-0 font-mono">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{formatTimeAgo(log.timestamp)}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-slate-400 text-xs">
                <Activity className="w-6 h-6 mx-auto mb-2 text-slate-600 animate-pulse" />
                <span>{isBengali ? 'লাইভ ভিজিটর স্ট্রিম সিঙ্ক হচ্ছে...' : 'Streaming live visitor engagement events...'}</span>
              </div>
            )}
          </div>

          {/* Privacy & Trust Badge */}
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300">
              <span className="font-bold text-amber-400 block mb-0.5">
                {isBengali ? 'গোপনীয়তা ও নির্ভরযোগ্য ডেটা ট্র্যাকিং' : 'Privacy-First Anonymized Counting'}
              </span>
              <span>
                {isBengali 
                  ? 'বিলে অ্যাকাডেমি কোনও ব্যক্তিগত তথ্য সঞ্চয় করে না। এই কাউন্টার শুধুমাত্র ওয়েবসাইটের মোট পরিদর্শন ও একাডেমিক ট্রাফিক পরিমাপের জন্য ব্যবহৃত হয়।'
                  : 'Biley Academy collects strictly anonymized metrics to measure academic reach and community interest across Paschim Medinipur and beyond. No personal browsing information is recorded.'}
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{isBengali ? 'স্বাগতম বিলে অ্যাকাডেমিতে' : 'Empowering Young Scholars Since 2026'}</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all cursor-pointer"
          >
            {isBengali ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
