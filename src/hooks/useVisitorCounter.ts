import { useState, useEffect, useCallback } from 'react';
import { SiteVisitorStats } from '../types';
import { 
  INITIAL_VISITOR_STATS,
  trackPageView, 
  subscribeToVisitorStats,
  fetchVisitorStatsOnce
} from '../services/visitorTrackingService';

export function useVisitorCounter(currentPage: string = 'Home') {
  const [stats, setStats] = useState<SiteVisitorStats>(INITIAL_VISITOR_STATS);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Subscribe to live Firestore counter updates first
    const unsubscribe = subscribeToVisitorStats(
      (updatedStats, serverSynced) => {
        setStats(updatedStats);
        setIsLive(serverSynced);
        setLoading(false);
      },
      () => {
        setIsLive(false);
        setLoading(false);
      }
    );

    // Record page view on load (deduplicated internally for StrictMode)
    trackPageView(currentPage);

    return () => unsubscribe();
  }, [currentPage]);

  const refreshStats = useCallback(async () => {
    const fresh = await fetchVisitorStatsOnce();
    if (fresh) {
      setStats(fresh);
      setIsLive(true);
    }
  }, []);

  return {
    stats,
    loading,
    isLive,
    isModalOpen,
    openModal: () => setIsModalOpen(true),
    closeModal: () => setIsModalOpen(false),
    refreshStats
  };
}
