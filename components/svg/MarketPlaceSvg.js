import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import colors from "../../atoms/colors";

/**
 * @param {{ width: string; height: string; color: string; }} props
 */
export default function MarketPlaceSvg(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 47 47"
      fill="none"
    >
      <Path
        opacity="0.4"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.575 40.3191C11.575 38.6741 12.9066 37.3425 14.5516 37.3425C16.177 37.3425 17.5087 38.6741 17.5087 40.3191C17.5087 41.9446 16.177 43.2762 14.5516 43.2762C12.9066 43.2762 11.575 41.9446 11.575 40.3191ZM33.6062 40.3191C33.6062 38.6741 34.9379 37.3425 36.5829 37.3425C38.2083 37.3425 39.54 38.6741 39.54 40.3191C39.54 41.9446 38.2083 43.2762 36.5829 43.2762C34.9379 43.2762 33.6062 41.9446 33.6062 40.3191Z"
        fill={props.color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39.5403 12.4335C40.7348 12.4335 41.5182 12.8447 42.3015 13.7456C43.0848 14.6464 43.2219 15.9389 43.0457 17.1119L41.1853 29.9586C40.8328 32.4281 38.7178 34.2474 36.2307 34.2474H14.8653C12.2607 34.2474 10.1065 32.2498 9.8911 29.6668L8.08943 8.31902L5.13235 7.80985C4.34901 7.67277 3.80068 6.90902 3.93776 6.12568C4.07485 5.32277 4.8386 4.79402 5.64151 4.91152L10.3121 5.61652C10.978 5.73597 11.4676 6.28235 11.5263 6.94818L11.8984 11.3349C11.9571 11.9635 12.4663 12.4335 13.093 12.4335H39.5403ZM27.6729 22.6149H33.0975C33.92 22.6149 34.5662 21.949 34.5662 21.1461C34.5662 20.3236 33.92 19.6774 33.0975 19.6774H27.6729C26.8504 19.6774 26.2041 20.3236 26.2041 21.1461C26.2041 21.949 26.8504 22.6149 27.6729 22.6149Z"
        fill={props.color}
      />
    </Svg>
  );
}

MarketPlaceSvg.defaultProps = {
  color: colors.notBlack,
  width: "27",
  height: "22",
};

MarketPlaceSvg.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
