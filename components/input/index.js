// @ts-nocheck
import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import CustomText from "../../atoms/text";
import colors from "../../atoms/colors";

/**
 * @param {JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<TextInput> & Readonly<import("react-native").TextInputProps> & Readonly<{ children?: React.ReactNode; }>} props
 */
const Input = (props) => {
  const [focus, setFocus] = React.useState(false);

  return (
    <View style={[props.containerStyle, styles.container]}>
      <CustomText type="medium" style={{ textTransform: "capitalize" }}>
        {props.label}
      </CustomText>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[styles.input, focus ? styles.focus : props.error ? styles.errorColor : null, props.style]}
        {...props}
      />
      <CustomText style={[props.error ? styles.error : null]}>{props.error}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 5,
  },
  input: {
    marginTop: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    letterSpacing: 0.232836,
    borderColor: "#B3B0AD",
    color: "#6D6D6D",
    borderRadius: 6,
    backgroundColor: "hsla(226,100%,94%,0.53)",
  },

  focus: {
    borderColor: colors.primary,
    borderWidth: 1,
  },

  errorColor: {
    borderColor: "rgb(153, 0, 85)",
    borderWidth: 1,
  },

  error: {
    color: colors.error,
    paddingBottom: 16,
  },
});

Input.propTypes = {
  label: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.any,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
};

export default Input;
