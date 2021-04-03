import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText, { fontSize } from "../../atoms/text";
import Container from "./container";
import SchoolsCard from "./SchoolsCard";

const SecondarySchool = (props) => {
  const { route } = props;
  return (
    <Container
      name={route.params.schoolType}
      back={() => props.navigation.goBack()}
    >
      <View
        style={{
          width: "100%",
          paddingTop: "20%",
          paddingLeft: "5%",
        }}
      >
        <CustomText
          style={{ color: colors.LightBlack, fontSize: fontSize.largeText }}
          type="medium"
        >
          Let’s go!
        </CustomText>
        <CustomText
          style={{
            color: colors.notBlack,
            fontSize: fontSize.h3,
            paddingBottom: 22,
          }}
          type="medium"
        >
          select School type
        </CustomText>
      </View>
      <SchoolsCard text="Day Schools" />
      <SchoolsCard text="Boarding Schools" />
    </Container>
  );
};

SecondarySchool.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default SecondarySchool;
