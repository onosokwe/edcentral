import React from "react";
import { StyleSheet, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

import { colors, CustomText } from "../../atoms/";
import Input from "../../components/input";
import Button from "../../components/button";

export default function Signup(props) {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ImageBackground
				source={require("../../assets/images/background.png")}
				style={styles.background}
			>
				<Image source={require("../../assets/images/logo.png")} />
				<View style={{ width: "90%" }}>
					<Input label="fullname" placeholder="John Oke" />
					<Input label="email" placeholder="example@email.com" />
					<Input
						label="password"
						secureTextEntry={true}
						placeholder="********"
					/>
					<Input
						label="confirm password"
						secureTextEntry={true}
						placeholder="********"
					/>
					<Button containerStyle={{ marginTop: 8 }} text="Login" />
					<CustomText
						type="medium"
						style={{ textAlign: "center", paddingTop: 20 }}
						onPress={() => props.navigation.navigate("login")}
					>
            Already have an account?
						<CustomText type="medium" style={{ color: colors.primary }}>
							{" "}
              Login
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

Signup.propTypes = {
	navigation: PropTypes.object,
};
