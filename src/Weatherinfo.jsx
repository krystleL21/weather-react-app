import React from 'react';
import FormatDate from './FormatDate';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from "./WeatherTemperature.jsx";

export default function Weatherinfo (props) {
    return (
        <div className="Weatherinfo">
    <h1>{props.data.city}</h1>
            <ul>
                <li><FormatDate date={props.data.date}/></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                    <WeatherIcon code={props.data.icon} size={64}/>
                    </div>
<WeatherTemperature celsius={props.data.temperature} />
                </div>
                <div className="col-6 info">
                    <ul>
                        <li>Humidy: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} mph</li>
                    </ul>
                </div>
            </div>
            </div>
            );
}