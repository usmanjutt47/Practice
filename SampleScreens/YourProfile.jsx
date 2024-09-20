import { View, Text } from "react-native";
import React from "react";

export default function YourProfile({ drawerStyles }) {
  return (
    <View
      style={{
        ...drawerStyles,
        height: "100%",
        width: "100%",
        backgroundColor: "#f3f3f3",
      }}
    >
      <Text>YourProfile</Text>
    </View>
  );
}
