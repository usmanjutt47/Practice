import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function MainLayout() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          backgroundColor: "#f4f6f6",
          height: 50,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 44,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text>Drawer</Text>
      </View>
    </View>
  );
}
