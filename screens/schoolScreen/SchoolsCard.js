import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";

export default function SchoolsCard(props) {
  return (
    <Pressable style={styles.imageContainer} onPress={props.onPress}>
      <View style={styles.image}>
        <CustomText style={styles.text} type="medium">
          {props.text}
        </CustomText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 6,
    backgroundColor: colors.white,
    height: 100,
    shadowColor: colors.notBlack,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
    width: "95%",
    marginBottom: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 24,
    borderRadius: 6,
  },
  text: {
    color: colors.notBlack,
    fontSize: 14,
  },
});

SchoolsCard.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};
