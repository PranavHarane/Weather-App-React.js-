import React from "react";
import axios from "axios";

const WeatherInfo = (props) => {

    return <>
        <p className="text-[22px] font-semibold md:text-[30px]">{props.Data?.location?.name},{props.Data?.location?.country}</p>
        <p className="md:text-[20px]">{props.Data?.current?.condition.text}</p>
        <img className="max-h-[100%] w-[90px] self-center-safe" id="weather-image" src={props.Data?.current?.condition.icon} alt="Weather icon" />            
        <div className="flex justify-center items-center text-[55px] font-semibold "><p className="temperature">{props.Data?.current?.temp_c}&deg;C</p></div>
        <div className="flex justify-self-center justify-between text-[14px] mt-[10px]" id="weather-info">
            <div className="text-semibold text-[18px] md:text-[22px]">Humidity<br></br><span className="text-[20px] font-bold text-orange-400">{props.Data?.current?.humidity}</span></div>
            <div className="text-semibold text-[18px] md:text-[22px]">Air Quality(o3)<br></br><span className="text-[20px] font-bold text-orange-400">{props.Data?.current?.air_quality.o3}</span></div>
            <div className="text-semibold text-[18px] md:text-[22px]">UV<br></br><span className="text-[20px] font-bold text-orange-400">{props.Data?.current?.uv}</span></div>
        </div>
        </>
}

export default WeatherInfo;