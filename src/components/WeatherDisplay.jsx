import React from "react";

const WeatherDisplay = ({temperature, conditions}) => {
  return (
    <>
        <p style={temperature < 20 ? {color: 'blue'} : {color: "red"}}><span>Current Temperature is {temperature} and Condition is {conditions}<span></p>
    </>
  )
}

export default WeatherDisplay;
