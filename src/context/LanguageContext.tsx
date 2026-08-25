import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TRANSLATIONS, Translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  isBengali: boolean;
  isEnglish: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof Translations | string, fallback?: string) => string;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LOCAL_STORAGE_LANG_KEY = 'biley_academy_language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
      if (stored === 'bn' || stored === 'en') {
        return stored;
      }
    }
    return 'en'; // Default to English
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', language);
    if (language === 'bn') {
      root.classList.add('lang-bn');
      root.classList.remove('lang-en');
    } else {
      root.classList.add('lang-en');
      root.classList.remove('lang-bn');
    }

    try {
      localStorage.setItem(LOCAL_STORAGE_LANG_KEY, language);
    } catch (e) {
      console.warn('Failed to save language to localStorage', e);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'bn' : 'en'));
  };

  const t = (key: keyof Translations | string, fallback?: string): string => {
    const currentDict = TRANSLATIONS[language] as unknown as Record<string, string>;
    if (currentDict && key in currentDict && currentDict[key]) {
      return currentDict[key];
    }
    const enDict = TRANSLATIONS.en as unknown as Record<string, string>;
    if (enDict && key in enDict && enDict[key]) {
      return enDict[key];
    }
    return fallback || String(key);
  };

  const translations = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        isBengali: language === 'bn',
        isEnglish: language === 'en',
        setLanguage,
        toggleLanguage,
        t,
        translations
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
