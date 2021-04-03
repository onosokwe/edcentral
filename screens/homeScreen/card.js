import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
export default function Card(props) {
  return (
    <Pressable onPress={props.onPress}>
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
        <View style={styles.container}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {props.image}
            <CustomText type="medium" style={styles.text}>
              {props.text}
            </CustomText>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
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
  onPress: PropTypes.func,
};
