import {combineReducers} from "redux";
import ChangeTimeReducer from "./ChangeTimeReducer";

export default combineReducers({
  timeState: ChangeTimeReducer,
});
