import { combineReducers } from "redux";
import isLoginReducer from "./isLogin";
import counterReducer from "./counter";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});

export default allReducers;
