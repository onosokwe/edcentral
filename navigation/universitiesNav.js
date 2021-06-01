import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Schools from "../screens/schoolScreen/index";
import SchoolType from "../screens/schoolScreen/schoolType";
import SecondraySchool from "../screens/schoolScreen/secondraySchool";

const SchoolStack = createStackNavigator();

const SchoolNav = () => (
  <SchoolStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <SchoolStack.Screen name="school" component={Schools} />
    <SchoolStack.Screen name="creche-primary" component={SchoolType} />
    <SchoolStack.Screen name="secondary-school" component={SecondraySchool} />
  </SchoolStack.Navigator>
);

export default SchoolNav;
