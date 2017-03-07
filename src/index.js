import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import './index.css';
import redditApp from './reducers/index.js'
import promise from 'redux-promise';

let store = createStore(redditApp, applyMiddleware(promise))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
