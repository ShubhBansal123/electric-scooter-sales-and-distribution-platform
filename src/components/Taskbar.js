import React from 'react';
import './Taskbar.css'; // Import the CSS for Taskbar

function Taskbar() {
  return (
    <div className="Taskbar">
      {/* <div className="left-buttons">
        <button>Home</button>
        <button>Profile</button>
        <button>Settings</button>
      </div> */}
      <h1>Welcome to BikeSetu</h1>
      <div className="right-buttons">
        <button>Contact</button>
        <button>About Us</button>
      </div>
    </div>
  );
}

export default Taskbar;
