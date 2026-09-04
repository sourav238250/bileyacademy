import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp,
  onSnapshot 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { AdmissionInquiry, ContactFormData } from '../types';

export interface CloudProgressRecord {
  userId: string;
  gradeNumber: number;
  completedKeys: string[];
  updatedAt?: any;
}

export interface QuizAttemptRecord {
  id?: string;
  userId: string;
  userEmail?: string;
  userName?: string;
  tier: string;
  subject: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  createdAt?: any;
}

export interface AiTutorQueryRecord {
  id?: string;
  userId: string;
  userEmail?: string;
  userName?: string;
  grade: string;
  subject: string;
  question: string;
  answer: string;
  createdAt?: any;
}

// 1. Student Curriculum Progress Services
export const syncStudentProgressToFirestore = async (
  userId: string,
  gradeNumber: number,
  completedKeys: string[]
): Promise<void> => {
  if (!userId) return;
  try {
    const docId = `${userId}_grade_${gradeNumber}`;
    const progressRef = doc(db, 'student_progress', docId);
    await setDoc(progressRef, {
      userId,
      gradeNumber,
      completedKeys,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error('Error saving progress to Firestore:', error);
  }
};

export const fetchStudentProgressFromFirestore = async (
  userId: string,
  gradeNumber: number
): Promise<string[] | null> => {
  if (!userId) return null;
  try {
    const docId = `${userId}_grade_${gradeNumber}`;
    const progressRef = doc(db, 'student_progress', docId);
    const snap = await getDoc(progressRef);
    if (snap.exists()) {
      const data = snap.data() as CloudProgressRecord;
      return data.completedKeys || [];
    }
    return null;
  } catch (error) {
    console.error('Error loading progress from Firestore:', error);
    return null;
  }
};

// 2. Diagnostic Quiz Records
export const saveQuizAttemptToFirestore = async (
  attempt: Omit<QuizAttemptRecord, 'id' | 'createdAt'>
): Promise<string | null> => {
  try {
    const colRef = collection(db, 'quiz_attempts');
    const docRef = await addDoc(colRef, {
      ...attempt,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving quiz attempt to Firestore:', error);
    return null;
  }
};

export const fetchUserQuizHistory = async (
  userId: string
): Promise<QuizAttemptRecord[]> => {
  if (!userId) return [];
  try {
    const colRef = collection(db, 'quiz_attempts');
    const q = query(colRef, where('userId', '==', userId), orderBy('createdAt', 'desc'), limit(10));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    })) as QuizAttemptRecord[];
  } catch (error) {
    console.error('Error fetching quiz history:', error);
    return [];
  }
};

// 3. Admission Inquiries & Demo Bookings
export const submitAdmissionInquiryToFirestore = async (
  inquiry: AdmissionInquiry,
  userId?: string
): Promise<{ success: boolean; id?: string }> => {
  try {
    const colRef = collection(db, 'admission_inquiries');
    const docRef = await addDoc(colRef, {
      ...inquiry,
      userId: userId || 'guest',
      status: 'pending_counseling',
      source: 'Biley Academy Portal 2026-27',
      createdAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting admission inquiry to Firestore:', error);
    return { success: false };
  }
};

// 4. General Contact / Helpline Messages
export const submitContactMessageToFirestore = async (
  contactData: ContactFormData,
  userId?: string
): Promise<{ success: boolean; id?: string }> => {
  try {
    const colRef = collection(db, 'contact_messages');
    const docRef = await addDoc(colRef, {
      ...contactData,
      userId: userId || 'guest',
      status: 'unread',
      createdAt: serverTimestamp()
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact message to Firestore:', error);
    return { success: false };
  }
};

// 5. AI Doubt Logs & Bookmark History
export const saveAiDoubtToFirestore = async (
  record: Omit<AiTutorQueryRecord, 'id' | 'createdAt'>
): Promise<string | null> => {
  try {
    const colRef = collection(db, 'ai_tutor_history');
    const docRef = await addDoc(colRef, {
      ...record,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving AI doubt session to Firestore:', error);
    return null;
  }
};

// 6. Admin / Faculty Realtime Inquiries & Messages Feed
export interface SavedAdmissionInquiryDoc extends AdmissionInquiry {
  id: string;
  userId?: string;
  status?: string;
  source?: string;
  createdAt?: any;
}

export interface SavedContactMessageDoc extends ContactFormData {
  id: string;
  userId?: string;
  status?: string;
  createdAt?: any;
}

export const fetchAllAdmissionInquiries = async (): Promise<SavedAdmissionInquiryDoc[]> => {
  try {
    const colRef = collection(db, 'admission_inquiries');
    const q = query(colRef, orderBy('createdAt', 'desc'), limit(50));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    })) as SavedAdmissionInquiryDoc[];
  } catch (error) {
    console.error('Error fetching all inquiries:', error);
    return [];
  }
};

export const fetchAllContactMessages = async (): Promise<SavedContactMessageDoc[]> => {
  try {
    const colRef = collection(db, 'contact_messages');
    const q = query(colRef, orderBy('createdAt', 'desc'), limit(50));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({
      id: d.id,
      ...d.data()
    })) as SavedContactMessageDoc[];
  } catch (error) {
    console.error('Error fetching all contact messages:', error);
    return [];
  }
};

export const subscribeAdmissionInquiries = (
  callback: (inquiries: SavedAdmissionInquiryDoc[]) => void
) => {
  try {
    const colRef = collection(db, 'admission_inquiries');
    const q = query(colRef, orderBy('createdAt', 'desc'), limit(50));
    return onSnapshot(q, (snap) => {
      const docs = snap.docs.map(d => ({
        id: d.id,
        ...d.data()
      })) as SavedAdmissionInquiryDoc[];
      callback(docs);
    }, (err) => {
      console.warn('Inquiries subscription notice:', err);
    });
  } catch (e) {
    console.warn('Failed to subscribe to admission inquiries:', e);
    return () => {};
  }
};

export const subscribeContactMessages = (
  callback: (messages: SavedContactMessageDoc[]) => void
) => {
  try {
    const colRef = collection(db, 'contact_messages');
    const q = query(colRef, orderBy('createdAt', 'desc'), limit(50));
    return onSnapshot(q, (snap) => {
      const docs = snap.docs.map(d => ({
        id: d.id,
        ...d.data()
      })) as SavedContactMessageDoc[];
      callback(docs);
    }, (err) => {
      console.warn('Contact messages subscription notice:', err);
    });
  } catch (e) {
    console.warn('Failed to subscribe to contact messages:', e);
    return () => {};
  }
};
