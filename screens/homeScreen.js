import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CustomText } from "../atoms/";

export default function Home() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<CustomText>Hello</CustomText>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
});
