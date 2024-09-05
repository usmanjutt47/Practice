import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>
        Custom Image Slider's
      </Text>
      <Pressable
        onPress={() => navigation.navigate("1")}
        style={{
          height: 48,
          width: "90%",
          backgroundColor: "#581845",
          borderRadius: 99,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
          FirstImageCarousel
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
