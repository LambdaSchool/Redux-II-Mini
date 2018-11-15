import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './reducers';
// needed dependancies
// applyMiddleware from redux x
// thunk from redux-thunk x
// logger from redux-logger x
// rootReducer from ./reducers x

const store = createStore(
  rootReducer, applyMiddleware
  /* applyMiddleware goes here */ 
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
