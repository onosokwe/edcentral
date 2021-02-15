import React from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../atoms/colors";

import CustomText from "../atoms/text";
import BackButtonSvg from "../components/svg/backButton";

const options = [
  "Private Schools",
  "Public Schools",
  "Universities",
  "Law School",
  "Online learning",
];

export default function Schools(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <ImageBackground
        // @ts-ignore
        source={require("../assets/images/schoolsBackground.png")}
        style={styles.container}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.top}>
            <Pressable onPress={() => props.navigation.goBack()}>
              <BackButtonSvg />
            </Pressable>
            <CustomText
              type="medium"
              style={{ textAlign: "center", marginLeft: "35%" }}
            >
              Schools
            </CustomText>
          </View>
          {options.map((option) => (
            <View style={styles.imageContainer} key={option}>
              <ImageBackground
                // @ts-ignore
                source={require("../assets/images/schoolsCard.png")}
                style={styles.image}
                imageStyle={{ borderRadius: 6 }}
              >
                <CustomText style={styles.text} type="medium">
                  {option}
                </CustomText>
              </ImageBackground>
            </View>
          ))}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    resizeMode: "cover",
    height: "110%",
  },
  top: {
    paddingTop: 30,
    paddingBottom: 30,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 6,
    backgroundColor: colors.white,
    height: 100,
    shadowColor: colors.notBlack,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
    width: "95%",
    marginBottom: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 24,
  },
  text: {
    color: colors.notBlack,
    fontSize: 14,
  },
});
