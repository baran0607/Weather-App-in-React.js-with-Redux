import React from 'react';
import WeatherApp from './components/WeatherApp';


const App = () => {

      const cardStyle = {
        backgroundColor: 'rgb(243 247 255)', 
        padding: '20px', 
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        maxWidth: '30%', 
        margin: '20px', 
      };

  return (
    <div style={cardStyle}  >
      <WeatherApp />
    </div>
  );
};

export default App;
