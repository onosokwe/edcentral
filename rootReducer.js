import { combineReducers } from "redux";
import userReducer from "./features/user/reducer";

export default combineReducers({
  user: userReducer,
});
