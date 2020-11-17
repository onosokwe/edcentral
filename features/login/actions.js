import {
	USER_LOGIN_SUCCESS,
	USER_LOGIN_PENDDING,
	USER_LOGIN_ERROR,
} from "./actionTypes";

export const userLoginSuccess = (payload) => {
	return {
		type: USER_LOGIN_SUCCESS,
		payload,
	};
};

export const userLoginPedding = () => ({
	type: USER_LOGIN_PENDDING,
});

export const userLoginError = (payload) => {
	return {
		type: USER_LOGIN_ERROR,
		payload,
	};
};

export const userLogin = async (dispatch, payload) => {
	try {
		dispatch(userLoginPedding());
		const response = await fetch("https://reqres.in/api/login", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(payload),
		});
		const status = response.status;
		if (status === 401) {
			dispatch(userLoginError("username or password incorrect"));
		} else if (status === 500) {
			const data = await response.json();
			dispatch(userLoginError(data.message));
		} else {
			const data = await response.json();
			dispatch(userLoginSuccess(data));
		}
	} catch (err) {
		dispatch(userLoginError(err));
	}
};
