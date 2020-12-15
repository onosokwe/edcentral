import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import CustomText from "../atoms/text";
import ProfileSvg from "../components/svg/profile";
import colors from "../atoms/colors";

export default function Home() {
  const { user } = useSelector((state) => state.user);

  console.log({ user });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.imageContainer}>
              <ProfileSvg />
            </View>
            <View>
              <CustomText
                type="semiBold"
                style={{ fontSize: 20, color: colors.notBlack }}
              >
                Hi {user.name}
              </CustomText>
              <CustomText style={{ fontSize: 16, color: colors.LightBlack }}>
                Glad to have you here
              </CustomText>
            </View>
          </View>
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
    height: "100%",
  },
  innerContainer: {
    height: "100%",
    width: "90%",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
  },
  imageContainer: {
    height: 50,
    width: 50,
    backgroundColor: "#C4C4C4",
    borderRadius: 100,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
});
