import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
import { InnerCard } from "../../components/scholarshipCard";
import BackButtonSvg from "../../components/svg/backButton";
import BookmarkSvg from "../../components/svg/bookmark";
export default function Scholarship(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.notWhite }}>
      <View style={styles.container}>
        <View
          style={{
            width: "90%",
          }}
        >
          <View style={styles.top}>
            <Pressable onPress={() => props.navigation.goBack()}>
              <BackButtonSvg />
            </Pressable>
            <Pressable
              style={styles.apply}
              onPress={() => console.log("applied")}
            >
              <CustomText style={{ color: colors.notWhite, fontSize: 16 }}>
                Apply
              </CustomText>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InnerCard size={90} />
          </View>
          <View style={styles.des}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 16,
                alignItems: "center",
              }}
            >
              <CustomText type="medium">Description</CustomText>
              <BookmarkSvg />
            </View>
            <CustomText style={{ color: colors.LightBlack }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              varius commodo feugiat vitae eu eu. Cras ut tempor sit enim. Sed
              nisl elementum lectus at condimentum. Enim mattis ornare bibendum
              blandit sed pretium pharetra convallis sit.
            </CustomText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    width: "100%",
    paddingTop: 30,
  },
  top: {
    paddingBottom: 40,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  apply: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 6,
  },
  des: {
    paddingTop: 10,
  },
});

Scholarship.propTypes = {
  navigation: PropTypes.object,
};
