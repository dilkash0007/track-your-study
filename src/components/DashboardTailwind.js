import React, { useState, useEffect } from 'react';

function DashboardTailwind() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second for a more realistic feel
    
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { name: 'Task', icon: '📝' },
    { name: 'Exams', icon: '📚' },
    { name: 'Pomodoro', icon: '⏱️' },
    { name: 'Time-Table', icon: '📅' },
    { name: 'Settings', icon: '⚙️' }
  ];

  // Format date for menu bar
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  // Format time for menu bar
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  // Battery level simulation
  const batteryLevel = 78;

  return (
    <div className="flex flex-col h-screen overflow-hidden relative font-sans text-gray-800">
      {/* Desktop Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 bg-cover -z-10"></div>
      
      {/* Top Menu Bar - Frosted Glass Style */}
      <div className="h-6 bg-white/80 backdrop-blur-md flex items-center justify-between px-3 text-xs shadow-sm z-50">
        <div className="flex items-center gap-4">
          {/* Apple Logo */}
          <div className="w-4 h-4 flex items-center justify-center">
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-gray-800">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
            </svg>
          </div>
          
          {/* Menu Items */}
          <div className="font-semibold hover:text-black transition-colors duration-200 cursor-pointer">Track Your Study</div>
          <div className="hover:text-black transition-colors duration-200 cursor-pointer">File</div>
          <div className="hover:text-black transition-colors duration-200 cursor-pointer">Edit</div>
          <div className="hover:text-black transition-colors duration-200 cursor-pointer">View</div>
          <div className="hover:text-black transition-colors duration-200 cursor-pointer">Window</div>
          <div className="hover:text-black transition-colors duration-200 cursor-pointer">Help</div>
        </div>
        
        {/* Center Date */}
        <div className="absolute left-1/2 -translate-x-1/2 font-normal">
          {formattedDate}
        </div>
        
        {/* Right Status Icons */}
        <div className="flex items-center gap-2">
          {/* WiFi Icon */}
          <div className="flex items-center justify-center h-4 px-1 cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3C16.05 3 19.79 4.34 22.8 6.6L21 9C18.5 7.12 15.38 6 12 6M16.84 13.41C17.18 13.07 17.18 12.53 16.84 12.19C16.5 11.85 15.96 11.85 15.62 12.19L12 15.82L8.38 12.19C8.04 11.85 7.5 11.85 7.16 12.19C6.82 12.53 6.82 13.07 7.16 13.41L11.5 17.75C11.84 18.09 12.16 18.09 12.5 17.75L16.84 13.41M12 9C10.35 9 8.84 9.38 7.5 10.06L6.3 8.58C7.99 7.63 9.9 7 12 7C14.1 7 16.01 7.63 17.7 8.58L16.5 10.06C15.16 9.38 13.65 9 12 9Z" />
            </svg>
          </div>
          
          {/* Battery Icon */}
          <div className="flex items-center gap-1 px-1 cursor-pointer">
            <div className="relative w-[22px] h-[10px] border border-gray-800 rounded-[2px] p-[1px]">
              <div className="absolute -right-[3px] top-[2px] w-[2px] h-[6px] bg-gray-800 rounded-r-[1px]"></div>
              <div className="h-full bg-gray-800 rounded-[1px]" style={{width: `${batteryLevel}%`}}></div>
            </div>
            <span className="text-[11px]">{batteryLevel}%</span>
          </div>
          
          {/* Time */}
          <div className="flex items-center justify-center h-4 px-1 cursor-pointer text-[12px] font-normal">
            {formattedTime}
          </div>
          
          {/* Notification Center */}
          <div className="flex items-center justify-center h-4 px-1 cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" />
            </svg>
          </div>
          
          {/* Control Center */}
          <div className="flex items-center justify-center h-4 px-1 cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content Area - Empty */}
      <div className="flex-grow relative overflow-hidden"></div>

      {/* Bottom Dock - Curved Glass Effect */}
      <div className="relative flex justify-center py-2 pb-3 z-10">
        <div className="dock flex justify-center items-end gap-2 bg-white/25 backdrop-blur-2xl rounded-[18px] px-2.5 py-1.5 
                      shadow-[0_4px_16px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.05),inset_0_0_0_0.5px_rgba(255,255,255,0.5)]
                      border-[0.5px] border-white/30 transition-all duration-300">
          {menuItems.map((item, index) => (
            <div key={index} className="dock-item flex flex-col items-center relative transition-all duration-300 group">
              <div className="relative mb-1">
                {/* Icon */}
                <div className="dock-icon w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center 
                              shadow-sm transition-all duration-300 origin-bottom z-10">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                
                {/* Reflection */}
                <div className="absolute bottom-[-4px] left-[10%] w-[80%] h-[10px] bg-white/40 blur-[5px] rounded-full 
                              scale-x-[0.7] opacity-30 z-0"></div>
              </div>
              
              {/* Label */}
              <div className="absolute top-[-30px] bg-black/70 text-white px-2 py-1 rounded text-[11px] whitespace-nowrap 
                            opacity-0 translate-y-2.5 transition-all duration-200 pointer-events-none
                            group-hover:opacity-100 group-hover:translate-y-0">
                {item.name}
              </div>
              
              {/* Indicator Dot */}
              <div className="w-1 h-1 rounded-full bg-white/80 mt-1 opacity-0 transition-opacity duration-200
                            group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom styles for animations */}
      <style>
        {`
          @keyframes dock-bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05) translateY(-2px); }
          }
          
          .dock:hover {
            animation: dock-bounce 1s ease-in-out;
          }
          
          .dock-item:hover .dock-icon {
            transform: scale(1.2) translateY(-6px);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
          }
          
          .dock-item:hover + .dock-item .dock-icon {
            transform: scale(1.1) translateY(-3px);
          }
          
          .dock-item:hover + .dock-item + .dock-item .dock-icon {
            transform: scale(1.05) translateY(-1px);
          }
        `}
      </style>
    </div>
  );
}

export default DashboardTailwind; 