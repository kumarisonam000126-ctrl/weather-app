import { useEffect, useState } from "react";
import "./weather.css";

function Weather() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);

  const API_KEY = "6d1cba93d36500eecd4572483ab3961b";

  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-card">

        <h1>Weather App</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city..."
            onChange={(e) => setCity(e.target.value)}
          />

          <button onClick={getWeather}>Search</button>
        </div>

        {weather && weather.main && (
          <div className="weather-info">

            <h2>{weather.name}</h2>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />

            <h3>{weather.main.temp}°C</h3>

            <p>{weather.weather[0].main}</p>

            <div className="details">

              <div>
                <span>Humidity</span>
                <h4>{weather.main.humidity}%</h4>
              </div>

              <div>
                <span>Wind</span>
                <h4>{weather.wind.speed} km/h</h4>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Weather;