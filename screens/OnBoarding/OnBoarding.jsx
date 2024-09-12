import * as React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

const images = [
  "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80",
  "https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80",
  "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80",
  "https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80",
  "https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80",
  "https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80",
  "https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80",
  "https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80",
  "https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80",
  "https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80",
];
const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
  avatar_url: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 40
  )}.jpg`,
}));

export default function OnBoarding() {
  const navigation = useNavigation();
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView
      style={{
        width,
        alignItems: "center",
        backgroundColor: "#f4f6f6",
      }}
    >
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
        <Text>OnBoarding Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
});
