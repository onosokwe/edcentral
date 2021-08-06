/* eslint-disable indent */

import React from "react";
import { StyleSheet, Image, ImageBackground, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import CustomText from "../atoms/text";
import colors from "../atoms/colors";

import Input from "../components/input";
import Button from "../components/button";
import { signup } from "../features/user/actions";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().label("fullname").required("Please enter fullname"),
  email: Yup.string().label("Email").email("Enter a valid email").required("Please enter a registered email"),
  password: Yup.string().label("Password").required("password required").min(6, "Password must have at least 6 characters"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function Signup(props) {
  const dispatch = useDispatch();

  // @ts-ignore
  const { error, loading } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      signup(dispatch, values);
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
        <ScrollView style={{ width: "100%" }} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "90%" }}>
            <Input
              label="fullname"
              placeholder="John Oke"
              onChangeText={formik.handleChange("fullname")}
              value={formik.values.fullname}
              error={formik.errors.fullname ? formik.errors.fullname : null}
            />
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
            <Input
              label="confirm password"
              secureTextEntry={true}
              placeholder="********"
              onChangeText={formik.handleChange("confirmPassword")}
              value={formik.values.confirmPassword}
              error={formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
            />
            <Button
              onPress={formik.handleSubmit}
              // @ts-ignore
              disabled={loading}
              containerStyle={{ marginTop: 8 }}
              text={loading ? "Loading..." : "Signup"}
            />
            <CustomText
              type="medium"
              style={{ textAlign: "center", paddingTop: 20 }}
              // @ts-ignore
              onPress={() => props.navigation.navigate("login")}
            >
              Already have an account?
              <CustomText type="medium" style={{ color: colors.primary }}>
                {" "}
                Login
              </CustomText>
            </CustomText>
          </View>
        </ScrollView>
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
    paddingVertical: 32,
  },
});

Signup.propTypes = {
  navigation: PropTypes.object,
};
