import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Universities from "../screens/Universities";

const UniStack = createStackNavigator();

const SchoolNav = () => (
  <UniStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <UniStack.Screen name="universities" component={Universities} />
  </UniStack.Navigator>
);

export default SchoolNav;
