import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'messages', label: 'Messages' },
    { id: 'notifications', label: 'Notifications' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg shadow-black/10 border border-white/10 flex">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`px-6 py-3.5 font-medium transition-all duration-300 relative overflow-hidden ${
            activeTab === tab.id 
              ? 'text-white bg-white/10' 
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
          {activeTab === tab.id && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-sm" />
          )}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation; 