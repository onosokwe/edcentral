import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import Home from "../screens/homeScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";

const Stack = createStackNavigator();
const ConfirmStack = createStackNavigator();

export default function MainNavigation() {
  const {
    user: { verified },
  } = useSelector((state) => state.user);
  return (
    <React.Fragment>
      {verified === false ? (
        <ConfirmStack.Navigator screenOptions={{ headerShown: false }}>
          <ConfirmStack.Screen name="confirm" component={ConfirmEmailScreen} />
        </ConfirmStack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      )}
    </React.Fragment>
  );
}
