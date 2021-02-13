import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import colors from "../../atoms/colors";

/**
 * @param {{ width: string; height: string; color: string; }} props
 */
export default function SchoolSvg(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 57 47"
      fill="none"
    >
      <Path
        d="M27.9951 4.91883C27.3329 4.5404 26.5199 4.5404 25.8576 4.91883L7.58122 15.3625C6.13406 16.1894 6.13406 18.2761 7.58122 19.1031L25.8579 29.5469C26.52 29.9252 27.3328 29.9253 27.995 29.5471L42.2124 21.4262C43.6484 20.6059 45.4349 21.6428 45.4349 23.2967V32.4142C45.4349 33.5491 46.3549 34.469 47.4897 34.469C48.6246 34.469 49.5445 33.5491 49.5445 32.4142V18.4829C49.5445 17.7099 49.1303 16.9961 48.4592 16.6126L27.9951 4.91883Z"
        fill={props.color}
      />
      <Path
        d="M16.1482 27.6929C14.7122 26.8716 12.9247 27.9085 12.9247 29.5628V33.2128C12.9247 33.9855 13.3386 34.6991 14.0093 35.0827L26.244 42.0801C26.9066 42.459 27.7203 42.459 28.3829 42.0801L40.6176 35.0827C41.2883 34.6991 41.7022 33.9855 41.7022 33.2128V29.5628C41.7022 27.9085 39.9147 26.8716 38.4787 27.6929L28.3829 33.467C27.7203 33.846 26.9066 33.846 26.244 33.467L16.1482 27.6929Z"
        fill={props.color}
        fillOpacity="0.4"
      />
    </Svg>
  );
}

SchoolSvg.defaultProps = {
  color: colors.notBlack,
  width: "27",
  height: "22",
};

SchoolSvg.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
