import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GetUser from "./getUser";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store";
import "toastr/build/toastr.min.css";
import "toastr/build/toastr.min.js";

ReactDOM.render(
  <Provider store={store}>
    <GetUser />
  </Provider>,

  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
