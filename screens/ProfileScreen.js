import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomText from "../atoms/text";
import colors from "../atoms/colors";
import ProfileSvg from "../components/svg/profile";

export default function Profile() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "hsla(218,100%,49%,0.3)" }}
    >
      <View style={styles.container}>
        <View style={styles.profileSum}>
          <View style={styles.imageContainer}>
            <ProfileSvg />
          </View>
        </View>
        <View
          style={{ backgroundColor: colors.notWhite, height: "100%" }}
        ></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  profileSum: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 130,
    width: 130,
    backgroundColor: colors.notWhite,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
