import React, { useState, useEffect } from 'react';
import './App.css';

// Data structure for State, City, and Landmark
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
  // State for selected values
  const [selectedState, setSelectedState] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);
  const [selectedLandmark, setSelectedLandmark] = useState(0);

  // Get the selected state, city, and landmark objects
  const stateData = data.states[selectedState];
  const cityData = stateData.cities[selectedCity];
  const landmarkData = cityData.landmarks[selectedLandmark];

  // Handle State change
  const handleStateChange = (e) => {
    const stateIndex = parseInt(e.target.value);
    setSelectedState(stateIndex);
    setSelectedCity(0); // Reset city to first
    setSelectedLandmark(0); // Reset landmark to first
  };

  // Handle City change
  const handleCityChange = (e) => {
    const cityIndex = parseInt(e.target.value);
    setSelectedCity(cityIndex);
    setSelectedLandmark(0); // Reset landmark to first
  };

  // Handle Landmark change
  const handleLandmarkChange = (e) => {
    const landmarkIndex = parseInt(e.target.value);
    setSelectedLandmark(landmarkIndex);
  };

  return (
    <div className="app-container">
      <h1>📍 Dropdown Explorer</h1>
      <p className="subtitle">Select State → City → Landmark to explore</p>

      <div className="dropdown-container">
        {/* State Dropdown */}
        <div className="dropdown-group">
          <label htmlFor="state">Select State:</label>
          <select id="state" value={selectedState} onChange={handleStateChange}>
            {data.states.map((state, index) => (
              <option key={index} value={index}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {/* City Dropdown */}
        <div className="dropdown-group">
          <label htmlFor="city">Select City:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            {stateData.cities.map((city, index) => (
              <option key={index} value={index}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Landmark Dropdown */}
        <div className="dropdown-group">
          <label htmlFor="landmark">Select Landmark:</label>
          <select id="landmark" value={selectedLandmark} onChange={handleLandmarkChange}>
            {cityData.landmarks.map((landmark, index) => (
              <option key={index} value={index}>
                {landmark.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display Selected Information */}
      <div className="info-container">
        {/* State Info */}
        <div className="info-card">
          <h3>State</h3>
          <div id="state-name" className="info-name">{stateData.name}</div>
          <div id="state-description" className="info-description">{stateData.description}</div>
        </div>

        {/* City Info */}
        <div className="info-card">
          <h3>City</h3>
          <div id="city-name" className="info-name">{cityData.name}</div>
          <div id="city-description" className="info-description">{cityData.description}</div>
        </div>

        {/* Landmark Info */}
        <div className="info-card">
          <h3>Landmark</h3>
          <div id="landmark-name" className="info-name">{landmarkData.name}</div>
          <div id="landmark-description" className="info-description">{landmarkData.description}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
