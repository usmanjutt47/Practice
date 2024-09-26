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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Parallax Carousel")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Parallax Carousel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Tabs")}
          style={[styles.button, { backgroundColor: "#003468" }]}
        >
          <Text style={styles.buttonText}>Custom Bottom Tab</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CustomDrawer")}
          style={[styles.button, { backgroundColor: "#748dea" }]}
        >
          <Text style={styles.buttonText}>Drawer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CustomAnimatedDrawer")}
          style={[styles.button, { backgroundColor: "#dd8bf3" }]}
        >
          <Text style={styles.buttonText}>Custom Drawer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
          style={[styles.button, { backgroundColor: "#a86732" }]}
        >
          <Text style={styles.buttonText}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ImageHome")}
          style={[styles.button, { backgroundColor: "#428df5" }]}
        >
          <Text style={styles.buttonText}>Custom Image Crousel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("InputHome")}
          style={[styles.button, { backgroundColor: "#f0a535" }]}
        >
          <Text style={styles.buttonText}>Text Input</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("OrderStatusScreen")}
          style={[styles.button, { backgroundColor: "#5332a8" }]}
        >
          <Text style={styles.buttonText}>Vertical Order Status</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("AnimatedDrawer")}
          style={[styles.button, { backgroundColor: "#d1f542" }]}
        >
          <Text style={styles.buttonText}>Vertical Order Status</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CustomButtons")}
          style={[styles.button, { backgroundColor: "#868686" }]}
        >
          <Text style={styles.buttonText}>Custom Buttons</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ButtonApp")}
          style={[styles.button, { backgroundColor: "#5332d2" }]}
        >
          <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "90%",
    backgroundColor: "#006816",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: "5%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});
