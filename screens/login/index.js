import React from "react";
import { StyleSheet, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomText from "../../atoms/text";
import { colors } from "../../atoms/colors";
import Input from "../../components/input";
import Button from "../../components/button";

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ImageBackground
				source={require("../../assets/images/background.png")}
				style={styles.background}
			>
				<Image source={require("../../assets/images/logo.png")} />
				<View style={{ width: "90%" }}>
					<Input label="email" placeholder="example@email.com" />
					<Input label="password" placeholder="example@email.com" />
					<CustomText type="medium">Forgot password?</CustomText>
					<Button containerStyle={{ marginTop: 8 }} text="Login" />
					<CustomText
						type="medium"
						style={{ textAlign: "center", paddingTop: 20 }}
					>
            Don't have an account?
						<CustomText type="medium" style={{ color: colors.primary }}>
							{" "}
              Signup
						</CustomText>
					</CustomText>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
});
