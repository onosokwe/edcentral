import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";

/**
 * @param {{ onPress: (event: import("react-native").GestureResponderEvent) => void; image: string, name: string, address: string }} props
 */
export default function UniversityCard(props) {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.card}>
        <InnerCard
          image={props.image}
          name={props.name}
          address={props.address}
        />
      </View>
    </Pressable>
  );
}
/**
 * @param {{ size: number; image: string, name: string, address: string }} props
 */
export const InnerCard = (props) => {
  return (
    <React.Fragment>
      <Image
        style={{ width: props.size, height: props.size, resizeMode: "contain" }}
        source={{
          uri: props.image,
        }}
      />
      <View
        style={{
          paddingLeft: 9,
          flexDirection: "row",
          flex: 1,
          flexWrap: "wrap",
        }}
      >
        <View>
          <CustomText type="medium" style={styles.scholarshipName}>
            {props.name}
          </CustomText>
          <CustomText style={styles.companyName}>{props.address}</CustomText>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 11,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    backgroundColor: colors.white,
    elevation: 5,
    flexDirection: "row",
    borderRadius: 6,
    minHeight: 80,
    marginBottom: 16,
  },
  scholarshipName: {
    fontSize: 14,
    color: colors.notBlack,
    paddingBottom: 4,
  },
  companyName: {
    fontSize: 12,
    color: colors.LightBlack,
  },
});

InnerCard.defaultProps = {
  size: 60,
};

InnerCard.propTypes = {
  size: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
};

UniversityCard.propTypes = {
  onPress: PropTypes.func,
  image: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
};
