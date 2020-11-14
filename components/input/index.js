import React from "react";
import { TextInput, View } from "react-native";

const Input = (props) => {
  return (
    <View>
      <TextInput placeholder={props.placeholder} />
    </View>
  );
};

export default Input;
