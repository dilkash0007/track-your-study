import React from 'react';

const MobileNavigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'profile', label: 'Profile', icon: '👤' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-black/30 backdrop-blur-xl border-t border-white/10 flex justify-around items-center z-50">
      {navItems.map(item => (
        <button
          key={item.id}
          className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === item.id 
              ? 'text-white bg-white/10' 
              : 'text-white/60 hover:text-white'
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          <span className="text-xl mb-1">{item.icon}</span>
          <span className="text-xs font-medium">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MobileNavigation; 