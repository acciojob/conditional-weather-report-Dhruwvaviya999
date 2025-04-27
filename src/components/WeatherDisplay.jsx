import React from "react";

const WeatherDisplay = ({temperature, conditions}) => {
  return (
    <>
        <p style={temperature < 20 ? {color: 'blue'} : {color: "red"}}>Current Temperature is {temperature} and Condition is {conditions}</p>
    </>
  )
}

export default WeatherDisplay;
