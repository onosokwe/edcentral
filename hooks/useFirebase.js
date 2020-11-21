import React from "react";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const useFirebase = (config) => {
	React.useEffect(() => {
		if (!firebase.apps.length) {
			firebase.initializeApp(config);
		}
	}, [config]);
};

export default useFirebase;
