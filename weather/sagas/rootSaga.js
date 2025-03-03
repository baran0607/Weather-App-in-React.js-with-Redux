import { all } from 'redux-saga/effects';
import watchFetchWeather from './weatherSaga';


// Combine all sagas
export default function* rootSaga() {
  yield all([
    watchFetchWeather(),  
  ]);
}
