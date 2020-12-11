import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { CustomText, colors } from "../../atoms";

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
        style={[
          styles.input,
          focus ? styles.focus : props.error ? styles.errorColor : null,
          props.style,
        ]}
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
};

export default Input;
