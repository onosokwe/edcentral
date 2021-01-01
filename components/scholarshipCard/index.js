import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";

export default function ScholarshipCard(props) {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.card}>
        <Image
          style={{ width: 60, height: 60, resizeMode: "contain" }}
          source={{
            uri:
              "https://www.total.com/themes/custom/total_com/dist/img/logo_total_290x70px_v3.png",
          }}
        />
        <View
          style={{
            paddingLeft: 9,
            justifyContent: "space-between",
          }}
        >
          <View>
            <CustomText type="medium" style={styles.scholarshipName}>
              NNPC/Total Scholarship Scheme
            </CustomText>
            <CustomText style={styles.companyName}>Total Petroleum</CustomText>
          </View>
          <View style={{ flexDirection: "row", paddingTop: 13 }}>
            <CustomText style={styles.companyName}>Deadline:</CustomText>
            <CustomText
              style={{
                ...styles.companyName,
                color: colors.notBlack,
                paddingLeft: 4,
              }}
            >
              {new Date().toDateString()}
            </CustomText>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 11,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    backgroundColor: "#fff",
    elevation: 5,
    flexDirection: "row",
    borderRadius: 6,
    minHeight: 80,
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

ScholarshipCard.propTypes = {
  onPress: PropTypes.func,
};
