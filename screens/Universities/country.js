import React from "react";
import PropTypes from "prop-types";
import Container from "../schoolScreen/container";
import CustomText from "../../atoms/text";
import { StyleSheet, View } from "react-native";
import UniversityCard from "../../components/universityCard";
import colors from "../../atoms/colors";

const schools = [
  {
    id: "1",
    name: "Nnamdi Azikiwe University",
    address: "Along Enugu-Onitsha Expressway, Ifite Road, 420110, Awka",
    logo: "https://imgr.search.brave.com/jWRhZwjH84tk9A4Qs3r8Dp2_0KJOPDAhQZf2EHS6Pg4/fit/549/400/no/1/aHR0cHM6Ly93d3cu/Y3VycmVudHNjaG9v/bG5ld3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAy/L1VOSVpJSy1MT0dP/LmpwZw",
  },
  {
    id: "2",
    name: "University of Lagos",
    address: "University of Lagos, University Road Lagos Mainland Akoka, Yaba, Lagos",
    logo: "https://imgr.search.brave.com/uUAdHd8_RBCqof8lQXTVIbPz2bNRVEb0Efj_aJ-CVbA/fit/1024/1024/no/1/aHR0cDovL3d3dy5v/bmxpbmVkYWlseXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzExL1VOSUxB/Ry0yMDE1LTJuZC1C/YXRjaC1BZG1pc3Np/b24tTGlzdC5wbmc",
  },
];

/**
 * @param {{ navigation: { goBack: () => any; navigate: (arg0: string) => void; }; }} props
 */
export default function Country(props) {
  return (
    <Container name="Universities" back={() => props.navigation.goBack()}>
      <CustomText style={{ paddingBottom: 16 }}>Select a University</CustomText>
      <View style={styles.listContainer}>
        <View style={styles.num}>
          <CustomText type="medium" style={{ color: colors.notBlack, fontSize: 14 }}>
            2 schools
          </CustomText>
          <CustomText type="medium" style={{ color: colors.primary, fontSize: 14 }}>
            Sort by
          </CustomText>
        </View>
        <View style={styles.cardContainer}>
          {schools.map((school) => (
            <UniversityCard
              key={school.id}
              name={school.name}
              image={school.logo}
              address={school.address}
              onPress={() => props.navigation.navigate("uni")}
            />
          ))}
        </View>
      </View>
    </Container>
  );
}

Country.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 30,
    width: "100%",
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
