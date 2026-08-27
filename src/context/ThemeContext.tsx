import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  isDark: boolean;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const LOCAL_STORAGE_THEME_KEY = 'biley_academy_theme';

const getInitialTheme = (): ThemeMode => {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      // Complement existing system theme detection
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (err) {
      console.warn('Unable to access localStorage for theme initialization', err);
    }
  }
  return 'light'; // Default to refined modern light theme
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(getInitialTheme);

  // Synchronize DOM attributes and localStorage whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      body.classList.remove('dark', 'bg-slate-950', 'text-slate-100');
      body.classList.add('light', 'bg-slate-50', 'text-slate-900');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      body.classList.remove('light', 'bg-slate-50', 'text-slate-900');
      body.classList.add('dark', 'bg-slate-950', 'text-slate-100');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    }

    try {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    } catch (e) {
      console.warn('Failed to persist theme to localStorage', e);
    }
  }, [theme]);

  // Listen to OS / System theme changes if user hasn't explicitly set a preference
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
        // Only react to OS change if user has not manually set a choice in storage
        if (!stored) {
          setThemeState(e.matches ? 'dark' : 'light');
        }
      } catch (err) {
        console.warn('Error reading theme from storage on system theme change', err);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    } else if ('addListener' in mediaQuery) {
      // Fallback for older browsers
      // @ts-ignore
      mediaQuery.addListener(handleSystemThemeChange);
      return () => {
        // @ts-ignore
        mediaQuery.removeListener(handleSystemThemeChange);
      };
    }
  }, []);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        isDark: theme === 'dark', 
        isLight: theme === 'light', 
        toggleTheme, 
        setTheme 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

