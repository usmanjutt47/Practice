import { View, Text, ImageBackground } from "react-native";
import React from "react";

export default function HomeDrawer({ drawerStyles }) {
  return (
    <ImageBackground
      style={{
        height: "100%",
        width: "100%",
        ...drawerStyles,
        backgroundColor: "#f3f3f3",
        justifyContent: "center",
      }}
      source={require("../assets/images/homeBackground.png")}
    >
      <Text style={{ textAlign: "center", fontSize: 25 }}>Home Drawer</Text>
    </ImageBackground>
  );
}
