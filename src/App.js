import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './pages/About';
import ScooterTracking from './components/ScooterTracking';
import CustomerManagement from './components/CustomerManagement';
import Recommendations from './components/Recommendations';
import './App.css'; // Import your CSS file
import Taskbar from './components/Taskbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/TaskBar" element={<Taskbar/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
