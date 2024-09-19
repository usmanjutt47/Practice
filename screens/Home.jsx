import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f4f6f6", alignItems: "center" }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Parallax Carousel")}
        style={{
          height: 48,
          width: "90%",
          backgroundColor: "#006816",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
          Parallax Carousel
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Tabs")}
        style={{
          height: 48,
          width: "90%",
          backgroundColor: "#003468",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
          Custom Bottom Tab
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CustomDrawer")}
        style={{
          height: 48,
          width: "90%",
          backgroundColor: "#748dea",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
          Drawer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CustomAnimatedDrawer")}
        style={{
          height: 48,
          width: "90%",
          backgroundColor: "#dd8bf3",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
          Custom Drawer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Map")}
        style={{
          height: 48,
          width: "90%",
          backgroundColor: "#a86732",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
          Map
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ImageHome")}
        style={{
          height: 48,
          width: "90%",
          backgroundColor: "#428df5",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
          Custom Image Crousel
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("InputHome")}
        style={{
          height: 48,
          width: "90%",
          backgroundColor: "#f0a535",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
          Text Input
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
