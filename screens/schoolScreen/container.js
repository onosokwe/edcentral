import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
import BackButtonSvg from "../../components/svg/backButton";

const Container = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.notWhite }}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "auto",
        }}
      >
        <View style={styles.top}>
          <Pressable onPress={props.back}>
            <BackButtonSvg />
          </Pressable>
          <CustomText type="medium" style={{ textAlign: "center", flex: 1 }}>
            {props.name}
          </CustomText>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "auto",
          }}
        >
          {props.children}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    paddingTop: 30,
    paddingBottom: 30,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
  },
});

Container.propTypes = {
  back: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
