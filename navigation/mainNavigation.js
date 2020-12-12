import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/homeScreen";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </React.Fragment>
  );
}
