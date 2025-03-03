import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WeatherCard from './WeatherCard';
import { fetchWeatherRequest, resetError } from '../actions/weatherActions';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  // Select weather state from Redux store
  const { loading, weatherData, error } = useSelector((state) => state.weather);

  const handleSearch = () => {
    if (city) {
      // Reset the error before making a new request
      dispatch(resetError()); 
      dispatch(fetchWeatherRequest(city));
    }
    setCity('');
  };

  useEffect(() => {
    // Optionally fetch default weather for a city on load
    dispatch(fetchWeatherRequest('Puducherry'));
  }, [dispatch]);

  const inputStyle = {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px',
    fontSize: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button style={buttonStyle} onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* Show weather data only if no error */}
      {!error && weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;
