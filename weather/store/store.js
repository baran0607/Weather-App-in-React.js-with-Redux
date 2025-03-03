import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers/rootReducer';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware) 
);

sagaMiddleware.run(rootSaga);  

export default store;
