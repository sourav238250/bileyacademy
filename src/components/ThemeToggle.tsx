import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface ThemeToggleProps {
  id?: string;
  className?: string;
  showLabel?: boolean;
  variant?: 'compact' | 'full' | 'pill';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  id = 'theme-toggle-btn',
  className = '', 
  showLabel = false,
  variant = 'compact'
}) => {
  const { isDark, toggleTheme } = useTheme();
  const { isBengali } = useLanguage();

  const activeModeText = isDark 
    ? (isBengali ? 'ডার্ক মোড' : 'Dark Mode') 
    : (isBengali ? 'লাইট মোড' : 'Light Mode');

  const actionText = isDark 
    ? (isBengali ? 'লাইট মোডে পরিবর্তন করুন' : 'Switch to Light Mode') 
    : (isBengali ? 'ডার্ক মোডে পরিবর্তন করুন' : 'Switch to Dark Mode');

  return (
    <button
      id={id}
      type="button"
      onClick={toggleTheme}
      aria-label={actionText}
      title={`${actionText} (${activeModeText})`}
      className={`relative inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 select-none group cursor-pointer ${
        variant === 'pill' 
          ? 'px-3 py-1.5 rounded-full' 
          : 'px-2.5 py-1.5 sm:px-3 rounded-xl'
      } ${
        isDark
          ? 'bg-slate-800/90 text-amber-400 hover:text-amber-300 hover:bg-slate-700/90 border border-slate-700/90 shadow-sm'
          : 'bg-white/95 text-slate-800 hover:text-amber-700 hover:bg-amber-50/80 border border-slate-200/90 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center shrink-0">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>

      <span className={`ml-1.5 text-xs font-semibold tracking-wide ${
        showLabel ? 'inline-block' : 'hidden md:inline-block'
      }`}>
        {isDark ? (isBengali ? 'লাইট মোড' : 'Light') : (isBengali ? 'ডার্ক মোড' : 'Dark')}
      </span>
    </button>
  );
};

