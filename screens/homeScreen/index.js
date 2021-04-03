import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import Input from "../../components/input";
import ScholarshipSvg from "../../components/svg/scholarship";
import SchoolSvg from "../../components/svg/school";
import Card from "./card";
import Top from "./top";

const items = [
  {
    text: "School",
    // @ts-ignore
    image: <SchoolSvg width="57" height="47" />,
    color: colors.primary,
    link: "School",
  },
  {
    text: "Scholarship",
    // @ts-ignore
    image: <ScholarshipSvg size={47} />,
    color: colors.lightblue,
    link: "Scholarships",
  },
  {
    text: "Universities",
    link: "Universities",
    // @ts-ignore
    image: <SchoolSvg width="57" height="47" />,
    color: "#28CCFF",
  },
  {
    text: "Events",
    link: "Events",
    // @ts-ignore
    image: <SchoolSvg width="57" height="47" />,
    color: colors.purple,
  },
  {
    text: "Resources",
    link: "Resources",
    // @ts-ignore
    image: <SchoolSvg width="57" height="47" />,
    color: colors.warn,
  },
  {
    text: "Marketplace",
    link: "Marketplace",
    // @ts-ignore
    image: <SchoolSvg width="57" height="47" />,
    color: "#FF790E",
  },
];

export default function Home(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.notWhite }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Top />
          <Input placeholder="Enter Location" />
          <View
            style={{
              paddingTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {items.map((item) => (
              <View key={item.text} style={{ width: "48%", marginBottom: 30 }}>
                <Card
                  text={item.text}
                  image={item.image}
                  color={item.color}
                  onPress={() => props.navigation.navigate(item.link)}
                />
              </View>
            ))}
          </View>
        </View>
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
    height: "100%",
  },
  innerContainer: {
    height: "100%",
    width: "100%",
    paddingHorizontal: "5%",
  },
  title: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  name: {
    color: colors.notBlack,
    fontSize: 18,
  },
  seeMore: {
    color: colors.purple,
    fontSize: 12,
  },
});

Home.propTypes = {
  navigation: PropTypes.object,
};
