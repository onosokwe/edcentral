import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonActions } from "@react-navigation/native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
import { InnerCard } from "../../components/scholarshipCard";
import BackButtonSvg from "../../components/svg/backButton";

export default function Scholarship(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.notWhite }}>
      <View style={styles.container}>
        <View
          style={{
            width: "90%",
          }}
        >
          <View style={{ paddingBottom: 40 }}>
            <Pressable
              onPress={() => props.navigation.dispatch(CommonActions.goBack())}
            >
              <BackButtonSvg />
            </Pressable>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InnerCard size={90} />
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
});

Scholarship.propTypes = {
  navigation: PropTypes.object,
};
