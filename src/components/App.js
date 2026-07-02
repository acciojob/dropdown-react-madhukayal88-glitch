import React, { useState } from "react";
import Card from "./Card";

const list = [
  {
    name: "Madhya Pradesh",
    description: "State Description",
    cities: [
      {
        name: "Bhopal",
        description: "City Description",
        landmarks: [
          {
            name: "Upper Lake",
            description: "Landmark Description",
          },
          {
            name: "Van Vihar",
            description: "Zoo",
          },
        ],
      },
    ],
  },
];

function App() {
  const [stateIndex, setStateIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const [landmarkIndex, setLandmarkIndex] = useState(0);

  const selectedState = list[stateIndex];
  const selectedCity = selectedState.cities[cityIndex];
  const selectedLandmark = selectedCity.landmarks[landmarkIndex];

  return (
    <div>
      <select
        id="state"
        value={stateIndex}
        onChange={(e) => {
          setStateIndex(Number(e.target.value));
          setCityIndex(0);
          setLandmarkIndex(0);
        }}
      >
        {list.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        id="city"
        value={cityIndex}
        onChange={(e) => {
          setCityIndex(Number(e.target.value));
          setLandmarkIndex(0);
        }}
      >
        {selectedState.cities.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        id="landmark"
        value={landmarkIndex}
        onChange={(e) => setLandmarkIndex(Number(e.target.value))}
      >
        {selectedCity.landmarks.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <Card
        state={selectedState}
        city={selectedCity}
        landmark={selectedLandmark}
      />
    </div>
  );
}

export default App;
