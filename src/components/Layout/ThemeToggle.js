import React from 'react';
import { applyTheme } from '../../theme';

export default function ThemeToggle({ theme, setTheme }) {
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  };
  return (
    <button onClick={toggleTheme}
      aria-label="Toggle light/dark mode"
      className="btn btn-outline-secondary btn-sm ms-2"
    >{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}