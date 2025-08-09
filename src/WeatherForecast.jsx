import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {

  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  
useEffect(() => {
    setLoaded(false);
  
    const apiKey = "b68t905a51397a01bf1fcdf4ao4dde24";
    const longitude = props.coordinates.longitude;
    const latitude = props.coordinates.latitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    
axios.get(apiUrl).then(handleResponse).catch((error) => {
      console.error("Forecast API error:", error);
    });
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (!loaded) {
    return null;
  }
  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast && forecast.map((dailyForecast, index) => {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}