import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_WEATHER_REQUEST, fetchWeatherSuccess, fetchWeatherFailure } from '../actions/weatherActions';
import { fetchWeatherFromAPI } from '../services/weatherService';


function* fetchWeatherSaga(action) {
  try {
    const data = yield call(fetchWeatherFromAPI, action.payload);  
    yield put(fetchWeatherSuccess(data));  
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* watchFetchWeather() {
  yield takeEvery(FETCH_WEATHER_REQUEST, fetchWeatherSaga);
}

export default watchFetchWeather;
