import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { notificationReducer } from "./notificationReducer";

export default combineReducers({
  gameReducer,
  notificationReducer
});
