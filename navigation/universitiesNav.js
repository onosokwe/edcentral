import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Universities from "../screens/Universities";
import Country from "../screens/Universities/country";
import Uni from "../screens/Universities/uni";

const UniStack = createStackNavigator();

const SchoolNav = () => (
  <UniStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <UniStack.Screen name="universities" component={Universities} />
    <UniStack.Screen name="country" component={Country} />
    <UniStack.Screen name="uni" component={Uni} />
  </UniStack.Navigator>
);

export default SchoolNav;
