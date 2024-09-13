import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const DummyScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { backgroundColor, nextScreen } = route.params || {};

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>This is the {route.name} screen</Text>
      <Button
        title={`Go to ${nextScreen}`}
        onPress={() => navigation.navigate(nextScreen)}
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DummyScreen;
