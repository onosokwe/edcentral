import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import Navigation from "./navigation/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default function App() {
	let [fonts] = useFonts({
		regular: require("./assets/fonts/Rubik-Regular.ttf"),
		medium: require("./assets/fonts/Rubik-Medium.ttf"),
		semiBold: require("./assets/fonts/Rubik-SemiBold.ttf"),
	});
	if (!fonts) return <AppLoading />;
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
		</Provider>
	);
}
