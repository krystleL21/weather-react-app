import React from 'react';
import './index.css';
import './Weather.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Weather() {
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
            <h1>Jamaica</h1>
            <ul>
                <li>Monday 07:31</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="MOstly cloudy" />
                    <span className="temperature">80</span><span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidy: 86%</li>
                        <li>Wind: 2 mph</li>
                    </ul>
                </div>
            </div>
        
        </div>
    );
}