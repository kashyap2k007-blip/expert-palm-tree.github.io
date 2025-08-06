import React from 'react';
import ThemeToggle from './ThemeToggle';
import AboutModal from './AboutModal';

export default function Layout({ children, theme, setTheme, activeTab, setActiveTab }) {
  return (
    <div>
      {/* Hero Bar */}
      <header className="navbar navbar-expand-lg sticky-top shadow-sm" style={{background:'var(--bg-color)'}}>
        <div className="container">
          <span className="navbar-brand fw-bold">
            <img src="/logo.svg" alt="MedAdmit" height={32} className="me-2" />
            MedAdmit
          </span>
          <nav>
            <button
              className={`nav-link${activeTab==='explore' ? ' active':''}`}
              onClick={() => setActiveTab('explore')}>Explore</button>
            <button
              className={`nav-link${activeTab==='compare' ? ' active':''}`}
              onClick={() => setActiveTab('compare')}>Compare</button>
            {/* Add more tabs as needed */}
          </nav>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <AboutModal />
        </div>
      </header>
      <main className="container pt-3 pb-5">{children}</main>
      <footer className="footer text-center small opacity-75 mt-4">
        <span>Built by medical education researchers • <strong>No tracking. No data selling.</strong></span>
      </footer>
    </div>
  );
}