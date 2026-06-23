import axios from 'axios';

const weatherService = async (cityname) =>{
    const weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=10f3ae4d6a0e43d6ba3165013252907&q=${cityname}&aqi=yes`);
    return weatherData.data;
}

export default weatherService;    