import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import PropTypes from "prop-types";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
import BackButtonSvg from "../../components/svg/backButton";
import Input from "../../components/input";

const SchoolType = (props) => {
  const { route } = props;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <ImageBackground
        source={require("../../assets/images/schoolsBackground.png")}
        style={styles.container}
        imageStyle={{ borderRadius: 6 }}
      >
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            height: "auto",
          }}
        >
          <View style={styles.top}>
            <Pressable onPress={() => props.navigation.goBack()}>
              <BackButtonSvg />
            </Pressable>
            <CustomText type="medium" style={{ textAlign: "center", flex: 1 }}>
              {route.params.schoolType}
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
            <Input placeholder="search" />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "60%",
              }}
            >
              <Image
                style={{ width: 246.06, height: 206.79 }}
                source={require("../../assets/images/emptymap.png")}
              />
              <CustomText style={{ color: colors.LightBlack, paddingTop: 40 }}>
                Please enter prefered location
              </CustomText>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    resizeMode: "cover",
    height: "110%",
  },
  top: {
    paddingTop: 30,
    paddingBottom: 30,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
  },
});

SchoolType.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default SchoolType;
