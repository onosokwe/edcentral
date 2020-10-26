import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login/index";

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
