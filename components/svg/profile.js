import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

export default function ProfileSvg(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.7468 15.1746C8.43379 15.1746 4.74979 15.8546 4.74979 18.5746C4.74979 21.2956 8.41079 21.9996 12.7468 21.9996C17.0598 21.9996 20.7438 21.3206 20.7438 18.5996C20.7438 15.8786 17.0838 15.1746 12.7468 15.1746Z"
        fill={props.color}
      />
      <Path
        opacity="0.4"
        d="M12.7468 12.5838C15.6848 12.5838 18.0388 10.2288 18.0388 7.29176C18.0388 4.35476 15.6848 1.99976 12.7468 1.99976C9.80977 1.99976 7.45477 4.35476 7.45477 7.29176C7.45477 10.2288 9.80977 12.5838 12.7468 12.5838Z"
        fill={props.color}
      />
    </Svg>
  );
}

ProfileSvg.defaultProps = {
  width: 25,
  height: 24,
  color: "#200E32",
};

ProfileSvg.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
