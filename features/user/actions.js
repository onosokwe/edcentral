import firebase from "firebase";
import "firebase/firestore";

import {
	LOGIN_SUCCESS,
	USER_PENDING,
	USER_ERROR,
	SIGN_UP_SUCCESS,
} from "./actionTypes";

const loginSuccess = (payload) => ({
	type: LOGIN_SUCCESS,
	payload,
});

const signUpSuccess = (payload) => ({
	type: SIGN_UP_SUCCESS,
	payload,
});

const userPedding = () => ({
	type: USER_PENDING,
});

const userError = (payload) => ({
	type: USER_ERROR,
	payload,
});

export const signup = async (dispatch, payload) => {
	try {
		dispatch(userPedding());

		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(payload.email, payload.password);
		await dispatch(signUpSuccess({ email: payload.email, id: res.user.id }));
	} catch (err) {
		dispatch(userError(err));
	}
};

export const login = async (dispatch, payload) => {
	try {
		dispatch(userPedding());

		const res = await firebase
			.auth()
			.signInWithEmailAndPassword(payload.email, payload.password);
		dispatch(loginSuccess({ email: payload.email, id: res.user.uid }));
	} catch (err) {
		dispatch(userError(err));
	}
};
