import {
	USER_LOGIN_SUCCESS,
	USER_LOGIN_PENDDING,
	USER_LOGIN_ERROR,
} from "./actionTypes";

const initialState = {
	error: "",
	fetching: false,
	user: {},
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
	case USER_LOGIN_PENDDING:
		return {
			...state,
			fetching: true,
		};
	case USER_LOGIN_SUCCESS:
		return {
			...state,
			fetching: false,
			user: action.payload,
			error: "",
		};
	case USER_LOGIN_ERROR:
		return {
			...state,
			fetching: false,
			error: action.payload,
		};
	default:
		return state;
	}
};

export default loginReducer;
