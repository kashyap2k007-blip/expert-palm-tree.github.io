import { useEffect } from 'react';

export function useNoCopySecurity() {
  useEffect(() => {
    const preventCopy = e => {
      if (e.target.closest('.med-table-noselect')) {
        e.preventDefault();
        return false;
      }
    };
    document.addEventListener('copy', preventCopy);
    return () => document.removeEventListener('copy', preventCopy);
  }, []);
}

// Example: Scramble table row order for bots (not for users)
export function scrambleRowsForBots(rows) {
  if (navigator.userAgent.includes('bot') || navigator.userAgent.includes('Headless')) {
    return [...rows].sort(() => Math.random() - 0.5);
  }
  return rows;
}