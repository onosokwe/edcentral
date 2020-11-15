import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import Signup from "../screens/signup";

const Stack = createStackNavigator();

export default function AuthNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="login" component={Login} />
			<Stack.Screen name="signup" component={Signup} />
		</Stack.Navigator>
	);
}
