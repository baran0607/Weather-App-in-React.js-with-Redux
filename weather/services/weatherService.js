import axios from 'axios';

// Fetch weather data from OpenWeather API
export const fetchWeatherFromAPI = (city) => {
  const API_KEY = '07717e81bf1410147227229f8a0a6daf';  
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => response.data)
    .catch(error => { throw error });
};
