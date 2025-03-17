import React, { useState } from 'react';
import './MacDock.css';

const MacDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const dockItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Calendar', icon: '📅' },
    { name: 'Tasks', icon: '✅' },
    { name: 'Notes', icon: '📝' },
    { name: 'Books', icon: '📚' },
    { name: 'Statistics', icon: '📈' },
    { name: 'Messages', icon: '💬' },
    { name: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="dock-container">
      <div className="dock">
        {dockItems.map((item, index) => {
          // Calculate scale based on distance from hovered item
          let scale = 1;
          if (hoveredIndex !== null) {
            const distance = Math.abs(hoveredIndex - index);
            if (distance === 0) scale = 1.5; // Hovered item
            else if (distance === 1) scale = 1.2; // Adjacent items
            else if (distance === 2) scale = 1.1; // Items two positions away
          }

          return (
            <div 
              key={index}
              className="dock-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="dock-icon-wrapper"
                style={{
                  transform: `scale(${scale})`,
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <div className="dock-icon">
                  <span className="dock-icon-symbol">{item.icon}</span>
                </div>
                <div className="dock-reflection"></div>
              </div>
              <div className={`dock-label ${hoveredIndex === index ? 'visible' : ''}`}>
                {item.name}
              </div>
              <div className={`dock-dot ${hoveredIndex === index ? 'visible' : ''}`}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MacDock; 