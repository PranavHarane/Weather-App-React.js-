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
    <div id="background">
      {errorMess && <Error error={errorMess}/>}
      <div id="weather-card">
        <InputBox function={getdata}/>
        <WeatherInfo Data={data}/>
      </div>
    </div>
  </div>
}

export default App;