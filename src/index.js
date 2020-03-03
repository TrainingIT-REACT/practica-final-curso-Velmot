import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import MainLayout from "./Application/components/Layout/MainLayout";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

library.add(fas);

console.log(store.getState());

ReactDOM.render(
  <main>
    <Provider store={store}>
      <MainLayout />
    </Provider>
  </main>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
