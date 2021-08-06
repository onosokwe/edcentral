import React from "react";
import PropTypes from "prop-types";
import Container from "../schoolScreen/container";
import CustomText from "../../atoms/text";
import { Image, TouchableOpacity, View } from "react-native";
import colors from "../../atoms/colors";

const countries = [
  {
    id: "1",
    name: "Nigeria",
    noOfScools: 2,
    flag: "https://imgr.search.brave.com/eNQflPVmSOKODDCVnNFfG_xo-yYrz3-ibBCWrfzHjG4/fit/1200/960/no/1/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83Lzc5L0Zs/YWdfb2ZfTmlnZXJp/YS5zdmcvMTkyMHB4/LUZsYWdfb2ZfTmln/ZXJpYS5zdmcucG5n",
  },
  {
    id: "2",
    name: "Ghana",
    noOfScools: 0,
    flag: "https://imgr.search.brave.com/8VGYHOhwWvvFhEhmtb3DpaV5v3mcijc1NY0CDzBQFyQ/fit/1200/800/no/1/aHR0cHM6Ly9kcm9u/ZWxpZmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzA4/L2doYW5haWFuLWZs/YWctbGFyZ2UuanBn",
  },
  {
    id: "3",
    name: "Kenya",
    noOfScools: 0,
    flag: "https://cdn.britannica.com/15/15-004-B5D6BF80/Flag-Kenya.jpg",
  },
  {
    id: "4",
    name: "South Africa",
    noOfScools: 0,
    flag: "https://cdn.britannica.com/27/4227-004-32423B42/Flag-South-Africa.jpg",
  },
  {
    id: "5",
    name: "Uganda",
    noOfScools: 0,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/255px-Flag_of_Uganda.svg.png",
  },
  {
    id: "6",
    name: "Rwanda",
    noOfScools: 0,
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/1280px-Flag_of_Rwanda.svg.png",
  },
];

/**
 * @param {{ navigation: { goBack: () => any; navigate: (arg0: string) => void; }; }} props
 */
export default function Universities(props) {
  return (
    <Container name="Universities" back={() => props.navigation.goBack()}>
      <CustomText style={{ paddingBottom: 16 }}>Select a country</CustomText>
      <View
        style={{
          height: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {countries.map((country) => (
          <TouchableOpacity
            key={country.id}
            style={{
              padding: 8,
              width: "45%",
              height: 150.43,
              paddingHorizontal: 5,
              paddingVertical: 8,
              margin: 8,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.08,
              shadowRadius: 5,
              backgroundColor: colors.white,
              elevation: 5,
              borderRadius: 4,
            }}
            onPress={() => props.navigation.navigate("country")}
          >
            <Image
              style={{ width: "100%", height: "70%" }}
              source={{
                uri: country.flag,
              }}
            />
            <CustomText type="semiBold" style={{ color: colors.notBlack, paddingTop: 6 }}>
              {country.name}
            </CustomText>
            <CustomText style={{ color: colors.LightBlack, paddingTop: 6 }}>{country.noOfScools} schools</CustomText>
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  );
}

Universities.propTypes = {
  navigation: PropTypes.object,
};
