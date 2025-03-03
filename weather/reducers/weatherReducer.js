import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, RESET_ERROR } from "../actions/weatherActions";

const initialState = {
  loading: false,
  weatherData: null,
  error: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return { ...state, loading: true };
    case FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, weatherData: action.payload, error: null };
    case FETCH_WEATHER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case RESET_ERROR: 
      return { ...state, error: null };
    default:
      return state;
  }
};

export default weatherReducer;
