import React from "react";
import { StyleSheet, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";

import { colors, CustomText } from "../../atoms/";
import Input from "../../components/input";
import Button from "../../components/button";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required("password required")
    .min(6, "Password must have at least 6 characters "),
});

export default function Login(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
    validationSchema,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={styles.background}
      >
        <Image source={require("../../assets/images/logo.png")} />
        <View style={{ width: "90%" }}>
          <Input
            label="email"
            placeholder="example@email.com"
            onChangeText={formik.handleChange("email")}
            value={formik.values.email}
            error={formik.errors.email ? formik.errors.email : null}
          />
          <Input
            label="password"
            secureTextEntry={true}
            placeholder="********"
            onChangeText={formik.handleChange("password")}
            value={formik.values.password}
            error={formik.errors.password ? formik.errors.password : null}
          />
          <CustomText
            type="medium"
            onPress={() => props.navigation.navigate("forgotPassword")}
          >
            Forgot password?
          </CustomText>
          <Button
            onPress={formik.handleSubmit}
            containerStyle={{ marginTop: 8 }}
            text="Login"
          />
          <CustomText
            type="medium"
            style={{ textAlign: "center", paddingTop: 20 }}
            onPress={() => props.navigation.navigate("signup")}
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

Login.propTypes = {
  navigation: PropTypes.object,
};
