/* eslint-disable indent */

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
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
          <Image
            source={require(// @ts-ignore
            "../assets/images/logo.png")}
            style={{ width: 85.56, height: 118.3 }}
          />
        </View>
        <View style={styles.inner}>
          <ConfirmEmailSvg />
          <CustomText type="semiBold" style={styles.header}>
            Welcome to edcentral!
          </CustomText>
          <CustomText style={{ color: colors.LightBlack, fontSize: 16, textAlign: "center" }}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3,
    width: "90%",
  },
  header: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: colors.notBlack,
    lineHeight: 21.33,
  },
});
