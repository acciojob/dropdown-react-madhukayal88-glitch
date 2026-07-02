import React, { useState } from "react";
import "./App.css";



function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  const selectedState = list[stateIndex];
  const selectedCity = selectedState.cities[cityIndex];
  const selectedLandmark = selectedCity.landmarks[landmarkIndex];

  const handleStateChange = (e) => {
    const index = Number(e.target.value);
    setStateIndex(index);
    setCityIndex(0);
    setLandmarkIndex(0);
  };

  const handleCityChange = (e) => {
    const index = Number(e.target.value);
    setCityIndex(index);
    setLandmarkIndex(0);
  };

  const handleLandmarkChange = (e) => {
    setLandmarkIndex(Number(e.target.value));
  };

  return (
    <div>
      {/* State Dropdown */}
      <select
        id="state"
        value={stateIndex}
        onChange={handleStateChange}
      >
        {list.map((state, index) => (
          <option key={index} value={index}>
            {state.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <select
        id="city"
        value={cityIndex}
        onChange={handleCityChange}
      >
        {selectedState.cities.map((city, index) => (
          <option key={index} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      {/* Landmark Dropdown */}
      <select
        id="landmark"
        value={landmarkIndex}
        onChange={handleLandmarkChange}
      >
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>
            {landmark.name}
          </option>
        ))}
      </select>

      <hr />

      <div id="state-name">{selectedState.name}</div>
      <div id="state-description">{selectedState.description}</div>

      <div id="city-name">{selectedCity.name}</div>
      <div id="city-description">{selectedCity.description}</div>

      <div id="landmark-name">{selectedLandmark.name}</div>
      <div id="landmark-description">
        {selectedLandmark.description}
      </div>
    </div>
  );
}

export default App;
