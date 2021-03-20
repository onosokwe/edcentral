import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Schools from "../screens/schoolScreen/index";
import SchoolType from "../screens/schoolScreen/schoolType";

const SchoolStack = createStackNavigator();

const SchoolNav = () => (
  <SchoolStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <SchoolStack.Screen name="school" component={Schools} />
    <SchoolStack.Screen name="schoolType" component={SchoolType} />
  </SchoolStack.Navigator>
);

export default SchoolNav;
