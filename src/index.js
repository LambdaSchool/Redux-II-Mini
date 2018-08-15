import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, thunk)
);
console.log("Initial State", store.getState());
console.log("store", store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
