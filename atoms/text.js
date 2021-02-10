/* eslint-disable indent */
import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

import colors from "./colors";

/**
 * @param {JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Text> & Readonly<import("react-native").TextProps> & Readonly<{ children?: React.ReactNode; }>} props
 */
const CustomText = (props) => {
  /**
   * @param {any} type
   */
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

  // @ts-ignore
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
