import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import CustomText from "../../atoms/text";
import { colors } from "../../atoms/colors";

const Input = (props) => {
  const [focus, setFocus] = React.useState(false);

  return (
    <View style={{ width: "100%" }}>
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
        style={[styles.input, focus ? styles.focus : null, props.style]}
        {...props}
      />
      <CustomText style={[props.error ? styles.error : null]}>
        {props.error}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 4,
    padding: 16,
    fontSize: 16,
    letterSpacing: 0.232836,
    borderColor: "#B3B0AD",
    color: "#6D6D6D",
    borderWidth: 1,
    backgroundColor: "#fff",
  },

  focus: {
    borderColor: colors.primary,
    borderWidth: 1,
  },

  error: {
    color: "rgb(153, 0, 85)",
    paddingBottom: 16,
  },
});

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
