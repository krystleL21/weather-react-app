import React, { useState } from 'react';
import './index.css';
import './Weather.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import Weatherinfo from './Weatherinfo.jsx';

export default function Weather(props) {
    
    const [weatherData, setweatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultcity);
  
function handleResponse(response) {
    console.log(response.data);
    setweatherData ({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt* 1000),
        description: response.data.weather[0].description,
        iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        wind: response.data.wind.speed,
        city: response.data.name,
    })
}

function Search(){
    const apiKey = "Bf54175800a55e59e6c4d6461deeef12";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    Search();
}
function handleCityChange(event) {
setCity(event.target.value);
}   
if (weatherData.ready) {
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
    <input 
    type="search" 
    placeholder="Enter a city" 
    className="form-control" 
    autoFocus="on"
    onChange={handleCityChange}
    />
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
<Weatherinfo data={weatherData}/>
            
        
        </div>
    );

} else {

    Search();
    return "Loading...";
}
}