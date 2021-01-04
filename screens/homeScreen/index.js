import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Linking } from "expo";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import ShowMap from "./showMap";
import Top from "./top";
import CustomText from "../../atoms/text";
import Button from "../../components/button";

export default function Home() {
  const [map, setMap] = React.useState(false);
  const [userLocation, setUserLocation] = React.useState(null);

  React.useEffect(() => {
    async function googleStuff() {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.LOCATION
      );

      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });

      const { latitude, longitude } = location.coords;
      setUserLocation({ latitude, longitude });
      setMap(true);
    }
    googleStuff();
  }, []);

  console.log({ userLocation, map });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Top />
          <View>
            {map && (
              <ShowMap
                latitude={userLocation ? userLocation.latitude : null}
                longitude={userLocation ? userLocation.longitude : null}
              />
            )}
            {!map && (
              <View>
                <CustomText>We need your location data...</CustomText>
                <Button
                  onPress={() => Linking.openURL("app-settings:")}
                  title="Go To Permissions"
                />
              </View>
            )}
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
  },
});
