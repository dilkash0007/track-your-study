import React from 'react';

const MessagesPanel = () => {
  // Mock messages data
  const messagesData = [
    {
      id: 1,
      sender: 'Alex Johnson',
      avatar: '👨‍🎓',
      message: 'Hey, have you completed the assignment for tomorrow? I\'m stuck on question 3.',
      time: '10:42 AM',
      unread: true
    },
    {
      id: 2,
      sender: 'Prof. Williams',
      avatar: '👨‍🏫',
      message: 'The deadline for the project submission has been extended to next Friday. Please check the updated requirements.',
      time: 'Yesterday',
      unread: true
    },
    {
      id: 3,
      sender: 'Study Group',
      avatar: '👥',
      message: 'We\'re meeting in the library at 4 PM to prepare for the upcoming exam. Who\'s joining?',
      time: 'Yesterday',
      unread: false
    },
    {
      id: 4,
      sender: 'Samantha Lee',
      avatar: '👩‍🎓',
      message: 'Thanks for sharing your notes! They were really helpful for understanding the concept.',
      time: 'Monday',
      unread: false
    },
    {
      id: 5,
      sender: 'Academic Advisor',
      avatar: '🧑‍💼',
      message: 'Your academic progress report for this semester is now available. Please schedule a meeting to discuss.',
      time: 'Last week',
      unread: false
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg shadow-black/10 border border-white/10 mt-6">
      <h2 className="text-xl font-semibold text-white mb-5 flex items-center">
        <span className="mr-2 text-2xl">💬</span> Messages
      </h2>
      
      <div className="space-y-4">
        {messagesData.map((message, index) => (
          <div 
            key={message.id}
            className={`flex bg-white/5 rounded-xl p-4 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 hover:shadow-md relative ${
              message.unread ? 'border-l-2 border-l-blue-400' : ''
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0">
              {message.avatar}
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-white">{message.sender}</h4>
                <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full">
                  {message.time}
                </span>
              </div>
              
              <p className="text-white/80 text-sm line-clamp-2">
                {message.message}
              </p>
            </div>
            
            {message.unread && (
              <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-blue-400 rounded-full shadow-md shadow-blue-400/50"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex">
        <input 
          type="text" 
          placeholder="Type a message..." 
          className="flex-grow bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-colors duration-300"
        />
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 rounded-r-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 relative overflow-hidden">
          <span className="relative z-10">Send</span>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
        </button>
      </div>
    </div>
  );
};

export default MessagesPanel; 