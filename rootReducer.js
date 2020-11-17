import { combineReducers } from "redux";
import loginReducer from "./features/login/reducer";

export default combineReducers({
	login: loginReducer,
});
