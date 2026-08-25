import React from 'react';
import { Languages, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageToggleProps {
  className?: string;
  variant?: 'pill' | 'compact' | 'segmented';
  showLabel?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  className = '', 
  variant = 'segmented',
  showLabel = false 
}) => {
  const { language, setLanguage, isBengali } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        id="language-toggle-compact"
        onClick={() => setLanguage(isBengali ? 'en' : 'bn')}
        className={`inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-amber-500/30 bg-slate-900/90 hover:bg-slate-800 text-xs font-bold text-amber-400 hover:text-amber-300 transition-all shadow-sm ${className}`}
        title={isBengali ? "Switch to English" : "বাংলা ভাষায় দেখুন"}
        aria-label="Toggle language mode"
      >
        <Languages className="w-3.5 h-3.5" />
        <span className="font-serif tracking-wide">{isBengali ? 'বাংলা' : 'EN'}</span>
      </button>
    );
  }

  return (
    <div 
      id="language-segmented-toggle"
      className={`inline-flex items-center p-0.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        id="lang-btn-en"
        onClick={() => setLanguage('en')}
        className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
          language === 'en'
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md scale-[1.02]'
            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
        }`}
        title="View in English"
      >
        <span className="text-[11px]">🇬🇧</span>
        <span>English</span>
        {language === 'en' && <Check className="w-3 h-3 ml-0.5 stroke-[3]" />}
      </button>

      <button
        id="lang-btn-bn"
        onClick={() => setLanguage('bn')}
        className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
          language === 'bn'
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md scale-[1.02]'
            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
        }`}
        title="বাংলায় দেখুন (Bengali Mode)"
      >
        <span className="text-[11px]">🇮🇳</span>
        <span className="font-serif">বাংলা</span>
        {language === 'bn' && <Check className="w-3 h-3 ml-0.5 stroke-[3]" />}
      </button>
    </div>
  );
};
