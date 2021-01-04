import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import CustomText from "../../atoms/text";
import ProfileSvg from "../../components/svg/profile";
import colors from "../../atoms/colors";

export default function Top() {
  const { user } = useSelector((state) => state.user);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageContainer}>
        <ProfileSvg />
      </View>
      <View>
        <CustomText
          type="semiBold"
          style={{ fontSize: 18, color: colors.notBlack }}
        >
          Hi {user.name}
        </CustomText>
        <CustomText style={{ fontSize: 14, color: colors.LightBlack }}>
          Glad to have you here
        </CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 20,
    backgroundColor: colors.notWhite,
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
