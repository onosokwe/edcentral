import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import React from "react";
import CustomText from "./atoms/text";
import Navigation from "./navigation/index";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  let [fonts] = useFonts({
    regular: require("./assets/fonts/Rubik-Regular.ttf"),
    medium: require("./assets/fonts/Rubik-Medium.ttf"),
    semiBold: require("./assets/fonts/Rubik-SemiBold.ttf"),
  });
  if (!fonts) return <AppLoading />;
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
