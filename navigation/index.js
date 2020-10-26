import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
