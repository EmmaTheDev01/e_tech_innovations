'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

const themeListeners = new Set<() => void>();

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'dark';
  const saved = (localStorage.getItem('etech-theme') || localStorage.getItem('zentiv-theme')) as Theme | null;
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function subscribeToTheme(callback: () => void) {
  themeListeners.add(callback);
  if (typeof window === 'undefined') return () => {};

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleMedia = () => {
    const saved = localStorage.getItem('etech-theme') || localStorage.getItem('zentiv-theme');
    if (!saved) {
      callback();
    }
  };
  mediaQuery.addEventListener('change', handleMedia);

  const handleStorage = (e: StorageEvent) => {
    if (e.key === 'etech-theme' || e.key === 'zentiv-theme') {
      callback();
    }
  };
  window.addEventListener('storage', handleStorage);

  return () => {
    themeListeners.delete(callback);
    mediaQuery.removeEventListener('change', handleMedia);
    window.removeEventListener('storage', handleStorage);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribeToTheme, getThemeSnapshot, () => 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem('etech-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    themeListeners.forEach((listener) => listener());
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
