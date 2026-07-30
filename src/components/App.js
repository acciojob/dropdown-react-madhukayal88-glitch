import React, { useState, useEffect } from 'react';
import './App.css';

// Data structure
const data = {
  states: [
    {
      name: "Madhya Pradesh",
      description: "The heart of India, known for its rich cultural heritage and natural beauty.",
      cities: [
        {
          name: "Bhopal",
          description: "The City of Lakes, known for its beautiful lakes and historical monuments.",
          landmarks: [
            { name: "Upper Lake", description: "One of the oldest man-made lakes in India." },
            { name: "Sanchi Stupa", description: "A UNESCO World Heritage Site, a Buddhist monument." },
            { name: "Bhimbetka Caves", description: "Rock shelters with ancient cave paintings." }
          ]
        },
        {
          name: "Indore",
          description: "The commercial capital of Madhya Pradesh, known for its food and culture.",
          landmarks: [
            { name: "Rajwada Palace", description: "A historical palace with a blend of Maratha and Mughal architecture." },
            { name: "Lal Bagh Palace", description: "A magnificent palace with European architecture." },
            { name: "Kanch Mandir", description: "A Jain temple made entirely of glass." }
          ]
        },
        {
          name: "Gwalior",
          description: "A historic city known for its magnificent fort and rich musical heritage.",
          landmarks: [
            { name: "Gwalior Fort", description: "One of the most impressive forts in India." },
            { name: "Jai Vilas Palace", description: "A grand palace with a museum." },
            { name: "Tansen Tomb", description: "The tomb of the legendary musician Tansen." }
          ]
        }
      ]
    },
    {
      name: "Maharashtra",
      description: "The economic powerhouse of India, known for its vibrant culture and history.",
      cities: [
        {
          name: "Mumbai",
          description: "The financial capital of India, known for Bollywood and the Gateway of India.",
          landmarks: [
            { name: "Gateway of India", description: "An iconic monument built during British rule." },
            { name: "Marine Drive", description: "A picturesque promenade along the Arabian Sea." },
            { name: "Elephanta Caves", description: "Ancient cave temples dedicated to Lord Shiva." }
          ]
        },
        {
          name: "Pune",
          description: "The cultural capital of Maharashtra, known for its educational institutions.",
          landmarks: [
            { name: "Aga Khan Palace", description: "A beautiful palace with historical significance." },
            { name: "Shaniwar Wada", description: "A historical fortification in the heart of Pune." },
            { name: "Sinhagad Fort", description: "A hill fortress with breathtaking views." }
          ]
        },
        {
          name: "Nagpur",
          description: "The orange city, known for its oranges and the Deekshabhoomi.",
          landmarks: [
            { name: "Deekshabhoomi", description: "A sacred Buddhist monument and pilgrimage site." },
            { name: "Ramtek Fort", description: "A historical fort with religious significance." },
            { name: "Ambazari Lake", description: "A serene lake with a beautiful garden." }
          ]
        }
      ]
    },
    {
      name: "Rajasthan",
      description: "The land of kings, known for its royal heritage and desert landscapes.",
      cities: [
        {
          name: "Jaipur",
          description: "The Pink City, known for its beautiful palaces and forts.",
          landmarks: [
            { name: "Hawa Mahal", description: "The Palace of Winds, a beautiful pink sandstone structure." },
            { name: "Amber Fort", description: "A magnificent fort with stunning architecture." },
            { name: "City Palace", description: "A beautiful palace complex in the heart of Jaipur." }
          ]
        },
        {
          name: "Udaipur",
          description: "The City of Lakes, known for its romantic atmosphere and beautiful lakes.",
          landmarks: [
            { name: "Lake Pichola", description: "A beautiful artificial lake with islands." },
            { name: "City Palace Udaipur", description: "A magnificent palace overlooking Lake Pichola." },
            { name: "Jag Mandir", description: "A beautiful palace on an island in Lake Pichola." }
          ]
        },
        {
          name: "Jodhpur",
          description: "The Blue City, known for its blue-painted houses and the Mehrangarh Fort.",
          landmarks: [
            { name: "Mehrangarh Fort", description: "One of the largest forts in India." },
            { name: "Umaid Bhawan Palace", description: "A beautiful palace turned into a hotel." },
            { name: "Jaswant Thada", description: "A beautiful marble cenotaph built in memory of a king." }
          ]
        }
      ]
    }
  ]
};

function App() {
  // State for selected indices
  const [selectedStateIdx, setSelectedStateIdx] = useState(0);
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const [selectedLandmarkIdx, setSelectedLandmarkIdx] = useState(0);

  // Get current selections
  const currentState = data.states[selectedStateIdx];
  const currentCity = currentState.cities[selectedCityIdx];
  const currentLandmark = currentCity.landmarks[selectedLandmarkIdx];

  // Handle State change
  const handleStateChange = (e) => {
    const idx = parseInt(e.target.value);
    setSelectedStateIdx(idx);
    setSelectedCityIdx(0);
    setSelectedLandmarkIdx(0);
  };

  // Handle City change
  const handleCityChange = (e) => {
    const idx = parseInt(e.target.value);
    setSelectedCityIdx(idx);
    setSelectedLandmarkIdx(0);
  };

  // Handle Landmark change
  const handleLandmarkChange = (e) => {
    const idx = parseInt(e.target.value);
    setSelectedLandmarkIdx(idx);
  };

  return (
    <div className="app-container">
      <h1>📍 Dropdown Explorer</h1>
      <p className="subtitle">Select a State → City → Landmark to explore</p>

      {/* Dropdowns with required IDs */}
      <div className="dropdown-container">
        <div className="dropdown-group">
          <label htmlFor="state">State:</label>
          <select id="state" value={selectedStateIdx} onChange={handleStateChange}>
            {data.states.map((state, index) => (
              <option key={index} value={index}>{state.name}</option>
            ))}
          </select>
        </div>

        <div className="dropdown-group">
          <label htmlFor="city">City:</label>
          <select id="city" value={selectedCityIdx} onChange={handleCityChange}>
            {currentState.cities.map((city, index) => (
              <option key={index} value={index}>{city.name}</option>
            ))}
          </select>
        </div>

        <div className="dropdown-group">
          <label htmlFor="landmark">Landmark:</label>
          <select id="landmark" value={selectedLandmarkIdx} onChange={handleLandmarkChange}>
            {currentCity.landmarks.map((landmark, index) => (
              <option key={index} value={index}>{landmark.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Information Display with required IDs */}
      <div className="info-container">
        <div className="info-card state-card">
          <h3>🏛️ State</h3>
          <div id="state-name">{currentState.name}</div>
          <div id="state-description">{currentState.description}</div>
        </div>

        <div className="info-card city-card">
          <h3>🏙️ City</h3>
          <div id="city-name">{currentCity.name}</div>
          <div id="city-description">{currentCity.description}</div>
        </div>

        <div className="info-card landmark-card">
          <h3>🗺️ Landmark</h3>
          <div id="landmark-name">{currentLandmark.name}</div>
          <div id="landmark-description">{currentLandmark.description}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
