import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // bring in redux
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; // this allows the store to be provided to the App
import rootReducer from './reducers'; // bring in the reducer to affect the store
import App from './components/App';

render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <App />
  </Provider>, 
  document.getElementById('root')
);