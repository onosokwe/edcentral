/* eslint-disable indent */
import * as React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

import colors from "./colors";

export const fontSize = {
  label: 14,
  small: 12,
  display: 64,
  largeText: 24,
  normal: 16,
  h2: 48,
  h3: 32,
};

const CustomText = (props) => {
  const setFontType = (type) => {
    switch (type) {
      case "medium":
        return "medium";
      case "semiBold":
        return "semiBold";
      default:
        return "regular";
    }
  };

  const font = setFontType(props.type ? props.type : "regular");
  const styles = [
    {
      color: colors.notBlack,
      fontFamily: font,
    },
    props.style || {},
  ];
  return (
    <Text {...props} style={styles}>
      {props.children}
    </Text>
  );
};

CustomText.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["medium", "semiBold", "regular"]),
  style: PropTypes.any,
};

export default CustomText;
