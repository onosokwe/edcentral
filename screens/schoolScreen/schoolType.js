import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
import Input from "../../components/input";
import Container from "./container";

const SchoolType = (props) => {
  const { route } = props;
  return (
    <Container
      back={() => props.navigation.goBack()}
      name={route.params.schoolType}
    >
      <Input placeholder="enter location" />
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
    </Container>
  );
};

SchoolType.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default SchoolType;
