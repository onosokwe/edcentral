/* eslint-disable indent */
import {
  USER_PENDING,
  LOGIN_SUCCESS,
  USER_ERROR,
  SIGN_UP_SUCCESS,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
  isLoggedin: false,
  user: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedin: true,
        user: action.payload,
        error: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedin: true,
        user: action.payload,
        error: null,
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default loginReducer;
