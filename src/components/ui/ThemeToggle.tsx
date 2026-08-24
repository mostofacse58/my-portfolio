'use client';

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { THEME_STORAGE_KEY } from '@/components/ui/ThemeScript';
import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark';

export default function ThemeToggle({ className }: { className?: string }) {
  /* ThemeScript has already set data-theme before paint. Start as null so the
     first render matches the server markup, then read the real value on mount —
     otherwise the icon hydrates wrong for anyone whose theme is not the default. */
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  /* Follow the OS while the visitor has not made an explicit choice. */
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      const next: Theme = e.matches ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* Private mode or storage disabled — the theme still applies for this visit. */
    }
    setTheme(next);
  };

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggle}
      /* Rendered on the server too, so the button never pops in after hydration. */
      aria-label={
        theme === null
          ? 'Toggle colour theme'
          : isLight
            ? 'Switch to dark theme'
            : 'Switch to light theme'
      }
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className={cn(
        'glass hover:border-brand-400/40 hover:text-fg grid h-10 w-10 place-items-center rounded-xl text-slate-300 transition-colors',
        className,
      )}
    >
      {/* Both icons are always mounted and cross-faded, so nothing shifts while
          `theme` is still null on the very first paint. */}
      <span className="relative block h-4 w-4">
        <FaSun
          aria-hidden
          className={cn(
            'absolute inset-0 h-4 w-4 transition-all duration-300',
            isLight ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0',
          )}
        />
        <FaMoon
          aria-hidden
          className={cn(
            'absolute inset-0 h-4 w-4 transition-all duration-300',
            isLight ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100',
          )}
        />
      </span>
    </button>
  );
}
