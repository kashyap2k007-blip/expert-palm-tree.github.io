import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import ExploreTab from './components/Tabs/ExploreTab';
import CompareTab from './components/Tabs/CompareTab';
import TrendsTab from './components/Tabs/TrendsTab';
import SeatsTab from './components/Tabs/SeatsTab';
import SummaryTab from './components/Tabs/SummaryTab';
import useLocalStorage from './hooks/useLocalStorage';
import { useNoCopySecurity } from './security';
// import './App.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [activeTab, setActiveTab] = useState('explore');

  useNoCopySecurity();

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
        {activeTab === 'trends' && <TrendsTab />}
        {activeTab === 'seats' && <SeatsTab />}
        {activeTab === 'summary' && <SummaryTab />}
      </Layout>
    </div>
  );
}

export default App;
