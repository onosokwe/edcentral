import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import colors from "../../atoms/colors";

/**
 * @param {{ width: string; height: string; color: string; }} props
 */
export default function ResourceSvg(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 47 47"
      fill="none"
    >
      <Path
        opacity="0.4"
        d="M36.8339 17.6661C35.9497 17.6661 34.7785 17.6465 33.3204 17.6465C29.7641 17.6465 26.84 14.7031 26.84 11.1135V4.8155C26.84 4.32004 26.4445 3.91663 25.9539 3.91663H15.5954C10.7614 3.91663 6.85416 7.88421 6.85416 12.7468V33.8478C6.85416 38.9493 10.9475 43.0833 15.9988 43.0833H31.424C36.2406 43.0833 40.1458 39.1412 40.1458 34.2747V18.5473C40.1458 18.0499 39.7522 17.6485 39.2597 17.6504C38.4317 17.6563 37.4389 17.6661 36.8339 17.6661Z"
        fill={props.color}
      />
      <Path
        opacity="0.4"
        d="M31.4978 5.02764C30.9122 4.4186 29.89 4.83769 29.89 5.68173V10.8459C29.89 13.0118 31.674 14.7939 33.8399 14.7939C35.2049 14.8095 37.1006 14.8134 38.7103 14.8095C39.5348 14.8076 39.9539 13.8225 39.382 13.2272C37.316 11.0789 33.6167 7.22881 31.4978 5.02764Z"
        fill={props.color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.574 22.3007H24.2029C25.0078 22.3007 25.6619 21.6486 25.6619 20.8437C25.6619 20.0388 25.0078 19.3848 24.2029 19.3848H17.574C16.7691 19.3848 16.117 20.0388 16.117 20.8437C16.117 21.6486 16.7691 22.3007 17.574 22.3007ZM17.5741 32.081H28.2352C29.0401 32.081 29.6942 31.4289 29.6942 30.624C29.6942 29.8192 29.0401 29.1651 28.2352 29.1651H17.5741C16.7692 29.1651 16.1171 29.8192 16.1171 30.624C16.1171 31.4289 16.7692 32.081 17.5741 32.081Z"
        fill={props.color}
      />
    </Svg>
  );
}

ResourceSvg.defaultProps = {
  color: colors.notBlack,
  width: "27",
  height: "22",
};

ResourceSvg.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
