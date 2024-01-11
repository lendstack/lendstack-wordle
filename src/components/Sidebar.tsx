// Sidebar.tsx

import React from 'react';
import '../App.css'; // Assuming your CSS file contains necessary styles

interface SidebarProps {
  attempts: number;
}

const Sidebar: React.FC<SidebarProps> = ({ attempts }) => {
  // Determine the class for attempts based on the number remaining
  const attemptsClass = attempts > 4 ? 'high' : attempts > 2 ? 'medium' : 'low';

  return (
    <div className="sidebar">
      <p className={`attempts ${attemptsClass}`}>Attempts: {attempts}</p>
      <div className="key-color-guide">
        <div className="guide-item">
          <div className="color-box correct"></div>
          <span>Correct</span>
        </div>
        <div className="guide-item">
          <div className="color-box present"></div>
          <span>Present</span>
        </div>
        <div className="guide-item">
          <div className="color-box absent"></div>
          <span>Absent</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
