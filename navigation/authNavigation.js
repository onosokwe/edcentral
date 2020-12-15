import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/loginScreen";
import Signup from "../screens/signupScreen";
import ForgotPassword from "../screens/forgotPasswordScreen";

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
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
