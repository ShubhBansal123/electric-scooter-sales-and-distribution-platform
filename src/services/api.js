// src/services/api.js
export async function fetchScooterData() {
    const response = await fetch('https://api.example.com/scooters'); // Replace with your API endpoint
    const data = await response.json();
    return data;
  }
  