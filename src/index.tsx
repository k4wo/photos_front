import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./index.css";
import "./variables.css";

import icons from "./components/icons";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducers from "./redux/reducers";

library.add(...icons);
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window as any)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
