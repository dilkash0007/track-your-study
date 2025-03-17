import React from 'react';

const LeaderboardPanel = () => {
  // Mock leaderboard data
  const leaderboardData = [
    {
      id: 1,
      name: 'Alex Johnson',
      avatar: '👨‍🎓',
      studyHours: 42,
      tasksCompleted: 38,
      streak: 7
    },
    {
      id: 2,
      name: 'Samantha Lee',
      avatar: '👩‍🎓',
      studyHours: 38,
      tasksCompleted: 35,
      streak: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      avatar: '👨‍💻',
      studyHours: 36,
      tasksCompleted: 30,
      streak: 4
    },
    {
      id: 4,
      name: 'Emily Wilson',
      avatar: '👩‍💻',
      studyHours: 32,
      tasksCompleted: 28,
      streak: 3
    },
    {
      id: 5,
      name: 'David Kim',
      avatar: '🧑‍🎓',
      studyHours: 30,
      tasksCompleted: 25,
      streak: 3
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/10 border border-white/10 h-full">
      <h3 className="text-xl font-semibold text-white mb-5 flex items-center">
        <span className="mr-2 text-2xl">🏆</span> Leaderboard
      </h3>
      
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {leaderboardData.map((user, index) => (
          <div 
            key={user.id}
            className="flex items-center p-3 bg-white/5 rounded-xl border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:translate-x-1 hover:shadow-md"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-7 h-7 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mr-3 shadow-md shadow-blue-500/30">
              {index + 1}
            </div>
            
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl mr-3">
              {user.avatar}
            </div>
            
            <div className="flex-grow font-medium text-white">
              {user.name}
            </div>
            
            <div className="flex gap-3 text-xs text-white/60">
              <span className="bg-white/5 px-2 py-1 rounded-md">
                {user.studyHours}h
              </span>
              <span className="bg-white/5 px-2 py-1 rounded-md">
                {user.tasksCompleted} tasks
              </span>
              <span className="bg-white/5 px-2 py-1 rounded-md flex items-center">
                <span className="mr-1">🔥</span> {user.streak}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPanel; 