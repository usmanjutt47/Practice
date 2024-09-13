import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f6f6" }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "#f4f6f6",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Parallax Carousel")}
          style={{
            height: 48,
            width: "90%",
            backgroundColor: "#212f3c",
            borderRadius: 10,
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
            Parallax Carousel
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Tabs")}
          style={{
            height: 48,
            width: "90%",
            backgroundColor: "#212f3c",
            borderRadius: 10,
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
            Custom Bottom Tab
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
