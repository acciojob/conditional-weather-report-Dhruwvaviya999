import WeatherDisplay from './WeatherDisplay.jsx';
import React from "react";

const weathers = [
  { id: 1, temperature: 30, conditions: "Sunny" },
  { id: 5, temperature: 10, conditions: "Snowy" }
];

function App() {
  return (
    <>
      {
        weathers.map((data, index) => {
          return <WeatherDisplay key={data.id} temperature={data.temperature} conditions={data.conditions} />
        })
      }
    </>
  )
}

export default App
