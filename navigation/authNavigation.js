import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import Login from "../screens/loginScreen";
import Signup from "../screens/signupScreen";
import ForgotPassword from "../screens/forgotPasswordScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  const {
    user: { verified },
  } = useSelector((state) => state.user);
  return (
    <React.Fragment>
      {verified === false ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="confirm" component={ConfirmEmailScreen} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      )}
    </React.Fragment>
  );
}
