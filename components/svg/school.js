import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

export default function SchoolSvg(props) {
  return (
    <Svg width="27" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.496 2.374a1 1 0 00-.992 0L4.019 7.222a1 1 0 000 1.737l8.485 4.848a1 1 0 00.992 0l6.6-3.77a1 1 0 011.496.869v4.232a.954.954 0 101.908 0V8.671a1 1 0 00-.504-.868l-9.5-5.429z"
        fill={props.color}
      />
      <Path
        d="M7.996 12.947a1 1 0 00-1.496.868v1.694a1 1 0 00.504.868l5.68 3.248a1 1 0 00.992 0l5.68-3.248a1 1 0 00.503-.868v-1.694a1 1 0 00-1.496-.868l-4.687 2.68a1 1 0 01-.993 0l-4.687-2.68z"
        fill={props.color}
        fillOpacity=".4"
      />
    </Svg>
  );
}

SchoolSvg.defaultProps = {
  color: "#200E32",
};

SchoolSvg.propTypes = {
  color: PropTypes.string,
};
