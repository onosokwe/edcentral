/* eslint-disable indent */
import {
  SCHOOLS_ERROR,
  SCHOOLS_PENDING,
  SCHOOLS_TYPE_SUCCESS,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
  schools: {},
  schoolType: {},
};

const schoolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCHOOLS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case SCHOOLS_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        schoolType: action.payload,
        error: null,
      };
    case SCHOOLS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default schoolsReducer;
