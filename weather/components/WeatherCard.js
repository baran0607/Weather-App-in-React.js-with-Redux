// import React from 'react';

// const WeatherCard = ({ weatherData }) => {
//   if (!weatherData) return null;

//   const { name, main, weather } = weatherData;
//   const temperature = (main.temp - 273.15).toFixed(2);
//   const description = weather[0].description;
//   const humidity =main.humidity;

//   const divStyle = {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     marginTop: '20px',
//     width: '50%',
//   };

//   return (
//     <div style={divStyle}>  
//       <h2>{name}</h2>
//       <p>Temperature: <b><i>{temperature}°C</i></b></p>
//       <p>Weather: <b><i>{description}</i></b></p>
//       <p>Humidity: <b><i>{humidity}%</i></b></p>
//     </div>
//   );
// };

// export default WeatherCard;



import React from 'react';

// Weather icon map for OpenWeatherMap conditions
const getWeatherIcon = (condition) => {
  switch (condition) {
    case 'clear sky':
      return 'https://openweathermap.org/img/wn/01d.png';
    case 'few clouds':
      return 'https://openweathermap.org/img/wn/02d.png'; 
    case 'scattered clouds':
      return 'https://openweathermap.org/img/wn/03d.png'; 
    case 'broken clouds':
      return 'https://openweathermap.org/img/wn/04d.png'; 
    case 'shower rain':
      return 'https://openweathermap.org/img/wn/09d.png'; 
    case 'rain':
      return 'https://openweathermap.org/img/wn/10d.png'; 
    case 'thunderstorm':
      return 'https://openweathermap.org/img/wn/11d.png'; 
    case 'snow':
      return 'https://openweathermap.org/img/wn/13d.png'; 
    case 'mist':
      return 'https://openweathermap.org/img/wn/50d.png'; 
    default:
      return 'https://openweathermap.org/img/wn/01d.png'; 
  }
};

const getTemperatureIcon = (temp) => {
  if (temp <= 10) {
    return 'https://openweathermap.org/img/wn/13d.png';
  } else if (temp <= 20) {
    return 'https://openweathermap.org/img/wn/04d.png'; 
  } else {
    return 'https://openweathermap.org/img/wn/01d.png'; 
  }
};

// Humidity icon (you can choose any other icon or source for this)
const getHumidityIcon = () => {
  return 'https://openweathermap.org/img/wn/09d.png'; 
};

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;
  const temperature = (main.temp - 273.15).toFixed(2);
  const description = weather[0].description;
  const humidity = main.humidity;

  // Get the weather, temperature, and humidity icons
  const weatherIcon = getWeatherIcon(description);
  const tempIcon = getTemperatureIcon(main.temp);
  const humidityIcon = getHumidityIcon();

  const divStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    width: '50%',
  };

  return (
    <div style={divStyle}>
      <h2>{name}</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={tempIcon} alt="temperature" style={{ width: '30px', marginRight: '10px' }} />
        <p>Temperature: <b><i>{temperature}°C</i></b></p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={weatherIcon} alt="weather condition" style={{ width: '30px', marginRight: '10px' }} />
        <p>Weather: <b><i>{description}</i></b></p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={humidityIcon} alt="humidity" style={{ width: '30px', marginRight: '10px' }} />
        <p>Humidity: <b><i>{humidity}%</i></b></p>
      </div>
    </div>
  );
};

export default WeatherCard;
