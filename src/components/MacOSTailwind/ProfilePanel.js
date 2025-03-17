import React from 'react';

const ProfilePanel = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/10 border border-white/10 h-full flex flex-col">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30 relative overflow-hidden animate-float">
          👨‍💻
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
        
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-white">Rahul Sharma</h3>
          <p className="text-white/60 text-sm">Premium Student</p>
        </div>
      </div>
      
      <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/5 flex justify-between">
        <div className="text-center">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">42</p>
          <p className="text-xs text-white/60 mt-1">Days</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">128</p>
          <p className="text-xs text-white/60 mt-1">Tasks</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">7</p>
          <p className="text-xs text-white/60 mt-1">Streak</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-white/70">Current Level</span>
          <span className="text-sm font-medium text-white">Advanced</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="flex justify-between text-xs text-white/50">
          <span>Intermediate</span>
          <span>Expert</span>
        </div>
      </div>
      
      <div className="mt-auto flex gap-3">
        <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
          <span className="relative z-10">View Profile</span>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
        </button>
        <button className="flex-1 py-3 rounded-xl bg-white/10 text-white font-medium border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300">
          Settings
        </button>
      </div>
    </div>
  );
};

export default ProfilePanel; 