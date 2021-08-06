import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import PropTypes from "prop-types";

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
    ></MapView>
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
