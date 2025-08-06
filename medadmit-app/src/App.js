import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import ExploreTab from './components/Tabs/ExploreTab';
import CompareTab from './components/Tabs/CompareTab';
// import other tabs as needed
// import hooks (to be created)
// import './App.css';

function App() {
  // TODO: Replace with useLocalStorage hook for theme persistence
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('explore');

  // TODO: Add useNoCopySecurity hook for anti-copy features

  return (
    <div className={`app ${theme}`}>
      <Layout
        theme={theme}
        setTheme={setTheme}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        {activeTab === 'explore' && <ExploreTab />}
        {activeTab === 'compare' && <CompareTab />}
        {/* Add other tabs here */}
      </Layout>
    </div>
  );
}

export default App;
