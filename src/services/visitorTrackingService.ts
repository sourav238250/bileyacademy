import { 
  doc, 
  getDoc, 
  getDocFromServer,
  setDoc, 
  updateDoc, 
  increment, 
  onSnapshot, 
  collection, 
  addDoc, 
  getDocs,
  query, 
  orderBy, 
  limit 
} from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { SiteVisitorStats, VisitorLogItem } from '../types';

const STATS_DOC_ID = 'global_metrics';
const VISITOR_ID_KEY = 'ba_visitor_uuid';
const SESSION_ID_KEY = 'ba_session_uuid';
const HAS_VISITED_KEY = 'ba_registered_unique_v1';
const SESSION_COUNTED_KEY = 'ba_session_recorded_v1';

// Base initial count used ONLY if the Firestore document does not exist yet
export const INITIAL_VISITOR_STATS: SiteVisitorStats = {
  totalVisits: 1420,
  uniqueVisitors: 685,
  totalSessions: 940,
  todayVisits: 48,
  lastResetDate: new Date().toISOString().split('T')[0],
  mobileVisits: 890,
  desktopVisits: 530,
  updatedAt: new Date().toISOString()
};

// Module-level deduplication so React StrictMode double-mounts never double-count or double-log
const trackedPagesThisLoad = new Set<string>();
const inFlightTracking = new Map<string, Promise<void>>();

function logFirestoreIssue(error: unknown, operationType: 'get' | 'list' | 'create' | 'update' | 'write', path: string) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    operationType,
    path,
    authInfo: {
      userId: auth.currentUser?.uid || null,
      email: auth.currentUser?.email || null,
      emailVerified: auth.currentUser?.emailVerified || null
    }
  };
  console.warn('Firestore Visitor Counter Notice:', JSON.stringify(errInfo));
}

/**
 * Get or create a persistent anonymous visitor ID
 */
export function getVisitorId(): string {
  try {
    let vid = localStorage.getItem(VISITOR_ID_KEY);
    if (!vid) {
      vid = 'v_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
      localStorage.setItem(VISITOR_ID_KEY, vid);
    }
    return vid;
  } catch {
    return 'v_guest_' + Date.now();
  }
}

/**
 * Get or create a session ID
 */
export function getSessionId(): string {
  try {
    let sid = sessionStorage.getItem(SESSION_ID_KEY);
    if (!sid) {
      sid = 's_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      sessionStorage.setItem(SESSION_ID_KEY, sid);
    }
    return sid;
  } catch {
    return 's_session_' + Date.now();
  }
}

/**
 * Detect client device category
 */
export function getDeviceType(): 'Mobile' | 'Tablet' | 'Desktop' {
  if (typeof window === 'undefined') return 'Desktop';
  const ua = navigator.userAgent.toLowerCase();
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'Tablet';
  if (/mobile|android|touch|webos|iphone|blackberry/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

/**
 * Record a website page visit with atomic Firestore counters.
 * Deduplicated per page load and guaranteed never to overwrite existing stats on read timeout.
 */
export async function trackPageView(pageName: string = 'Home'): Promise<void> {
  if (trackedPagesThisLoad.has(pageName)) {
    return;
  }

  const existingPromise = inFlightTracking.get(pageName);
  if (existingPromise) {
    return existingPromise;
  }

  const runTracking = (async () => {
    trackedPagesThisLoad.add(pageName);

    const visitorId = getVisitorId();
    const sessionId = getSessionId();
    const isNewUnique = typeof window !== 'undefined' && !localStorage.getItem(HAS_VISITED_KEY);
    const isNewSession = typeof window !== 'undefined' && !sessionStorage.getItem(SESSION_COUNTED_KEY);
    const deviceType = getDeviceType();
    const todayStr = new Date().toISOString().split('T')[0];

    // Mark flags immediately to prevent concurrent calls from double-counting unique/session
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(HAS_VISITED_KEY, 'true');
        sessionStorage.setItem(SESSION_COUNTED_KEY, 'true');
      } catch {
        // Ignore storage quota errors
      }
    }

    const statsDocRef = doc(db, 'site_stats', STATS_DOC_ID);
    const atomicIncrementPayload: Record<string, any> = {
      totalVisits: increment(1),
      updatedAt: new Date().toISOString()
    };

    if (isNewUnique) {
      atomicIncrementPayload.uniqueVisitors = increment(1);
    }
    if (isNewSession) {
      atomicIncrementPayload.totalSessions = increment(1);
    }
    if (deviceType === 'Mobile') {
      atomicIncrementPayload.mobileVisits = increment(1);
    } else {
      atomicIncrementPayload.desktopVisits = increment(1);
    }

    try {
      let docSnap = null;
      try {
        docSnap = await getDocFromServer(statsDocRef);
      } catch {
        try {
          docSnap = await getDoc(statsDocRef);
        } catch {
          docSnap = null;
        }
      }

      if (docSnap && !docSnap.exists()) {
        // Document genuinely does not exist in Firestore yet — safe to initialize
        await setDoc(statsDocRef, {
          ...INITIAL_VISITOR_STATS,
          totalVisits: INITIAL_VISITOR_STATS.totalVisits + 1,
          uniqueVisitors: INITIAL_VISITOR_STATS.uniqueVisitors + (isNewUnique ? 1 : 0),
          totalSessions: INITIAL_VISITOR_STATS.totalSessions + (isNewSession ? 1 : 0),
          todayVisits: 1,
          lastResetDate: todayStr,
          mobileVisits: INITIAL_VISITOR_STATS.mobileVisits + (deviceType === 'Mobile' ? 1 : 0),
          desktopVisits: INITIAL_VISITOR_STATS.desktopVisits + (deviceType !== 'Mobile' ? 1 : 0),
          updatedAt: new Date().toISOString()
        });
      } else {
        // Existing doc (or offline/read deferred): ALWAYS use atomic updateDoc so existing counts are never reset
        const existingData = docSnap?.exists() ? (docSnap.data() as SiteVisitorStats) : null;
        const isNewDay = existingData ? existingData.lastResetDate !== todayStr : false;

        if (isNewDay) {
          atomicIncrementPayload.todayVisits = 1;
          atomicIncrementPayload.lastResetDate = todayStr;
        } else {
          atomicIncrementPayload.todayVisits = increment(1);
        }

        try {
          await updateDoc(statsDocRef, atomicIncrementPayload);
        } catch (updateErr: any) {
          if (updateErr?.code === 'not-found') {
            await setDoc(statsDocRef, {
              ...INITIAL_VISITOR_STATS,
              totalVisits: INITIAL_VISITOR_STATS.totalVisits + 1,
              uniqueVisitors: INITIAL_VISITOR_STATS.uniqueVisitors + (isNewUnique ? 1 : 0),
              totalSessions: INITIAL_VISITOR_STATS.totalSessions + (isNewSession ? 1 : 0),
              todayVisits: 1,
              lastResetDate: todayStr,
              mobileVisits: INITIAL_VISITOR_STATS.mobileVisits + (deviceType === 'Mobile' ? 1 : 0),
              desktopVisits: INITIAL_VISITOR_STATS.desktopVisits + (deviceType !== 'Mobile' ? 1 : 0),
              updatedAt: new Date().toISOString()
            });
          } else {
            throw updateErr;
          }
        }
      }

      // Log the visit event (anonymized)
      try {
        const logsCollection = collection(db, 'visitor_logs');
        let referrerHost = 'Direct / Search';
        if (typeof document !== 'undefined' && document.referrer) {
          try {
            referrerHost = new URL(document.referrer).hostname;
          } catch {
            referrerHost = 'Direct / Search';
          }
        }

        await addDoc(logsCollection, {
          visitorId,
          sessionId,
          page: pageName,
          device: deviceType,
          language: typeof navigator !== 'undefined' ? navigator.language || 'en' : 'en',
          referrer: referrerHost,
          timestamp: new Date().toISOString()
        });
      } catch (logErr) {
        logFirestoreIssue(logErr, 'create', 'visitor_logs');
      }
    } catch (err) {
      logFirestoreIssue(err, 'write', `site_stats/${STATS_DOC_ID}`);
    } finally {
      inFlightTracking.delete(pageName);
    }
  })();

  inFlightTracking.set(pageName, runTracking);
  return runTracking;
}

