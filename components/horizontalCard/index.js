import React from "react";
import { Image, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
import LocationSvg from "../svg/location";

export default function HorizontalCard(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <View style={styles.words}>
        <CustomText style={styles.header} type="medium">
          {props.header}
        </CustomText>
        <View style={styles.body}>
          <LocationSvg size={16} color={colors.LightBlack} />
          <CustomText style={{ color: colors.LightBlack, paddingLeft: 4 }}>
            {props.location}
          </CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    backgroundColor: colors.white,
    elevation: 5,
    flexDirection: "column",
    borderRadius: 6,
    width: 190,
    marginRight: 10,
  },
  image: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    width: "100%",
    height: 100,
  },
  words: {
    padding: 10,
  },
  header: {
    fontSize: 16,
    paddingBottom: 4,
  },
  body: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

HorizontalCard.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  location: PropTypes.string,
};
