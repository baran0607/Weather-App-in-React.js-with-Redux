# Weather App in React.js with Redux

This is a weather forecasting web app built using React.js, Redux, Redux-Saga, and various services to fetch real-time weather data. The app allows users to search for weather details by city and displays current weather conditions along with additional information like temperature, humidity, and wind speed.

## Features
- Real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/api)
- Search weather information by city
- Displays temperature, humidity, wind speed, and other weather details
- Redux for state management
- Redux-Saga for side-effect management
- Responsive design

## Technologies Used
- **React.js**: JavaScript library for building the user interface.
- **Redux**: A state management tool for managing the app's global state.
- **Redux-Saga**: A middleware for handling side effects like API calls.
- **Axios**: HTTP client to make requests to the OpenWeatherMap API.
- **CSS**: For styling the components.

## How It Works

### Redux Actions & Reducers:
- Actions are dispatched when the user performs actions like searching for weather.
- Reducers handle the state changes and update the store accordingly.

### Redux-Saga:
- Sagas listen for specific actions (e.g., weather search request) and handle side effects, such as calling the OpenWeatherMap API and dispatching the results to the store.

### API Service:
- A service file contains the Axios configuration to fetch weather data from the OpenWeatherMap API.

### Components:
- React components handle the rendering of the UI, displaying weather information or loading indicators.

## Example Usage
1. Open the app in your browser.
2. Type a city name in the search bar and click the "Search" button.
3. The weather data for the city will be displayed, including temperature, humidity, and wind speed.

