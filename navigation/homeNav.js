import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/homeScreen/index";
import SchoolNav from "./schoolsNav";
import ScholarshipNav from "./scholashipNav";
import UniversitiesNav from "./universitiesNav";

const HomeStack = createStackNavigator();

const HomeNav = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen name="home" component={Home} />
    <HomeStack.Screen name="school" component={SchoolNav} />
    <HomeStack.Screen name="Scholarships" component={ScholarshipNav} />
    <HomeStack.Screen name="universities" component={UniversitiesNav} />
  </HomeStack.Navigator>
);

export default HomeNav;
