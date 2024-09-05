// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Import the CSS for Sidebar

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>BikeSetu</h2>
      <Link to="/track">Track Scooter</Link>
      <Link to="/crm">Customer Management</Link>
      <Link to="/recommendations">Recommendations</Link>
    </aside>
  );
}

export default Sidebar;
