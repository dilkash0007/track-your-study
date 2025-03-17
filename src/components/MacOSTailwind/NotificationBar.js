import React from 'react';

const NotificationBar = ({ currentTime }) => {
  return (
    <div className="h-7 bg-black/20 backdrop-blur-xl flex items-center justify-between px-4 text-white/90 text-xs shadow-sm border-b border-white/10 z-50">
      <div className="flex items-center gap-4">
        <div className="w-4 h-4 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 fill-white/90" viewBox="0 0 24 24">
            <path d="M11.8 0C5.3 0 0 5.3 0 11.8s5.3 11.8 11.8 11.8 11.8-5.3 11.8-11.8S18.3 0 11.8 0zm0 21.5c-5.4 0-9.7-4.4-9.7-9.7S6.4 2.1 11.8 2.1s9.7 4.4 9.7 9.7-4.3 9.7-9.7 9.7z"/>
            <path d="M17.1 11.8c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3z"/>
          </svg>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="px-2 py-0.5 cursor-pointer hover:text-white transition-colors duration-200 relative font-medium">
            File
          </span>
          <span className="px-2 py-0.5 cursor-pointer hover:text-white transition-colors duration-200 relative font-medium">
            Edit
          </span>
          <span className="px-2 py-0.5 cursor-pointer hover:text-white transition-colors duration-200 relative font-medium">
            View
          </span>
          <span className="px-2 py-0.5 cursor-pointer hover:text-white transition-colors duration-200 relative font-medium">
            Window
          </span>
          <span className="px-2 py-0.5 cursor-pointer hover:text-white transition-colors duration-200 relative font-medium">
            Help
          </span>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="bg-black/20 px-2.5 py-0.5 rounded-full text-xs font-medium">
          Track Your Study
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center h-4 cursor-pointer transition-transform duration-200 hover:scale-110">
          <svg className="w-4 h-4 fill-white/90" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <div className="flex items-center justify-center h-4 cursor-pointer transition-transform duration-200 hover:scale-110">
          <svg className="w-4 h-4 fill-white/90" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="flex items-center justify-center h-4 cursor-pointer transition-transform duration-200 hover:scale-110">
          <svg className="w-4.5 h-4.5 fill-white/90" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
          </svg>
        </div>
        <div className="bg-black/20 px-2 py-0.5 rounded-md text-xs font-medium">
          {currentTime}
        </div>
      </div>
    </div>
  );
};

export default NotificationBar; 