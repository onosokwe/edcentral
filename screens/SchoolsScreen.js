import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../atoms/colors";

import CustomText from "../atoms/text";

export default function Schools() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <ImageBackground
        // @ts-ignore
        source={require("../assets/images/schoolsBackground.png")}
        style={styles.container}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={styles.imageContainer}>
          <ImageBackground
            // @ts-ignore
            source={require("../assets/images/schoolsCard.png")}
            style={styles.image}
            imageStyle={{ borderRadius: 6 }}
          >
            <CustomText style={styles.text} type="medium">
              Private schools
            </CustomText>
          </ImageBackground>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: "110%",
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
