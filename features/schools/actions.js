import { SCHOOLS_TYPE_SUCCESS } from "./actionTypes";

const schoolTypeSuccess = (payload) => ({
  type: SCHOOLS_TYPE_SUCCESS,
  payload,
});

export const schoolType = (dispatch, payload) => {
  dispatch(
    schoolTypeSuccess({
      name: payload.name,
      url: payload.url,
    })
  );
};
