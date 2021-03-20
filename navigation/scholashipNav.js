import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Scholarship from "../screens/ScholarShipScreen/scholarship";
import ScholarShipList from "../screens/ScholarShipScreen/index";

const ScholarshipStack = createStackNavigator();

const ScholarshipNav = () => (
  <ScholarshipStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ScholarshipStack.Screen name="list" component={ScholarShipList} />
    <ScholarshipStack.Screen name="scholarship" component={Scholarship} />
  </ScholarshipStack.Navigator>
);

export default ScholarshipNav;
