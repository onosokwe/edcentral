import React from "react";
import { StyleSheet, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { colors, CustomText } from "../atoms/";
import Input from "../components/input";
import Button from "../components/button";
import { signup } from "../features/user/actions";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().label("fullname").required("Please enter fullname"),
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required("password required")
    .min(6, "Password must have at least 6 characters"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function Signup(props) {
  const dispatch = useDispatch();

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
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.background}
      >
        <Image source={require("../assets/images/logo.png")} />
        <CustomText
          type="semiBold"
          style={{ textAlign: "center", color: colors.error }}
        >
          {error}
        </CustomText>
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
            error={
              formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : null
            }
          />
          <Button
            onPress={formik.handleSubmit}
            disabled={formik.isSubmitting}
            containerStyle={{ marginTop: 8 }}
            text={loading ? "Loading..." : "Signup"}
          />
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
