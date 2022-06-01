import axios from "axios";
import React, { useContext, useState } from "react";
import WeatherContext from "../contexts/WeatherContext";

const Weather = () => {
  const { weather, setWeather } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const getWeather = (e) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    if (e.key === "Enter") {
      axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      ).then((res) => setWeather(res.data));
      setCity("");
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Please enter a city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weather.main === "undefined" ? (
        <div className="weather-data">
          <p>Welcome to weather app! Please enter a city</p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city"> {weather.name} </p>
          <p className="temp"> {Math.round(weather.main.temp)}°C </p>
          <p className="weather"> {weather.weather[0].main} </p>
        </div>
      )}
      {weather.cod === "404" ? <p>City not found.</p> : <></>}
    </div>
  );
};

export default Weather;
