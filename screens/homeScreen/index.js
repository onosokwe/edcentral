import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../atoms/colors";
import Input from "../../components/input";
import Top from "./top";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.notWhite }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Top />
          <Input placeholder="search" />
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
