import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'; // bring in redux
import { Provider } from 'react-redux'; // this allows the store to be provided to the App
import rootReducer from './reducers'; // bring in the reducer to affect the store
import App from './components/App';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);