import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

import { colors } from "./index";

const CustomText = (props) => {
	const setFontType = (type) => {
		switch (type) {
		case "medium":
			return "medium";
		case "semiBold":
			return "semiBold";
		default:
			return "regular";
		}
	};

	const font = setFontType(props.type ? props.type : "regular");
	const styles = [
		{
			color: colors.notBlack,
			fontFamily: font,
		},
		props.style || {},
	];
	return (
		<Text {...props} style={styles}>
			{props.children}
		</Text>
	);
};

CustomText.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	style: PropTypes.any,
};

export default CustomText;
