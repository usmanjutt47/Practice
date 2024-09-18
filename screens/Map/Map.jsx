import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [search, setSearch] = useState("");
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  useEffect(() => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        1000
      );
    }
  }, [location]);

  const handleCurrentLocationPress = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "Unable to access current location");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);

    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
        1000
      );
    }
  };

  const handleSearchSubmit = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Unable to access location");
        return;
      }

      const response = await Location.geocodeAsync(search);

      if (response.length > 0) {
        const { latitude, longitude } = response[0];
        setLocation({ latitude, longitude });

        if (mapRef.current) {
          mapRef.current.animateToRegion(
            {
              latitude,
              longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            },
            1500
          );
        }
        setSearch("");
      } else {
        Alert.alert("Error", "Location not found");
        console.error(
          "Geocoding API Error: Location not found for query:",
          search
        );
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while searching");
      console.error("Search Error:", error);
    }
  };

  const handleClearSearch = () => {
    setSearch("");
    Keyboard.dismiss(); // Dismiss keyboard on clear
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a location"
          value={search}
          onChangeText={setSearch}
          returnKeyType="search" // Show search key on keyboard for single word
          onSubmitEditing={handleSearchSubmit} // Trigger search on submit
        />
        {search.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearSearch}
          >
            <MaterialIcons name="cancel" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={{
          latitude: location ? location.latitude : 37.78825,
          longitude: location ? location.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        )}
      </MapView>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={handleCurrentLocationPress}
      >
        <MaterialIcons name="my-location" size={40} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locationButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  searchContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    right: 10,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  clearButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
