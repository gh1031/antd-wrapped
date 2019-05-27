import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './reducer';

const middleware = [promiseMiddleware];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger'); // eslint-disable-line
  middleware.push(logger);
}

// console.log(reducer)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const enhancer = composeEnhancer(
  applyMiddleware(...middleware),
);

const store = createStore(reducer, enhancer);

export default store;
