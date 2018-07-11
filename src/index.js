import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

// needed dependancies -- check
// applyMiddleware from redux -- check
// thunk from redux-thunk -- check
// logger from redux-logger  -- check
// rootReducer from ./reducers -- check (called reducer)

const middleware = applyMiddleware(thunk, logger())

const store = createStore(reducer, middleware );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);