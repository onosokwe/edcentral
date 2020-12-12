import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import CustomText from "../../atoms/text";
import colors from "../../atoms/colors";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}
      {...props}
    >
      {props.prefix}
      <CustomText type="medium" style={[styles.text, props.textStyle]}>
        {props.text}
      </CustomText>
      {props.surfix}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    backgroundColor: colors.primary,
    borderRadius: 6,
  },
  text: {
    padding: 18,
    color: colors.notWhite,
    textAlign: "center",
  },
});

Button.propTypes = {
  containerStyle: PropTypes.object,
  prefix: PropTypes.node,
  text: PropTypes.string,
  surfix: PropTypes.node,
  onPress: PropTypes.func,
  textStyle: PropTypes.object,
};

export default Button;
