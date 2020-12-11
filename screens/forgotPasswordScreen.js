import React from "react";
import { StyleSheet, Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormik } from "formik";
import * as Yup from "yup";

import CustomText from "../atoms/text";
import colors from "../atoms/colors";

import Input from "../components/input";
import Button from "../components/button";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
});

export default function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log({ values });
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
        <View style={{ width: "90%" }}>
          <CustomText type="medium">Forgot Password</CustomText>
          <CustomText
            style={{ color: colors.LightBlack, width: 280, marginBottom: 42 }}
          >
            Please enter your email below to reste password
          </CustomText>
          <Input
            label="email"
            placeholder="example@email.com"
            onChangeText={formik.handleChange("email")}
            value={formik.values.email}
            error={formik.errors.email ? formik.errors.email : null}
          />
          <Button
            onPress={formik.handleSubmit}
            containerStyle={{ marginTop: 8 }}
            text="Confirm"
          />
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
