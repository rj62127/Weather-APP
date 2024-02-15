import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import WeatherCard from "../components/WeatherCard";



const Details = () => {
  const router = useRouter();
  const { city } = router.query;
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("City:", city);
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=PUT_KEY`
        );

        // Convert temperature from Kelvin to Celsius
        const temperatureInCelsius = Math.round(response.data.main.temp - 273.15);
        
        // Update the temperature value in the response
        setWeatherData({
          ...response.data,
          main: {
            ...response.data.main,
            temp: temperatureInCelsius,
          },
        });
      } catch (err) {
        setError("Error fetching weather data");
        setWeatherData(null);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  if (!city) {
    return (
      <div>
        <h1>Invalid City</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Weather Details for {city}</h1>
      {error && <p>{error}</p>}

      {weatherData && (
        <WeatherCard
          city={city}
          temp={weatherData.main.temp}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
          description={weatherData.weather[0].description}
        />
      )}
    </div>
  );
};

export default Details;
