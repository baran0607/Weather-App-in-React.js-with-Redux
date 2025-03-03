import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './weather/App';
import store from './weather/store/store';
import { Provider } from 'react-redux';


// const store = configureStore({
//   reducer: todoReducer,
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //this is for todolist
  // <Provider store={store}>
  //   <App />
  // </Provider>
  
  //this is for redux increment and drecrement
  // <App />

  //this is for displayuser
  // <Provider store={store}>
  //   <App />
  // </Provider>

  //this is for taskmanagement
  // <App />

  //this is for weather app
  <Provider store={store}>
    <App />
  </Provider>,
 
);




