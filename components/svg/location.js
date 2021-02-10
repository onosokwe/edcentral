import React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";
import PropTypes from "prop-types";

export default function LocationSvg(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 16 16" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.68773 1.95789C7.1443 1.11156 8.93467 1.12635 10.3776 1.99664C11.8063 2.88465 12.6746 4.46949 12.6665 6.17434C12.6333 7.868 11.7022 9.46004 10.5383 10.6908C9.86654 11.4043 9.11506 12.0353 8.29921 12.5707C8.21518 12.6193 8.12315 12.6518 8.02764 12.6667C7.93571 12.6628 7.84619 12.6356 7.76715 12.5877C6.5216 11.7831 5.42887 10.7561 4.54153 9.55602C3.79904 8.55428 3.3772 7.34405 3.33331 6.08965C3.33235 4.38154 4.23116 2.80422 5.68773 1.95789ZM6.52943 6.79652C6.77445 7.40055 7.35278 7.79456 7.9944 7.79456C8.41473 7.79758 8.81878 7.62922 9.11653 7.32698C9.41428 7.02475 9.58098 6.61376 9.57949 6.18558C9.58173 5.53202 9.19696 4.94154 8.60483 4.68985C8.01271 4.43815 7.33002 4.5749 6.87554 5.03623C6.42105 5.49756 6.28442 6.19248 6.52943 6.79652Z"
        fill={props.color}
      />
      <Ellipse
        opacity="0.4"
        cx="8.00002"
        cy="14"
        rx="3.33333"
        ry="0.666667"
        fill={props.color}
      />
    </Svg>
  );
}

LocationSvg.defaultProps = {
  size: 24,
  color: "#200E32",
};

LocationSvg.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
