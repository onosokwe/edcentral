import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
/**
 * @param {{ color: string; image: React.ReactNode; text: string; }} props
 */
export default function Card(props) {
  return (
    <View
      style={{
        borderRadius: 6,
        backgroundColor: props.color,
        height: 150,
        shadowColor: props.color,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 5,
      }}
    >
      <ImageBackground
        // @ts-ignore
        source={require("../../assets/images/cardBackground.png")}
        style={styles.container}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {props.image}
          <CustomText type="medium" style={styles.text}>
            {props.text}
          </CustomText>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.notBlack,
    fontSize: 14,
    paddingTop: 5,
    textAlign: "center",
  },
});

Card.propTypes = {
  text: PropTypes.string,
  image: PropTypes.node,
  color: PropTypes.string,
};
