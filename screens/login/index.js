import React from "react";
import CustomText from "../../atoms/text";
import { StyleSheet, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/background.png")}
          style={styles.background}
        >
          <Image source={require("../../assets/images/logo.png")} />
          <CustomText type="semiBold">Login</CustomText>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f90",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
