
import FormatDate from './FormatDate.jsx';
import WeatherIcon from './WeatherIcon.jsx';
import WeatherTemperature from "./WeatherTemperature.jsx";


function Weatherinfo (props) {
    return (
        <div className="Weatherinfo">
        <h1>{props.data.city}</h1>
            <ul>
                <li>
                <FormatDate date={props.data.date}/>
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                        <div>
                    <WeatherIcon code={props.data.icon} size={50} />
                    </div>
                  
                    <div className="WeatherTemperature-icon">
                    <WeatherTemperature celsius={props.data.temperature} />
                    </div>
                </div>
                  </div>
                <div className="col-6 info">
                    <ul>
                        <li>Humidy: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
            );
}

export default Weatherinfo