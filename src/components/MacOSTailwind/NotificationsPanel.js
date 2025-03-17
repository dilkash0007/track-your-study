import React from 'react';

const NotificationsPanel = () => {
  // Mock notifications data
  const notificationsData = [
    {
      id: 1,
      title: 'Assignment Due',
      message: 'Your Physics assignment is due in 24 hours. Don\'t forget to submit it on time!',
      icon: '📝',
      time: '1 hour ago',
      isNew: true
    },
    {
      id: 2,
      title: 'Study Streak',
      message: 'Congratulations! You\'ve maintained a 7-day study streak. Keep up the good work!',
      icon: '🔥',
      time: '3 hours ago',
      isNew: true
    },
    {
      id: 3,
      title: 'New Course Available',
      message: 'A new course on Advanced Mathematics has been added to your curriculum.',
      icon: '🎓',
      time: 'Yesterday',
      isNew: false
    },
    {
      id: 4,
      title: 'Quiz Results',
      message: 'Your recent quiz results are now available. You scored 85% in Computer Science.',
      icon: '📊',
      time: '2 days ago',
      isNew: false
    },
    {
      id: 5,
      title: 'System Update',
      message: 'The study tracking system has been updated with new features. Check them out!',
      icon: '🔄',
      time: '1 week ago',
      isNew: false
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/10 border border-white/10 mt-6">
      <h2 className="text-xl font-semibold text-white mb-5 flex items-center">
        <span className="mr-2 text-2xl">🔔</span> Notifications
      </h2>
      
      <div className="space-y-4">
        {notificationsData.map((notification, index) => (
          <div 
            key={notification.id}
            className={`flex bg-white/5 rounded-xl p-4 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 hover:shadow-md ${
              notification.isNew ? 'border-l-2 border-l-blue-400' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0 ${
              notification.isNew 
                ? 'bg-blue-400/20 text-blue-400' 
                : 'bg-white/10'
            }`}>
              {notification.icon}
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-white flex items-center">
                  {notification.title}
                  {notification.isNew && (
                    <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">New</span>
                  )}
                </h4>
                <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full">
                  {notification.time}
                </span>
              </div>
              
              <p className="text-white/80 text-sm">
                {notification.message}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <button className="bg-white/10 text-white px-5 py-2.5 rounded-xl font-medium border border-white/10 hover:bg-white/15 hover:border-white/20 transition-colors duration-300">
          Clear All Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsPanel; 