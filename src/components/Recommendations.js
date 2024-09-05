// src/components/Recommendations.js
import React, { useState } from 'react';

function Recommendations() {
  const [recommendations, setRecommendations] = useState('');

  const getRecommendations = async () => {
    // Simulate recommendations API call
    setRecommendations('Here are your scooter recommendations...');
    // Implement your actual fetch call here
  };

  return (
    <section id="recommendations">
      <h2>Get Scooter Recommendations</h2>
      <button id="getRecommendations" onClick={getRecommendations}>
        Get Recommendations
      </button>
      <div id="recommendationsResult">{recommendations}</div>
    </section>
  );
}

export default Recommendations;
