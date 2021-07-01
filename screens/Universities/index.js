import React from "react";
import PropTypes from "prop-types";
import Container from "../schoolScreen/container";
import CustomText from "../../atoms/text";
import { Image, View } from "react-native";

/**
 * @param {{ navigation: { goBack: () => any; }; }} props
 */
export default function Universities(props) {
  return (
    <Container name="Universities" back={() => props.navigation.goBack()}>
      <CustomText style={{ paddingBottom: 16 }}>Select a country</CustomText>
      <View>
        <Image
          style={{ width: 100, height: 50 }}
          source={{
            uri: "https://imgr.search.brave.com/eNQflPVmSOKODDCVnNFfG_xo-yYrz3-ibBCWrfzHjG4/fit/1200/960/no/1/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi83Lzc5L0Zs/YWdfb2ZfTmlnZXJp/YS5zdmcvMTkyMHB4/LUZsYWdfb2ZfTmln/ZXJpYS5zdmcucG5n",
          }}
        />
      </View>
    </Container>
  );
}

Universities.propTypes = {
  navigation: PropTypes.object,
};
