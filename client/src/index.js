import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import 'materialize-css/dist/css/materialize.min.css';

import App from "./components/App";
import reducers from './reducers';
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
