import { createStore, combineReducers } from "redux";
import player from "./Application/components/Player/reducers";
import login from "./Application/components/Login/reducers";

export default createStore(
  combineReducers(
    {
      player,
      login
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
