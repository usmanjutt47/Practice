import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";

const ButtonApp = () => {
  return (
    <View style={styles.container}>
      {/* RED BUTTON */}
      <Button
        text="Click"
        buttonCustomStyles={{
          backgroundColor: "#FF5050",
          borderRadius: 4,
        }}
        textCustomStyles={{
          color: "#000",
        }}
        onClick={() => {
          alert("Clicked!");
        }}
      />

      {/* BLUE BUTTON */}

      <Button
        text="Click"
        buttonCustomStyles={{
          backgroundColor: "#6495ED",
          borderRadius: 8,
          marginTop: 10,
        }}
        textCustomStyles={{
          color: "#FFF",
        }}
        onClick={() => {
          alert("Clicked!");
        }}
      />

      {/* DARK BUTTON */}

      <Button
        text="Click"
        buttonCustomStyles={{
          backgroundColor: "#505050",
          borderRadius: 15,
          marginTop: 10,
        }}
        textCustomStyles={{
          color: "#FFF",
        }}
        onClick={() => {
          alert("Clicked!");
        }}
      />

      {/* ORANGE BUTTON */}

      <Button
        text="Click"
        buttonCustomStyles={{
          backgroundColor: "#FFBF00",
          borderRadius: 50,
          marginTop: 10,
        }}
        textCustomStyles={{
          color: "#505050",
        }}
        onClick={() => {
          alert("Clicked!");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ButtonApp;
