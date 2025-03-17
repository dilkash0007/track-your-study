import React from 'react';

const WidgetsContainer = ({ 
  studyTimer, 
  isStudying, 
  toggleStudyTimer, 
  completedTasksPercent, 
  streakIntensity 
}) => {
  // Widget data
  const widgets = [
    {
      id: 'days-online',
      title: 'Days Online',
      value: '42',
      icon: '📅',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'student-checkouts',
      title: 'Student Checkouts',
      value: '128',
      icon: '👨‍🎓',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'completed-tasks',
      title: 'Completed Tasks',
      value: `${Math.round(completedTasksPercent)}%`,
      icon: '✅',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'pending-tasks',
      title: 'Pending Tasks',
      value: '12',
      icon: '⏳',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      id: 'tasks-in-progress',
      title: 'Tasks In Progress',
      value: '7',
      icon: '🔄',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'study-hours',
      title: 'Study Timer',
      value: studyTimer,
      icon: '⏱️',
      color: 'from-cyan-500 to-blue-600',
      isTimer: true
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {widgets.map(widget => (
        <div 
          key={widget.id}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 flex items-center shadow-lg shadow-black/10 border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 hover:border-white/20 group"
        >
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${widget.color} flex items-center justify-center text-2xl mr-5 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300`}>
            {widget.icon}
          </div>
          <div className="flex-grow">
            <h3 className="text-sm text-white/60 font-medium mb-2">{widget.title}</h3>
            <div className="flex items-center">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-sm">
                {widget.value}
              </p>
              
              {widget.isTimer && (
                <button 
                  onClick={toggleStudyTimer}
                  className={`ml-3 px-3 py-1 rounded-md text-xs font-medium transition-colors duration-200 ${
                    isStudying 
                      ? 'bg-red-500/80 hover:bg-red-600/80 text-white' 
                      : 'bg-green-500/80 hover:bg-green-600/80 text-white'
                  }`}
                >
                  {isStudying ? 'Stop' : 'Start'}
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetsContainer; 