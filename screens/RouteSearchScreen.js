import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, Alert } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GOOGLE_API_KEY = "AIzaSyAWsjMg5zDgLPZ3kGl1109vZK1SrHKuyWc"; // Replace with your Google API Key

const RouteSearchScreen = () => {
  const [originCoords, setOriginCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [region, setRegion] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const handleSubmit = () => {
    // if (originCoords && destinationCoords) {
    navigation.navigate("RouteList", { originCoords, destinationCoords });
    // } else {
    //   Alert.alert('Please select valid origin and destination');
    // }
  };

  const onPlaceSelected = (data, details, setCoords) => {
    const { lat, lng } = details.geometry.location;
    setCoords({
      latitude: lat,
      longitude: lng,
    });
  };

  return (
    <View style={styles.container}>
      {region ? (
        <MapView
          style={styles.map}
          initialRegion={region}
          showsUserLocation={true}
        >
          {originCoords && (
            <Marker coordinate={originCoords} title="Origin" pinColor="green" />
          )}
          {destinationCoords && (
            <Marker
              coordinate={destinationCoords}
              title="Destination"
              pinColor="red"
            />
          )}
          {originCoords && destinationCoords && (
            <Polyline
              coordinates={[originCoords, destinationCoords]}
              strokeColor="#000"
              strokeWidth={3}
            />
          )}
        </MapView>
      ) : (
        <View style={styles.loadingContainer}>
          <Text>Loading map...</Text>
        </View>
      )}

      <GooglePlacesAutocomplete
        placeholder="Enter origin"
        onPress={(data, details = null) => {
          onPlaceSelected(data, details, setOriginCoords);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
        fetchDetails={true}
        styles={{
          container: {
            position: "absolute",
            top: 40,
            left: 10,
            right: 10,
            zIndex: 1,
          },
          textInputContainer: {
            backgroundColor: "white",
            borderRadius: 5,
            zIndex: 2,
          },
          textInput: {
            height: 44,
            paddingHorizontal: 10,
            fontSize: 16,
          },
          listView: {
            zIndex: 3,
          },
        }}
        listViewDisplayed={true}
      />

      <GooglePlacesAutocomplete
        placeholder="Enter destination"
        onPress={(data, details = null) => {
          onPlaceSelected(data, details, setDestinationCoords);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
        fetchDetails={true}
        styles={{
          container: {
            position: "absolute",
            top: 100,
            left: 10,
            right: 10,
            zIndex: 1,
          },
          textInputContainer: {
            backgroundColor: "white",
            borderRadius: 5,
            zIndex: 2,
          },
          textInput: {
            height: 44,
            paddingHorizontal: 10,
            fontSize: 16,
          },
          listView: {
            zIndex: 3,
          },
        }}
        listViewDisplayed={true}
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default RouteSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 10,
    right: 10,
  },
});
