import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigation from "./authNavigation";
import MainNavigation from "./mainNavigation";

const Navigation = () => {
  const {
    user: { id, verified },
  } = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      {!id || (id && verified === false) ? (
        <AuthNavigation />
      ) : (
        <MainNavigation />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
