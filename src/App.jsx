import React, { useEffect, useState } from 'react';
import InputBox from './components/InputBox';
import Error from './components/Error';
import WeatherInfo from './components/WeatherInfo';
import weatherService from './assets/weatherService'

const App = () => {
  
  const [data , setData] = useState({});
  
  let [errorMess , setErrorMess] = useState("");

  const getdata = async (cityname) => {
    try{
      const weatherData = await weatherService(cityname);
      setData(weatherData);
    }catch(error){
      if(error.response){
        setErrorMess(error.response.data.error.message);
      }else{
        setErrorMess("Network Error");
      }
    }
    }

    useEffect(() => {
      getdata("Mumbai");
    }, []);

  return <div>
    <div className="bg-[url('/public/BackgroundImage.jpg')] bg-cover h-[100vh] flex justify-center items-center">
      {errorMess && <Error error={errorMess}/>}
      <div id="weather-card" className="h-[56vh] w-[300px] sm:w-[400px] md:h-[500px] lg:w-[400px] text-center flex flex-col justify-between rounded-[20px] backdrop-blur-sm shadow-2xl p-[30px] bg-[rgba(255_255_255_0.5)]">
        <InputBox function={getdata}/>
        <WeatherInfo Data={data}/>
      </div>
    </div>
  </div>
}

export default App;