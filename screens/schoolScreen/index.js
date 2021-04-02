/* eslint-disable indent */

import React from "react";
import { Pressable, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { CommonActions } from "@react-navigation/native";

import colors from "../../atoms/colors";
import Container from "./container";
import SchoolsCard from "./SchoolsCard";

const options = [
  "Creche Schools",
  "Primary Schools",
  "Secondary Schools",
  "Universities",
];

export default function Schools(props) {
  const gotoNext = (option) => {
    switch (option) {
      case "Creche Schools":
      case "Primary Schools":
        props.navigation.dispatch(
          CommonActions.navigate({
            name: "creche-primary",
            params: {
              schoolType: option,
            },
          })
        );
        break;
      case "Secondary Schools":
        props.navigation.dispatch(
          CommonActions.navigate({
            name: "secondary-school",
            params: {
              schoolType: option,
            },
          })
        );
        break;
    }
  };
  return (
    <Container name="Schools" back={() => props.navigation.goBack()}>
      {options.map((option) => (
        <SchoolsCard
          key={option}
          onPress={() => gotoNext(option)}
          text={option}
        />
      ))}
    </Container>
  );
}

Schools.propTypes = {
  navigation: PropTypes.object,
};
