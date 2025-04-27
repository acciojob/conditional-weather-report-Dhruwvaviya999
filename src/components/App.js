import WeatherDisplay from './WeatherDisplay.jsx'

const weathers = [
  { id: 1, temperature: 30, conditions: "Sunny" },
  { id: 2, temperature: 25, conditions: "Cloudy" },
  { id: 3, temperature: 20, conditions: "Rainy" },
  { id: 4, temperature: 15, conditions: "Windy" },
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
