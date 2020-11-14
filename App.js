import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import React from "react";
import Navigation from "./navigation/index";
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
