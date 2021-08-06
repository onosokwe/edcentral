import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
import Input from "../../components/input";
import Container from "./container";
import ShowMap from "../homeScreen/showMap";

const SchoolType = (props) => {
  const { route } = props;
  return (
    <Container back={() => props.navigation.goBack()} name={route.params.schoolType}>
      <View style={{ width: "100%" }}>
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
            // @ts-ignore
            source={require("../../assets/images/emptymap.png")}
          />
          <CustomText style={{ color: colors.LightBlack, paddingTop: 40 }}>Please enter prefered location</CustomText>
        </View>
        {/* <ShowMap /> */}
      </View>
    </Container>
  );
};

SchoolType.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default SchoolType;
