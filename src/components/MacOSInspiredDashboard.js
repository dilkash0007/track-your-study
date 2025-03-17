import React, { useState, useEffect } from 'react';
import './styles/base.css';
import './styles/notification-bar.css';
import './styles/tabs.css';
import './styles/widgets.css';
import './styles/leaderboard.css';
import './styles/profile.css';
import './styles/messages.css';
import './styles/notifications.css';
import './styles/mobile.css';
import './styles/animations.css';

const MacOSInspiredDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('dashboard');
  const [studyTimer, setStudyTimer] = useState(0);
  const [isStudying, setIsStudying] = useState(false);
  const [streakIntensity, setStreakIntensity] = useState(0.6);
  const [completedTasksPercent, setCompletedTasksPercent] = useState(0);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  
  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    // Clean up the interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  // Animate completed tasks percentage on load
  useEffect(() => {
    const targetPercent = (stats.completedTasks / (stats.completedTasks + stats.pendingTasks + stats.tasksInProgress)) * 100;
    let startPercent = 0;
    
    const animateProgress = setInterval(() => {
      if (startPercent < targetPercent) {
        startPercent += 1;
        setCompletedTasksPercent(startPercent);
      } else {
        clearInterval(animateProgress);
      }
    }, 20);
    
    return () => clearInterval(animateProgress);
  }, []);
  
  // Study timer effect
  useEffect(() => {
    let timerInterval;
    
    if (isStudying) {
      timerInterval = setInterval(() => {
        setStudyTimer(prev => prev + 1);
      }, 1000);
    }
    
    return () => clearInterval(timerInterval);
  }, [isStudying]);
  
  // Streak intensity animation
  useEffect(() => {
    const intensityInterval = setInterval(() => {
      setStreakIntensity(prev => {
        const newValue = prev + (Math.random() * 0.1 - 0.05);
        return Math.max(0.5, Math.min(0.9, newValue));
      });
    }, 500);
    
    return () => clearInterval(intensityInterval);
  }, []);
  
  // Format study time
  const formatStudyTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Mock data for widgets
  const stats = {
    daysOnline: 42,
    streak: 16,
    studentCheckouts: 156,
    completedTasks: 78,
    pendingTasks: 12,
    tasksInProgress: 5,
    totalStudyHours: 128.5
  };
  
  // Mock data for leaderboard
  const leaderboardData = [
    { id: 1, name: 'Alex Johnson', avatar: '👨‍🎓', hours: 156, tasks: 42, change: 'up' },
    { id: 2, name: 'Sarah Williams', avatar: '👩‍🎓', hours: 142, tasks: 38, change: 'same' },
    { id: 3, name: 'Michael Brown', avatar: '👨‍🎓', hours: 135, tasks: 36, change: 'up' },
    { id: 4, name: 'Emily Davis', avatar: '👩‍🎓', hours: 128, tasks: 34, change: 'down' },
    { id: 5, name: 'David Miller', avatar: '👨‍🎓', hours: 120, tasks: 32, change: 'same' }
  ];
  
  // Mock data for messages
  const messages = [
    { id: 1, sender: 'Professor Smith', avatar: '👨‍🏫', message: 'Your last assignment was excellent!', time: '2h ago', unread: true },
    { id: 2, sender: 'Study Group', avatar: '👥', message: 'Meeting tomorrow at 3 PM', time: '5h ago', unread: true },
    { id: 3, sender: 'Library', avatar: '📚', message: 'Your reserved books are ready for pickup', time: '1d ago', unread: false }
  ];
  
  // Mock data for notifications
  const notifications = [
    { id: 1, title: 'Assignment Due', message: 'Math homework due in 2 days', time: '1h ago', icon: '📝', new: true },
    { id: 2, title: 'Exam Reminder', message: 'Physics exam next Monday', time: '3h ago', icon: '📅', new: true },
    { id: 3, title: 'New Course Material', message: 'New lecture notes available', time: '1d ago', icon: '📚', new: false }
  ];

  // Calculate unread counts
  const unreadMessages = messages.filter(m => m.unread).length;
  const newNotifications = notifications.filter(n => n.new).length;

  return (
    <div className="macos-dashboard">
      {/* Top Notification Bar */}
      <div className="notification-bar">
        <div className="notification-bar-left">
          <div className="apple-logo">
            <svg viewBox="0 0 16 16" className="apple-icon">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
            </svg>
          </div>
          <div className="menu-item active">Track Your Study</div>
          <div className="menu-item">File</div>
          <div className="menu-item">Edit</div>
          <div className="menu-item">View</div>
          <div className="menu-item">Help</div>
        </div>
        <div className="notification-bar-center">
          {currentTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
        </div>
        <div className="notification-bar-right">
          <div className="status-icon">
            <span className="time-display">
              {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          <div className="status-icon">
            <svg viewBox="0 0 24 24" className="wifi-icon">
              <path d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3C16.05 3 19.79 4.34 22.8 6.6L21 9C18.5 7.12 15.38 6 12 6M16.84 13.41C17.18 13.07 17.18 12.53 16.84 12.19C16.5 11.85 15.96 11.85 15.62 12.19L12 15.82L8.38 12.19C8.04 11.85 7.5 11.85 7.16 12.19C6.82 12.53 6.82 13.07 7.16 13.41L11.5 17.75C11.84 18.09 12.16 18.09 12.5 17.75L16.84 13.41M12 9C10.35 9 8.84 9.38 7.5 10.06L6.3 8.58C7.99 7.63 9.9 7 12 7C14.1 7 16.01 7.63 17.7 8.58L16.5 10.06C15.16 9.38 13.65 9 12 9Z" />
            </svg>
          </div>
          <div className="status-icon battery-icon">
            <div className="battery-level" style={{ width: '78%' }}></div>
            <span className="battery-percent">78%</span>
          </div>
          <div className="status-icon notification-bell">
            <svg viewBox="0 0 24 24" className="notification-icon">
              <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" />
            </svg>
            {newNotifications > 0 && <div className="notification-badge">{newNotifications}</div>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navigation Tabs */}
        <div className="tabs-container">
          <div 
            className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <span className="tab-icon">📊</span>
            Dashboard
          </div>
          <div 
            className={`tab ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <span className="tab-icon">💬</span>
            Messages
            {unreadMessages > 0 && <span className="tab-badge">{unreadMessages}</span>}
          </div>
          <div 
            className={`tab ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <span className="tab-icon">🔔</span>
            Notifications
            {newNotifications > 0 && <span className="tab-badge">{newNotifications}</span>}
          </div>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="dashboard-content">
            {/* Stats Widgets */}
            <div className="widgets-container">
              <div className="widget streak-widget">
                <div className="streak-flame" style={{ opacity: streakIntensity }}>🔥</div>
                <div className="widget-content">
                  <div className="widget-title">Days Online</div>
                  <div className="widget-value">{stats.daysOnline}</div>
                  <div className="streak-info">
                    <span className="streak-count">{stats.streak} day streak</span>
                    <div className="streak-bar">
                      <div className="streak-progress" style={{ width: `${(stats.streak / 30) * 100}%` }}></div>
                    </div>
                    <span className="streak-message">Keep it up!</span>
                  </div>
                </div>
              </div>
              
              <div className="widget checkout-widget">
                <div className="widget-icon">👨‍🎓</div>
                <div className="widget-content">
                  <div className="widget-title">Student Checkouts</div>
                  <div className="widget-value animated-counter">{stats.studentCheckouts}</div>
                  <div className="checkout-graph">
                    <div className="graph-bar" style={{ height: '60%' }}></div>
                    <div className="graph-bar" style={{ height: '40%' }}></div>
                    <div className="graph-bar" style={{ height: '80%' }}></div>
                    <div className="graph-bar" style={{ height: '70%' }}></div>
                    <div className="graph-bar" style={{ height: '90%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="widget completed-tasks-widget">
                <div className="progress-ring-container">
                  <svg className="progress-ring" width="60" height="60">
                    <circle className="progress-ring-circle-bg" cx="30" cy="30" r="25"></circle>
                    <circle 
                      className="progress-ring-circle" 
                      cx="30" 
                      cy="30" 
                      r="25"
                      style={{ 
                        strokeDashoffset: `${(100 - completedTasksPercent) * 1.57}` 
                      }}
                    ></circle>
                  </svg>
                  <div className="progress-icon">✅</div>
                </div>
                <div className="widget-content">
                  <div className="widget-title">Completed Tasks</div>
                  <div className="widget-value">{stats.completedTasks}</div>
                  <div className="task-percent">{Math.round(completedTasksPercent)}% of all tasks</div>
                </div>
              </div>
              
              <div className="widget pending-tasks-widget">
                <div className="widget-icon pending-icon">⏳</div>
                <div className="widget-content">
                  <div className="widget-title">Pending Tasks</div>
                  <div className="widget-value">{stats.pendingTasks}</div>
                  <div className="task-loader">
                    <div className="loader-bar"></div>
                  </div>
                </div>
              </div>
              
              <div className="widget in-progress-widget">
                <div className="widget-icon progress-icon">🔄</div>
                <div className="widget-content">
                  <div className="widget-title">Tasks In Progress</div>
                  <div className="widget-value">{stats.tasksInProgress}</div>
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                </div>
              </div>
              
              <div className="widget study-hours-widget">
                <div className="widget-icon timer-icon">⏱️</div>
                <div className="widget-content">
                  <div className="widget-title">Total Study Hours</div>
                  <div className="widget-value neon-text">{stats.totalStudyHours}</div>
                  <div className="study-timer">
                    <div className="timer-display">{formatStudyTime(studyTimer)}</div>
                    <button 
                      className={`timer-button ${isStudying ? 'stop' : 'start'}`}
                      onClick={() => setIsStudying(!isStudying)}
                    >
                      {isStudying ? 'Pause' : 'Start Studying'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Leaderboard and Profile Section */}
            <div className="dashboard-panels">
              <div className="leaderboard-panel">
                <h3>Student Leaderboard</h3>
                <div className="leaderboard-list">
                  {leaderboardData.map((student, index) => (
                    <div key={student.id} className={`leaderboard-item ${index < 3 ? 'top-rank' : ''}`}>
                      <div className={`leaderboard-rank rank-${index + 1}`}>{index + 1}</div>
                      <div className={`leaderboard-avatar ${index < 3 ? 'with-aura' : ''}`}>
                        {student.avatar}
                        {index < 3 && <div className="avatar-aura"></div>}
                      </div>
                      <div className="leaderboard-name">{student.name}</div>
                      <div className="leaderboard-stats">
                        <span>{student.hours} hrs</span>
                        <span>{student.tasks} tasks</span>
                      </div>
                      <div className={`rank-change ${student.change}`}>
                        {student.change === 'up' && '↑'}
                        {student.change === 'down' && '↓'}
                        {student.change === 'same' && '–'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="profile-panel">
                <div className="profile-header">
                  <div className="profile-avatar-container">
                    <div className="profile-avatar">👨‍🎓</div>
                    <div className="status-indicator online"></div>
                  </div>
                  <div className="profile-info">
                    <h3>John Doe</h3>
                    <p>Computer Science Student</p>
                  </div>
                  <div className="profile-settings" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
                    <svg viewBox="0 0 24 24" className="settings-icon">
                      <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                    </svg>
                  </div>
                  {showProfileDropdown && (
                    <div className="profile-dropdown">
                      <div className="dropdown-item">Edit Profile</div>
                      <div className="dropdown-item">Account Settings</div>
                      <div className="dropdown-item">Preferences</div>
                      <div className="dropdown-item">Help & Support</div>
                      <div className="dropdown-item logout">Sign Out</div>
                    </div>
                  )}
                </div>
                <div className="profile-stats">
                  <div className="profile-stat">
                    <div className="profile-stat-value">78%</div>
                    <div className="profile-stat-label">Progress</div>
                  </div>
                  <div className="profile-stat">
                    <div className="profile-stat-value">42</div>
                    <div className="profile-stat-label">Tasks</div>
                  </div>
                  <div className="profile-stat">
                    <div className="profile-stat-value">128</div>
                    <div className="profile-stat-label">Hours</div>
                  </div>
                </div>
                <div className="profile-actions">
                  <button className="profile-button">Edit Profile</button>
                  <button className="profile-button">View Details</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Messages Content */}
        {activeTab === 'messages' && (
          <div className="messages-content">
            <h2>Messages</h2>
            <div className="messages-list">
              {messages.map(message => (
                <div key={message.id} className={`message-item ${message.unread ? 'unread' : ''}`}>
                  <div className="message-avatar">{message.avatar}</div>
                  <div className="message-content">
                    <div className="message-header">
                      <div className="message-sender">{message.sender}</div>
                      <div className="message-time">{message.time}</div>
                    </div>
                    <div className="message-text">{message.message}</div>
                  </div>
                  {message.unread && <div className="unread-indicator"></div>}
                </div>
              ))}
            </div>
            <div className="compose-message">
              <input type="text" placeholder="Type a message..." className="message-input" />
              <button className="send-button">Send</button>
            </div>
          </div>
        )}

        {/* Notifications Content */}
        {activeTab === 'notifications' && (
          <div className="notifications-content">
            <h2>Notifications</h2>
            <div className="notifications-list">
              {notifications.map(notification => (
                <div key={notification.id} className={`notification-item ${notification.new ? 'new-notification' : ''}`}>
                  <div className="notification-icon">{notification.icon}</div>
                  <div className="notification-content">
                    <div className="notification-header">
                      <div className="notification-title">{notification.title}</div>
                      <div className="notification-time">{notification.time}</div>
                    </div>
                    <div className="notification-text">{notification.message}</div>
                  </div>
                  {notification.new && <div className="new-indicator"></div>}
                </div>
              ))}
            </div>
            <div className="notification-actions">
              <button className="clear-button">Clear All</button>
              <button className="settings-button">Notification Settings</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MacOSInspiredDashboard; 