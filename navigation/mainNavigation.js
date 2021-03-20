import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

import Home from "../screens/homeScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import Schools from "../screens/schoolScreen/index";
import Profile from "../screens/ProfileScreen";
import HomeSvg from "../components/svg/home";
import colors from "../atoms/colors";
import ProfileSvg from "../components/svg/profile";
import SchoolSvg from "../components/svg/school";
import ScholarshipSvg from "../components/svg/scholarship";
import ScholarshipNav from "./scholashipNav";
import SchoolNav from "./schoolsNav";

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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              if (route.name === "Home") {
                return <HomeSvg color={focused ? colors.primary : "#200E32"} />;
              } else if (route.name === "Profile") {
                return (
                  <ProfileSvg color={focused ? colors.primary : "#200E32"} />
                );
              } else if (route.name === "School") {
                return (
                  <SchoolSvg color={focused ? colors.primary : "#200E32"} />
                );
              } else if (route.name === "Scholarships") {
                return (
                  <ScholarshipSvg
                    color={focused ? colors.primary : "#200E32"}
                  />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: colors.LightBlack,
            labelPosition: "below-icon",
            labelStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="School" component={SchoolNav} />
          <Tab.Screen name="Scholarships" component={ScholarshipNav} />
        </Tab.Navigator>
      )}
    </React.Fragment>
  );
}
