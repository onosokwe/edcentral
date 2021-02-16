import { combineReducers } from "redux";
import userReducer from "./features/user/reducer";
import schoolsReducer from "./features/schools/reducer";

export default combineReducers({
  user: userReducer,
  schools: schoolsReducer,
});
