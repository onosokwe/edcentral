import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";

/**
 * @param {{ image: string; text: string; }} props
 */
export default function Card(props) {
  return (
    <ImageBackground
      // @ts-ignore
      source={props.image}
      style={styles.container}
      imageStyle={{ borderRadius: 6 }}
    >
      <CustomText type="medium" style={styles.text}>
        {props.text}
      </CustomText>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  text: {
    color: colors.notWhite,
    fontSize: 24,
    textAlign: "center",
  },
});

Card.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
};
