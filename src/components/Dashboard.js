import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
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
    <div className="dashboard-container">
      {/* Top Menu Bar - Frosted Glass Style */}
      <div className="menu-bar">
        <div className="menu-bar-left">
          <div className="apple-logo">
            <svg viewBox="0 0 16 16" className="apple-icon">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
            </svg>
          </div>
          <div className="menu-item active">Track Your Study</div>
          <div className="menu-item">File</div>
          <div className="menu-item">Edit</div>
          <div className="menu-item">View</div>
          <div className="menu-item">Window</div>
          <div className="menu-item">Help</div>
        </div>
        <div className="menu-bar-center">
          {formattedDate}
        </div>
        <div className="menu-bar-right">
          <div className="status-icon wifi-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3C16.05 3 19.79 4.34 22.8 6.6L21 9C18.5 7.12 15.38 6 12 6M16.84 13.41C17.18 13.07 17.18 12.53 16.84 12.19C16.5 11.85 15.96 11.85 15.62 12.19L12 15.82L8.38 12.19C8.04 11.85 7.5 11.85 7.16 12.19C6.82 12.53 6.82 13.07 7.16 13.41L11.5 17.75C11.84 18.09 12.16 18.09 12.5 17.75L16.84 13.41M12 9C10.35 9 8.84 9.38 7.5 10.06L6.3 8.58C7.99 7.63 9.9 7 12 7C14.1 7 16.01 7.63 17.7 8.58L16.5 10.06C15.16 9.38 13.65 9 12 9Z" />
            </svg>
          </div>
          <div className="status-icon battery-icon">
            <div className="battery-outer">
              <div className="battery-inner" style={{width: `${batteryLevel}%`}}></div>
            </div>
            <span className="battery-percentage">{batteryLevel}%</span>
          </div>
          <div className="status-icon">
            <span className="time-display">{formattedTime}</span>
          </div>
          <div className="status-icon notification-center">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" />
            </svg>
          </div>
          <div className="status-icon control-center">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content Area - Empty */}
      <div className="main-content">
        <div className="desktop-background"></div>
      </div>

      {/* Bottom Dock - Curved Glass Effect */}
      <div className="dock-container">
        <div className="dock">
          {menuItems.map((item, index) => (
            <div key={index} className="dock-item">
              <div className="dock-icon-wrapper">
                <div className="dock-icon">
                  <span className="dock-icon-symbol">{item.icon}</span>
                </div>
                <div className="dock-reflection"></div>
              </div>
              <div className="dock-label">{item.name}</div>
              <div className="dock-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 