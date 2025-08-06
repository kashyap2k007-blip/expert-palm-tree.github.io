const lightTheme = {
  '--bg-color': '#f8fafc',
  '--text-color': '#0e226c',
  '--primary': '#155799',
  '--secondary': '#f7b733',
  '--table-bg': '#fff',
  '--badge-gm': '#155799',
  '--badge-obc': '#2b9348',
  '--badge-sc': '#b5179e',
  '--badge-st': '#720026',
  '--badge-ews': '#f7b733',
  '--badge-private': '#f7b733',
  '--badge-govt': '#155799',
  '--badge-deemed': '#720026',
};
const darkTheme = {
  '--bg-color': '#181c24',
  '--text-color': '#f8fafc',
  '--primary': '#155799',
  '--secondary': '#f7b733',
  '--table-bg': '#232a34',
  '--badge-gm': '#4cc9f0',
  '--badge-obc': '#80b918',
  '--badge-sc': '#f72585',
  '--badge-st': '#720026',
  '--badge-ews': '#f7b733',
  '--badge-private': '#f7b733',
  '--badge-govt': '#4cc9f0',
  '--badge-deemed': '#720026',
};

export function applyTheme(theme) {
  const themeVars = theme === 'dark' ? darkTheme : lightTheme;
  Object.entries(themeVars).forEach(([k, v]) => {
    document.documentElement.style.setProperty(k, v);
  });
}

// Optionally, auto-apply theme on load
const stored = localStorage.getItem('theme');
applyTheme(stored || 'light');