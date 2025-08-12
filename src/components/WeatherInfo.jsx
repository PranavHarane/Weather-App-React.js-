import React from "react";
import axios from "axios";

const WeatherInfo = (props) => {

    return <>
        <p id="location">{props.Data?.location?.name},{props.Data?.location?.country}</p>
        <p>{props.Data?.current?.condition.text}</p>
        <img id="weather-image" src={props.Data?.current?.condition.icon} alt="Weather icon" />            
        <div className="temperature"><p className="temperature">{props.Data?.current?.temp_c}&deg;C</p></div>
        <div id="weather-info">
            <div>Humidity<br></br><span>{props.Data?.current?.humidity}</span></div>
            <div>Air Quality(o3)<br></br><span>{props.Data?.current?.air_quality.o3}</span></div>
            <div>UV<br></br><span>{props.Data?.current?.uv}</span></div>
        </div>
        </>
}

export default WeatherInfo;