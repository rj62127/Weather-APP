import React from 'react';

const WeatherCard = ({ city, temp, humidity, windSpeed, description }) => {
  return (
    <div>
      <h2>{city}</h2>
      <p>Temperature: {temp}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default WeatherCard;
