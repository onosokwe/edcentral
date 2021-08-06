import React from "react";
import PropTypes from "prop-types";
import CustomText from "../../atoms/text";
import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../../atoms/colors";
import BackButtonSvg from "../../components/svg/backButton";
import LocationSvg from "../../components/svg/locationSvg";
import { ScrollView } from "react-native-gesture-handler";

export default function Uni(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.top}>
        <View style={{ width: "90%" }}>
          <Pressable onPress={() => props.navigation.goBack()}>
            <BackButtonSvg />
          </Pressable>
          <View style={{ paddingTop: 30, flexDirection: "row", alignItems: "center" }}>
            <LocationSvg />
            <CustomText type="medium" style={{ color: colors.notBlack, fontSize: 20, paddingLeft: 7 }}>
              Nnamdi Azikiwe University
            </CustomText>
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 30, justifyContent: "center" }}>
            <Image
              style={{ width: 103, height: 90, borderRadius: 6 }}
              source={{
                uri: "https://images.prismic.io/clacified/fb78e4b9-822e-4ac6-b50f-e8193c8bf33f_UNIZIK+has+released+its+cut-off+mark_+eligibility%2C+and+registation+for+the+2020+Post-UTME+screening+exercise.jpg?auto=compress%2Cformat&rect=0%2C47%2C720%2C405&w=800&h=450",
              }}
            />
            <Image
              style={{ width: 103, height: 90, borderRadius: 6, marginHorizontal: 13 }}
              source={{
                uri: "https://unizik.edu.ng/wp-content/uploads/2017/02/Faculty-of-Arts.png",
              }}
            />
            <Image
              style={{ width: 103, height: 90, borderRadius: 6 }}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{ width: "90%", height: 1000 }}>
          <View style={{ paddingTop: 30, flexDirection: "row", alignItems: "center" }}>
            <LocationSvg color="#797979" size={15} />
            <CustomText style={{ color: colors.LightBlack, fontSize: 16, paddingLeft: 7, width: 260 }}>
              Along Enugu-Onitsha Expressway, Ifite Road, 420110, Awka
            </CustomText>
          </View>
          <ScrollView>
            <CustomText type="medium" style={{ paddingTop: 30, paddingBottom: 20 }}>
              Programs
            </CustomText>
            <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
              <View style={{ width: "48%", height: 134.12, borderRadius: 6, paddingBottom: 16 }}>
                <ImageBackground
                  source={{
                    uri: "https://images.unsplash.com/photo-1563290329-7f685b0341ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFmcmljYW4lMjBzdHVkZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                  }}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
                  imageStyle={{ borderRadius: 6 }}
                >
                  <CustomText type="medium" style={{ color: colors.notWhite, padding: 8, fontSize: 16 }}>
                    Undergraduate
                  </CustomText>
                </ImageBackground>
              </View>
              <View style={{ width: "48%", height: 134.12, borderRadius: 6, paddingBottom: 16 }}>
                <ImageBackground
                  source={{
                    uri: "https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBzdHVkZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                  }}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
                  imageStyle={{ borderRadius: 6 }}
                >
                  <CustomText type="medium" style={{ color: colors.notWhite, padding: 8, fontSize: 16 }}>
                    Postgraduate
                  </CustomText>
                </ImageBackground>
              </View>
              <View style={{ width: "48%", height: 134.12, borderRadius: 6, paddingBottom: 16 }}>
                <ImageBackground
                  source={{
                    uri: "https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                  }}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
                  imageStyle={{ borderRadius: 6 }}
                >
                  <CustomText type="medium" style={{ color: colors.notWhite, padding: 8, fontSize: 16 }}>
                    Diploma
                  </CustomText>
                </ImageBackground>
              </View>
              <View style={{ width: "48%", height: 134.12, borderRadius: 6, paddingBottom: 16 }}>
                <ImageBackground
                  source={{
                    uri: "https://images.pexels.com/photos/6140707/pexels-photo-6140707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                  }}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
                  imageStyle={{ borderRadius: 6 }}
                >
                  <CustomText type="medium" style={{ color: colors.notWhite, padding: 8, fontSize: 16 }}>
                    Distance learning
                  </CustomText>
                </ImageBackground>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

Uni.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#FFECBB",
    alignItems: "center",
    paddingTop: "15%",
  },
  bottom: {
    backgroundColor: "white",
    alignItems: "center",
    height: "100%",
  },
  listContainer: {
    paddingTop: 30,
    width: "100%",
    backgroundColor: "#FFECBB",
  },
  cardContainer: {
    paddingTop: 20,
  },
  num: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
