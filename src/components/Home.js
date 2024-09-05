import React from 'react';
import './styles.css'; // Ensure you import the CSS
import Sidebar from './Sidebar';
import Taskbar from './Taskbar';
import Login from './login';

function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <Taskbar />
      <div className="main-content">
      <h1></h1>
      <Login />

      </div>
      
      <p></p>
    </div>
  );
}

export default Home;  
