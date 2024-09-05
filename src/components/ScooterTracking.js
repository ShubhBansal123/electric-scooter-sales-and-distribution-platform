// src/components/ScooterTracking.js
import React, { useState } from 'react';

function ScooterTracking() {
  const [scooterId, setScooterId] = useState('');
  const [trackingResult, setTrackingResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate tracking API call
    setTrackingResult(`Tracking result for Scooter ID: ${scooterId}`);
    // Implement your actual fetch call here
  };

  return (
    <section id="track">
      <h2>Track Your Scooter</h2>
      <form id="trackForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="scooterId"
          placeholder="Enter Scooter ID"
          value={scooterId}
          onChange={(e) => setScooterId(e.target.value)}
        />
        <button type="submit">Track</button>
      </form>
      <div id="trackingResult">{trackingResult}</div>
    </section>
  );
}

export default ScooterTracking;
