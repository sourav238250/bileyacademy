import { useState, useEffect } from 'react';
import defaultFounderImg from '../assets/images/sourav_dinda_photo_1788237199819.jpg';

const STORAGE_KEY = 'biley_sourav_dinda_photo';
const EVENT_NAME = 'biley_founder_photo_updated';

// Get current saved photo or fallback to bundled default
export function getFounderPhoto(): string {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.startsWith('data:image/')) {
        return saved;
      }
    } catch (e) {
      console.warn('Could not read founder photo from localStorage', e);
    }
  }
  return defaultFounderImg;
}

// Save photo to localStorage and notify all components
export async function saveFounderPhoto(dataUrl: string): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(STORAGE_KEY, dataUrl);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: dataUrl }));

    // Also attempt to persist to server if backend is reachable
    try {
      await fetch('/api/upload-founder-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: dataUrl })
      });
    } catch (err) {
      console.warn('Server photo upload optional sync failed', err);
    }

    return true;
  } catch (e) {
    console.error('Failed to save founder photo', e);
    return false;
  }
}

// Reset to default photo
export function resetFounderPhoto(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: defaultFounderImg }));
  } catch (e) {
    console.warn('Failed to reset founder photo', e);
  }
}

// React Hook to subscribe to real-time founder photo updates
export function useFounderPhoto(): { 
  photoUrl: string; 
  setPhoto: (dataUrl: string) => Promise<boolean>; 
  resetPhoto: () => void;
  isCustomPhoto: boolean;
} {
  const [photoUrl, setPhotoUrl] = useState<string>(getFounderPhoto);
  const [isCustom, setIsCustom] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem(STORAGE_KEY);
    }
    return false;
  });

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoUrl(customEvent.detail);
        setIsCustom(true);
      } else {
        setPhotoUrl(defaultFounderImg);
        setIsCustom(false);
      }
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    return () => window.removeEventListener(EVENT_NAME, handleUpdate);
  }, []);

  const handleSetPhoto = async (dataUrl: string) => {
    const success = await saveFounderPhoto(dataUrl);
    if (success) {
      setPhotoUrl(dataUrl);
      setIsCustom(true);
    }
    return success;
  };

  const handleReset = () => {
    resetFounderPhoto();
    setPhotoUrl(defaultFounderImg);
    setIsCustom(false);
  };

  return {
    photoUrl,
    setPhoto: handleSetPhoto,
    resetPhoto: handleReset,
    isCustomPhoto: isCustom
  };
}
