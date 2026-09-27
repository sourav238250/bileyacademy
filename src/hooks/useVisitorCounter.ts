import { useState, useEffect } from 'react';
import { SiteVisitorStats } from '../types';
import { 
  trackPageView, 
  subscribeToVisitorStats 
} from '../services/visitorTrackingService';

export function useVisitorCounter(currentPage: string = 'Home') {
  const [stats, setStats] = useState<SiteVisitorStats>({
    totalVisits: 1420,
    uniqueVisitors: 685,
    totalSessions: 940,
    todayVisits: 48,
    lastResetDate: new Date().toISOString().split('T')[0],
    mobileVisits: 890,
    desktopVisits: 530,
  });
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Record page view on load
    trackPageView(currentPage);

    // Subscribe to live Firestore counter updates
    const unsubscribe = subscribeToVisitorStats((updatedStats) => {
      setStats(updatedStats);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [currentPage]);

  return {
    stats,
    loading,
    isModalOpen,
    openModal: () => setIsModalOpen(true),
    closeModal: () => setIsModalOpen(false)
  };
}
