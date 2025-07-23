import React from 'react';
import FormatDate from './FormatDate';

export default function Weatherinfo (props) {
    return (
        <div className="Weatherinfo">
    <h1>{props.data.city}</h1>
            <ul>
                <li><FormatDate date={props.data.date}/></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src={props.data.iconUrl} alt={props.data.description} />
                    <span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidy: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} mph</li>
                    </ul>
                </div>
            </div>
            </div>
            );
}