/* eslint-disable react/no-unescaped-entities */
/* eslint-disable indent */

import React from "react";
import { StyleSheet, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import CustomText from "../atoms/text";
import colors from "../atoms/colors";

import Input from "../components/input";
import Button from "../components/button";
import { login } from "../features/user/actions";

const validationSchema = Yup.object().shape({
  email: Yup.string().label("Email").email("Enter a valid email").required("Please enter a registered email"),
  password: Yup.string().label("Password").required("password required").min(6, "Password must have at least 6 characters "),
});

export default function Login(props) {
  const dispatch = useDispatch();

  // @ts-ignore
  const { error, loading } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(dispatch, values);
    },
    validationSchema,
  });

  return (
    <ImageBackground
      source={require(// @ts-ignore
      "../assets/images/background.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.background}>
        <Image
          source={require(// @ts-ignore
          "../assets/images/logo.png")}
          style={{ width: 85.56, height: 118.3 }}
        />
        <CustomText type="semiBold" style={{ textAlign: "center", color: colors.error }}>
          {error}
        </CustomText>
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
            // @ts-ignore
            onPress={() => props.navigation.navigate("forgotPassword")}
            style={{ marginBottom: 16 }}
          >
            Forgot password?
          </CustomText>
          <Button
            onPress={formik.handleSubmit}
            // @ts-ignore
            disabled={loading}
            containerStyle={{ marginTop: 8 }}
            text={loading ? "Loading..." : "Login"}
          />
          <CustomText
            type="medium"
            style={{ textAlign: "center", paddingTop: 20 }}
            // @ts-ignore
            onPress={() => props.navigation.navigate("signup")}
          >
            Don't have an account?
            <CustomText type="medium" style={{ color: colors.primary }}>
              {" "}
              Signup
            </CustomText>
          </CustomText>
        </View>
      </SafeAreaView>
    </ImageBackground>
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