/**
 * Fetch current visitor stats directly from Firestore server (for manual refresh)
 */
export async function fetchVisitorStatsOnce(): Promise<SiteVisitorStats | null> {
  try {
    const statsDocRef = doc(db, 'site_stats', STATS_DOC_ID);
    const snap = await getDocFromServer(statsDocRef);
    if (snap.exists()) {
      return snap.data() as SiteVisitorStats;
    }
    return null;
  } catch (err) {
    logFirestoreIssue(err, 'get', `site_stats/${STATS_DOC_ID}`);
    return null;
  }
}

/**
 * Fetch recent visitor logs directly (for manual refresh)
 */
export async function fetchRecentVisitorLogsOnce(maxLogs: number = 12): Promise<VisitorLogItem[]> {
  try {
    const q = query(
      collection(db, 'visitor_logs'),
      orderBy('timestamp', 'desc'),
      limit(maxLogs)
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({
      id: d.id,
      ...(d.data() as Omit<VisitorLogItem, 'id'>)
    }));
  } catch (err) {
    logFirestoreIssue(err, 'list', 'visitor_logs');
    return [];
  }
}

/**
 * Subscribe in real-time to global site visitor stats
 */
export function subscribeToVisitorStats(
  onUpdate: (stats: SiteVisitorStats, isLive: boolean) => void,
  onError?: () => void
): () => void {
  try {
    const statsDocRef = doc(db, 'site_stats', STATS_DOC_ID);

    const unsubscribe = onSnapshot(
      statsDocRef,
      { includeMetadataChanges: true },
      (snapshot) => {
        if (snapshot.exists()) {
          onUpdate(snapshot.data() as SiteVisitorStats, !snapshot.metadata.fromCache);
        } else {
          onUpdate(INITIAL_VISITOR_STATS, false);
        }
      },
      (err) => {
        logFirestoreIssue(err, 'get', `site_stats/${STATS_DOC_ID}`);
        onError?.();
      }
    );

    return unsubscribe;
  } catch (err) {
    logFirestoreIssue(err, 'get', `site_stats/${STATS_DOC_ID}`);
    onError?.();
    return () => {};
  }
}

/**
 * Subscribe to recent real-time visitor activity stream
 */
export function subscribeToRecentVisitorLogs(
  onLogs: (logs: VisitorLogItem[]) => void,
  maxLogs: number = 10,
  onError?: () => void
): () => void {
  try {
    const q = query(
      collection(db, 'visitor_logs'),
      orderBy('timestamp', 'desc'),
      limit(maxLogs)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const logs: VisitorLogItem[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<VisitorLogItem, 'id'>)
        }));
        onLogs(logs);
      },
      (err) => {
        logFirestoreIssue(err, 'list', 'visitor_logs');
        onLogs([]);
        onError?.();
      }
    );

    return unsubscribe;
  } catch (err) {
    logFirestoreIssue(err, 'list', 'visitor_logs');
    onError?.();
    return () => {};
  }
}

