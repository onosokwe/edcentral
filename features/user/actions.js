import firebase from "firebase";
import "firebase/firestore";

import { LOGIN_SUCCESS, USER_PENDING, USER_ERROR } from "./actionTypes";

export const userLoginSuccess = (payload) => {
	return {
		type: LOGIN_SUCCESS,
		payload,
	};
};

export const userPedding = () => ({
	type: USER_PENDING,
});

export const userError = (payload) => {
	return {
		type: USER_ERROR,
		payload,
	};
};

export const userLogin = async (dispatch, payload) => {
	try {
		dispatch(userPedding());

		const res = await firebase
			.auth()
			.signInWithEmailAndPassword(payload.email, payload.password);
		// const user = await firebase
		// 	.firestore()
		// 	.collection("users")
		// 	.doc(res.user.uid)
		// 	.get();

		// console.log({ res: user.data() });
		dispatch(userLoginSuccess({ email: payload.email, id: res.user.uid }));
	} catch (err) {
		console.log({ err });
		dispatch(userError(err));
	}
};
