import { useState } from "react";
import axios from "axios";
import Link from "next/link";


const Search = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const searchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=PUT_KEY`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError("Invalid location or API error");
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Search Weather</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={searchWeather}>Search</button>

      {error && <p>{error}</p>}

      {weatherData && (
        <Link href={`/details?city=${encodeURIComponent(city)}`}>
          View Details
        </Link>
      )}
    </div>
  );
};

export default Search;
