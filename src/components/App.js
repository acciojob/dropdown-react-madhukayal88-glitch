import React, { useState } from 'react';
import '../styles/App.css'; // Adjust path if necessary

// Use the exact array data provided in your assignment template
const statesData = [
  {
    name: "Madhya Pradesh",
    description: "The heart of incredible India, known for its rich history and wildlife.",
    cities: [
      {
        name: "Bhopal",
        description: "The City of Lakes, known for its natural and artificial lakes.",
        landmarks: [
          { name: "Upper Lake", description: "The oldest man-made lake in India." },
          { name: "Van Vihar", description: "A national park operating as an open zoo." }
        ]
      },
      {
        name: "Indore",
        description: "The cleanest city in India, famous for its street food culture.",
        landmarks: [
          { name: "Rajwada Palace", description: "A historical palace built by the Holkars." },
          { name: "Khajrana Temple", description: "A famous Ganesh temple with deep religious significance." }
        ]
      }
    ]
  },
  {
    name: "Maharashtra",
    description: "A major commercial and cultural hub, home to Bollywood.",
    cities: [
      {
        name: "Mumbai",
        description: "The city of dreams and the financial capital of India.",
        landmarks: [
          { name: "Gateway of India", description: "An iconic arch monument built during the 20th century." },
          { name: "Marine Drive", description: "A 3km long promenade along the Netaji Subhash Chandra Bose Road." }
        ]
      }
    ]
  }
];

const App = () => {
  // Track indexes to ensure perfect syncing and default selection (0)
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  // Derived current records
  const currentState = statesData[stateIndex] || { name: '', description: '', cities: [] };
  const currentCity = currentState.cities[cityIndex] || { name: '', description: '', landmarks: [] };
  const currentLandmark = currentCity.landmarks[landmarkIndex] || { name: '', description: '' };

  // Event Handlers
  const handleStateChange = (e) => {
    setStateIndex(Number(e.target.value));
    setCityIndex(0); // Reset city to first item when state changes
    setLandmarkIndex(0); // Reset landmark to first item when state changes
  };

  const handleCityChange = (e) => {
    setCityIndex(Number(e.target.value));
    setLandmarkIndex(0); // Reset landmark to first item when city changes
  };

  const handleLandmarkChange = (e) => {
    setLandmarkIndex(Number(e.target.value));
  };

  return (
    <div id="main">
      <h2>Location Selector</h2>

      {/* Dropdown Section */}
      <div className="dropdowns">
        <label htmlFor="state">State: </label>
        <select id="state" value={stateIndex} onChange={handleStateChange}>
          {statesData.map((state, index) => (
            <option key={index} value={index}>
              {state.name}
            </option>
          ))}
        </select>

        <label htmlFor="city">City: </label>
        <select id="city" value={cityIndex} onChange={handleCityChange}>
          {currentState.cities.map((city, index) => (
            <option key={index} value={index}>
              {city.name}
            </option>
          ))}
        </select>

        <label htmlFor="landmark">Landmark: </label>
        <select id="landmark" value={landmarkIndex} onChange={handleLandmarkChange}>
          {currentCity.landmarks.map((landmark, index) => (
            <option key={index} value={index}>
              {landmark.name}
            </option>
          ))}
        </select>
      </div>

      <hr />

      {/* Info Render Cards */}
      <div className="details-container">
        {/* State Information */}
        <div id="state-name">{currentState.name}</div>
        <div id="state-description">{currentState.description}</div>

        {/* City Information */}
        <div id="city-name">{currentCity.name}</div>
        <div id="city-description">{currentCity.description}</div>

        {/* Landmark Information */}
        <div id="landmark-name">{currentLandmark.name}</div>
        <div id="landmark-description">{currentLandmark.description}</div>
      </div>
    </div>
  );
};

export default App;
