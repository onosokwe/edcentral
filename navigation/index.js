import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigation from "./authNavigation";
import MainNavigation from "./mainNavigation";

const Navigation = () => {
  const {
    user: { id },
  } = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      {!id ? <AuthNavigation /> : <MainNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
