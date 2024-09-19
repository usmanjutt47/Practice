import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Alert,
  Pressable,
  TextInput,
  View,
  Keyboard,
  Text,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [search, setSearch] = useState("");
  const [mapType, setMapType] = useState("standard");
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied", "Unable to access location");
        setLoading(false);
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
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = () => {
    setSearch("");
    Keyboard.dismiss();
  };

  const toggleTo3D = () => {
    setMapType("hybrid");
  };

  const toggleToNormal = () => {
    setMapType("standard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a location"
          value={search}
          onChangeText={setSearch}
          returnKeyType="search"
          onSubmitEditing={handleSearchSubmit}
        />
        {search.length > 0 && (
          <Pressable style={styles.clearButton} onPress={handleClearSearch}>
            <MaterialIcons name="cancel" size={24} color="black" />
          </Pressable>
        )}
      </View>
      <MapView
        style={styles.map}
        ref={mapRef}
        mapType={mapType}
        initialRegion={{
          latitude: location ? location.latitude : 37.78825,
          longitude: location ? location.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsCompass={false}
        showsMyLocationButton={false}
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

      {loading && (
        <ActivityIndicator size="large" color="black" style={styles.loader} />
      )}

      <Pressable
        style={styles.locationButton}
        onPress={handleCurrentLocationPress}
      >
        <MaterialIcons name="my-location" size={30} color="black" />
      </Pressable>

      <Pressable style={styles.threeDButton} onPress={toggleTo3D}>
        <MaterialIcons name="3d-rotation" size={30} color="black" />
      </Pressable>

      <Pressable style={styles.normalButton} onPress={toggleToNormal}>
        <FontAwesome5 name="route" size={30} color="black" />
      </Pressable>
      <Pressable style={styles.compass} onPress={toggleToNormal}>
        <FontAwesome5 name="compass" size={30} color="black" />
      </Pressable>
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
    height: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
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
  clearButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  threeDButton: {
    position: "absolute",
    bottom: 80,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    height: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  normalButton: {
    position: "absolute",
    bottom: 150,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    height: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  compass: {
    position: "absolute",
    bottom: 220,
    right: 10,
    backgroundColor: "white",
    borderRadius: 20,
    height: 60,
    width: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
