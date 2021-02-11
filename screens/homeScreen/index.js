import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../../atoms/colors";
import Input from "../../components/input";
import Card from "./card";
import Top from "./top";

const items = [
  {
    text: "school",
    // @ts-ignore
    image: require("../../assets/images/school.png"),
  },
  {
    text: "Scholarship",
    // @ts-ignore
    image: require("../../assets/images/scholarship.png"),
  },
  {
    text: "Service providers",
    // @ts-ignore
    image: require("../../assets/images/serviceProviders.png"),
  },
  {
    text: "Events",
    // @ts-ignore
    image: require("../../assets/images/events.png"),
  },
  {
    text: "Resources",
    // @ts-ignore
    image: require("../../assets/images/resources.png"),
  },
  {
    text: "Marketplace",
    // @ts-ignore
    image: require("../../assets/images/marketplace.png"),
  },
];

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.notWhite }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Top />
          <Input placeholder="search" />
          <View
            style={{
              paddingTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {items.map((item) => (
              <View key={item.text} style={{ width: "45%", marginBottom: 30 }}>
                <Card text={item.text} image={item.image} />
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
