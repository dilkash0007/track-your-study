import React, { useState, useEffect } from 'react';
import NotificationBar from './NotificationBar';
import TabNavigation from './TabNavigation';
import WidgetsContainer from './WidgetsContainer';
import LeaderboardPanel from './LeaderboardPanel';
import ProfilePanel from './ProfilePanel';
import MessagesPanel from './MessagesPanel';
import NotificationsPanel from './NotificationsPanel';
import MobileNavigation from './MobileNavigation';

const MacOSTailwindDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('dashboard');
  const [studyTimer, setStudyTimer] = useState(0);
  const [isStudying, setIsStudying] = useState(false);
  const [streakIntensity, setStreakIntensity] = useState(0);
  const [completedTasksPercent, setCompletedTasksPercent] = useState(0);

  // Update clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Animate completed tasks percentage
  useEffect(() => {
    const targetPercent = 68; // This would come from your data
    const duration = 1500; // Animation duration in ms
    const step = 10; // Update every 10ms
    const increment = (targetPercent / duration) * step;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetPercent) {
        current = targetPercent;
        clearInterval(timer);
      }
      setCompletedTasksPercent(current);
    }, step);
    
    return () => clearInterval(timer);
  }, []);

  // Study timer
  useEffect(() => {
    let timer;
    if (isStudying) {
      timer = setInterval(() => {
        setStudyTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStudying]);

  // Animate streak intensity
  useEffect(() => {
    const targetIntensity = 0.8; // 80% intensity
    const duration = 2000;
    const step = 20;
    const increment = (targetIntensity / duration) * step;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetIntensity) {
        current = targetIntensity;
        clearInterval(timer);
      }
      setStreakIntensity(current);
    }, step);
    
    return () => clearInterval(timer);
  }, []);

  // Format time for display
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Format study timer
  const formatStudyTimer = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Toggle study timer
  const toggleStudyTimer = () => {
    setIsStudying(!isStudying);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      <NotificationBar currentTime={formatTime(currentTime)} />
      
      <main className="flex-grow p-4 md:p-6 overflow-y-auto space-y-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-fade-in">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            
            <WidgetsContainer 
              studyTimer={formatStudyTimer(studyTimer)}
              isStudying={isStudying}
              toggleStudyTimer={toggleStudyTimer}
              completedTasksPercent={completedTasksPercent}
              streakIntensity={streakIntensity}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <LeaderboardPanel />
              </div>
              <div>
                <ProfilePanel />
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'messages' && (
          <div className="animate-fade-in">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <MessagesPanel />
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div className="animate-fade-in">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <NotificationsPanel />
          </div>
        )}
        
        {activeTab === 'profile' && (
          <div className="animate-fade-in">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="mt-6">
              <ProfilePanel />
            </div>
          </div>
        )}
      </main>
      
      <div className="md:hidden">
        <MobileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default MacOSTailwindDashboard; 