import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ConfirmEmailSvg from "../components/svg/confirm";
import colors from "../atoms/colors";

import CustomText from "../atoms/text";

export default function ConfirmEmailScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Image source={require("../assets/images/logo.png")} />
        <View style={styles.inner}>
          <ConfirmEmailSvg />
          <CustomText type="semiBold" style={styles.header}>
            Welcome to edcentral!
          </CustomText>
          <CustomText style={{ color: colors.notBlack, fontSize: 18 }}>
            Please confirm your email address and restart
          </CustomText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 50,
    color: colors.notBlack,
    lineHeight: 21.33,
  },
});
