import React, { useEffect, useState } from 'react';
import InputBox from './components/InputBox';
import WeatherInfo from './components/WeatherInfo';
import weatherService from './service/weatherService'
import {toast , ToastContainer , Bounce} from 'react-toastify'

const App = () => {
  
  const [data , setData] = useState({});
  
  const getdata = async (cityname) => {
    try{
      const weatherData = await weatherService(cityname);
      setData(weatherData);
      }catch(error){
        toast.error("Network Error!")
      }
    }

    useEffect(() => {
      getdata("Mumbai");
    }, []);

  return <div>
    <div className="bg-[url('/BackgroundImage.jpg')] bg-cover h-[100vh] flex justify-center items-center">
      <div className="h-[56vh] w-[300px] sm:w-[400px] md:h-[500px] lg:w-[400px] text-center flex flex-col justify-between rounded-[20px] backdrop-blur-sm shadow-2xl p-[30px] bg-[rgba(255_255_255_0.5)]">
        <InputBox function={getdata}/>
        <WeatherInfo Data={data}/>
      </div>
    </div>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  </div>
}

export default App;