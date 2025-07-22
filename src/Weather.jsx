import React, { useState } from 'react';
import './index.css';
import './Weather.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

export default function Weather() {
    
    const [weatherData, setweatherData] = useState({ready:false})

  
function handleResponse(response) {
    console.log(response.data);
    setweatherData ({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: "Tuesday 02:15",
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        wind: response.data.wind.speed,
        city: response.data.name,
    })
    
    setReady(true);
}
if (weatherData.ready) {
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
    <input 
    type="search" 
    placeholder="Enter a city" 
    className="form-control" autoFocus="on"/>
    </div>
<div 
className="col-3">
<input 
type="Submit"  
value="Search" 
className="btn btn-primary w-100"/>
</div>
</div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>{weatherData.date}</li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={weatherData.iconUrl} alt={weatherData.description} />
                    <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidy: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} mph</li>
                    </ul>
                </div>
            </div>
        
        </div>
    );

} else {
    let city = "Jamaica";
    const apiKey = "Bf54175800a55e59e6c4d6461deeef12";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return ("Loading...");
}
}