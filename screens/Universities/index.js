import React from "react";
import PropTypes from "prop-types";

import Container from "./container";

export default function Universities(props) {
  return (
    <Container
      name="Universities"
      back={() => props.navigation.goBack()}
    ></Container>
  );
}

Universities.propTypes = {
  navigation: PropTypes.object,
};
