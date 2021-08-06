import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import PropTypes from "prop-types";
import CustomText from "../../atoms/text";
import colors from "../../atoms/colors";

// @ts-ignore
const { PROVIDER_GOOGLE } = MapView;

export default function ShowMap({ latitude, longitude }) {
  return (
    <MapView
      followsUserLocation
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 6.6127,
        longitude: 3.3544,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      showsUserLocation
      style={styles.map}
    >
      <MapView.Marker
        coordinate={{
          latitude: 6.6127,
          longitude: 3.3544,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.white,
            padding: 3,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.08,
            shadowRadius: 5,
            elevation: 5,
            borderRadius: 6,
          }}
        >
          <Image
            source={require(// @ts-ignore
            "../../assets/images/logo.png")}
            style={{ width: 28.62, height: 39.56 }}
          />
          <CustomText style={{ backgroundColor: "white", padding: 3 }}>Edcentral</CustomText>
        </View>
      </MapView.Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

ShowMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};
