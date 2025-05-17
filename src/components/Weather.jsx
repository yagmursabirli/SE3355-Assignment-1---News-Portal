"use client";
import React, { useEffect, useState } from "react";
import "./weather.css";

function Weather() {
  const [weatherList, setWeatherList] = useState([]);

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => setWeatherList(data));
  }, []);

  return (
    <div className="weather-wrapper">
      <h3>5 Günlük Hava Durumu</h3>
      <div className="weather-days">
        {weatherList.map((day, index) => (
          <div key={index} className="weather-card">
            <div className="icon">{day.icon}</div>
            <div className="day">{day.day}</div>
            <div className="temp">{day.temp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
