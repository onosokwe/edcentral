import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";
import colors from "../../atoms/colors";

/**
 * @param {{ width: string; height: string; color: string; }} props
 */
export default function EventSvg(props) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 57 47" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.875 33.037V18.128h35.25v15.029c0 6.147-3.87 9.926-10.06 9.926H15.916c-6.133 0-10.041-3.858-10.041-10.046zm9.712-4.817c-.89.04-1.625-.666-1.664-1.565 0-.901.697-1.645 1.587-1.686a1.6 1.6 0 011.606 1.566 1.609 1.609 0 01-1.529 1.685zm7.952 0c-.89.04-1.625-.666-1.664-1.565 0-.901.696-1.645 1.586-1.686a1.6 1.6 0 011.606 1.566 1.609 1.609 0 01-1.528 1.685zm7.893 7.206c-.89-.02-1.605-.764-1.605-1.664-.02-.901.696-1.643 1.586-1.663h.02c.909 0 1.644.744 1.644 1.663 0 .92-.735 1.664-1.645 1.664zm-9.557-1.664c.039.9.774 1.608 1.664 1.566a1.608 1.608 0 001.528-1.682 1.6 1.6 0 00-1.606-1.569 1.674 1.674 0 00-1.586 1.685zm-7.971 0c.039.9.774 1.608 1.664 1.566a1.608 1.608 0 001.528-1.682 1.6 1.6 0 00-1.606-1.569 1.674 1.674 0 00-1.586 1.685zm15.942-7.127c0-.9.696-1.625 1.586-1.645.87 0 1.567.703 1.606 1.567.02.9-.677 1.645-1.548 1.663a1.595 1.595 0 01-1.644-1.565v-.02z"
        fill={props.color}
      />
      <Path
        opacity=".4"
        d="M5.882 18.128c.025-1.15.122-3.43.303-4.165.929-4.13 4.083-6.755 8.59-7.129h17.451c4.47.394 7.662 3.036 8.59 7.129.18.715.277 3.014.302 4.165H5.882z"
        fill={props.color}
      />
      <Path
        d="M16.264 12.905c.851 0 1.49-.644 1.49-1.507V5.427c0-.864-.639-1.51-1.49-1.51s-1.49.646-1.49 1.51v5.97c0 .864.639 1.508 1.49 1.508M30.736 12.905c.832 0 1.49-.644 1.49-1.507V5.427c0-.864-.658-1.51-1.49-1.51-.851 0-1.49.646-1.49 1.51v5.97c0 .864.639 1.508 1.49 1.508"
        fill={props.color}
      />
    </Svg>
  );
}

EventSvg.defaultProps = {
  color: colors.notBlack,
  width: "27",
  height: "22",
};

EventSvg.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};
