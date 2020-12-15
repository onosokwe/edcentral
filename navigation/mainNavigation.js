import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

import Home from "../screens/homeScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import Schools from "../screens/SchoolsScreen";
import ScholarShip from "../screens/ScholarShipScreen";
import Profile from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
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
        <Tab.Navigator>
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="profile" component={Profile} />
          <Tab.Screen name="school" component={Schools} />
          <Tab.Screen name="scholarships" component={ScholarShip} />
        </Tab.Navigator>
      )}
    </React.Fragment>
  );
}
