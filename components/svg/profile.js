import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

export default function ProfileSvg(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.747 15.175c-4.313 0-7.997.68-7.997 3.4 0 2.72 3.66 3.425 7.997 3.425 4.313 0 7.997-.68 7.997-3.4 0-2.721-3.66-3.425-7.997-3.425"
        fill={props.color}
      />
      <Path
        opacity=".4"
        d="M12.747 12.584a5.273 5.273 0 005.292-5.292A5.273 5.273 0 0012.747 2a5.274 5.274 0 00-5.292 5.292 5.274 5.274 0 005.292 5.292"
        fill={props.color}
      />
    </Svg>
  );
}

ProfileSvg.defaultProps = {
  size: 24,
  color: "#200E32",
};

ProfileSvg.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
