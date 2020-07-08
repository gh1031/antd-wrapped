import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const middleware = [];

if (__DEV__) {
  const { logger } = require('redux-logger'); // eslint-disable-line
  middleware.push(logger);
}

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const enhancer = composeEnhancer(
  applyMiddleware(...middleware),
);

const store = createStore(reducers, enhancer);

export default store;
