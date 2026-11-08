import React, { createContext, useContext, useEffect, ReactNode } from 'react';

export type ThemeMode = 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  isDark: boolean;
  isLight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  isDark: true,
  isLight: false,
  toggleTheme: () => {},
  setTheme: () => {}
});

const LOCAL_STORAGE_THEME_KEY = 'biley_academy_theme';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Always lock application to dark mode
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove('light');
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';

    body.classList.remove('light', 'bg-slate-50', 'text-slate-900');
    body.classList.add('dark', 'bg-slate-950', 'text-slate-100');

    try {
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, 'dark');
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  return (
    <ThemeContext.Provider 
      value={{ 
        theme: 'dark', 
        isDark: true, 
        isLight: false, 
        toggleTheme: () => {}, 
        setTheme: () => {} 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  return context;
};

