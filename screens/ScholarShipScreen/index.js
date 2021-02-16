import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PropTypes from "prop-types";

import colors from "../../atoms/colors";
import CustomText from "../../atoms/text";
import Input from "../../components/input";
import ScholarshipCard from "../../components/scholarshipCard";
import BookmarkSvg from "../../components/svg/bookmark";

export default function ScholarShipList(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.notWhite }}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Input
            containerStyle={styles.input}
            placeholder="example@email.com"
          />
          <Pressable style={styles.bookmark}>
            <BookmarkSvg size={32} color={colors.notWhite} />
          </Pressable>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.num}>
            <CustomText
              type="medium"
              style={{ color: colors.notBlack, fontSize: 14 }}
            >
              30,000 scholarships
            </CustomText>
            <CustomText
              type="medium"
              style={{ color: colors.primary, fontSize: 14 }}
            >
              Sort by
            </CustomText>
          </View>
          <View style={styles.cardContainer}>
            <ScholarshipCard
              onPress={() => props.navigation.navigate("scholarship")}
            />
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
    alignItems: "center",
    width: "100%",
  },
  top: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  input: {
    flex: 10,
  },
  bookmark: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginLeft: 20,
    flex: 1,
  },
  listContainer: {
    paddingTop: 30,
    width: "90%",
  },
  num: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardContainer: {
    paddingTop: 20,
  },
});

ScholarShipList.propTypes = {
  navigation: PropTypes.object,
};
