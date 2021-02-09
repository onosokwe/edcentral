import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
import HorizontalCard from "../../components/horizontalCard";
import ScholarshipCard from "../../components/scholarshipCard";

import Top from "./top";

const data = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
    header: "MKO Abiola school",
    location: "Abeokuta",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1418&q=80",
    header: "Greenland High",
    location: "Lagos",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    header: "SpringLand High",
    location: "Lagos",
  },
];

const events = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    header: "MKO Abiola school",
    location: "Abeokuta",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    header: "Greenland High",
    location: "Lagos",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1563050860-87d45eaaeabb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
    header: "SpringLand High",
    location: "Lagos",
  },
];

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.notWhite }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Top />
          <View style={{ paddingTop: 20 }}>
            <View style={styles.title}>
              <CustomText type="medium" style={styles.name}>
                Schools
              </CustomText>
              <CustomText style={styles.seeMore}>See more</CustomText>
            </View>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <HorizontalCard
                  image={item.image}
                  header={item.header}
                  location={item.location}
                />
              )}
            />
          </View>
          <View style={{ paddingTop: 30 }}>
            <View style={styles.title}>
              <CustomText type="medium" style={styles.name}>
                Events
              </CustomText>
              <CustomText style={styles.seeMore}>See more</CustomText>
            </View>
            <FlatList
              data={events}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <HorizontalCard
                  image={item.image}
                  header={item.header}
                  location={item.location}
                />
              )}
            />
            <View style={{ paddingTop: 30 }}>
              <View style={styles.title}>
                <CustomText type="medium" style={styles.name}>
                  Scholarships
                </CustomText>
                <CustomText style={styles.seeMore}>See more</CustomText>
              </View>
              <ScholarshipCard />
            </View>
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
