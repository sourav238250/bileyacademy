import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { 
  initializeFirestore, 
  getFirestore,
  setLogLevel,
  persistentLocalCache,
  persistentMultipleTabManager,
  memoryLocalCache
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Silence non-fatal Firestore network transition advisories (like the 10-second backend connection warning)
try {
  setLogLevel('silent');
} catch {
  // Gracefully continue if environment restricts logging levels
}

// Initialize or reuse existing Firebase App instance
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Authentication with Google Auth Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Initialize Cloud Firestore database with auto-detect long polling and multi-tab cache
let firestoreDb;
try {
  firestoreDb = initializeFirestore(
    app,
    {
      experimentalAutoDetectLongPolling: true,
      ignoreUndefinedProperties: true,
      localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager()
      })
    },
    firebaseConfig.firestoreDatabaseId
  );
} catch {
  try {
    firestoreDb = initializeFirestore(
      app,
      {
        experimentalAutoDetectLongPolling: true,
        ignoreUndefinedProperties: true,
        localCache: memoryLocalCache()
      },
      firebaseConfig.firestoreDatabaseId
    );
  } catch {
    // If already initialized, retrieve existing instance
    firestoreDb = getFirestore(app, firebaseConfig.firestoreDatabaseId);
  }
}

export const db = firestoreDb;

export default app;
