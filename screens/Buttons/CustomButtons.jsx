import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AwesomeButton, {
  ThemedButton,
} from "react-native-really-awesome-button";

export default function CustomButtons() {
  const handleProgress = (release) => setTimeout(release, 1000);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.title}>
          <Text style={styles.title__text}>Bruce theme base</Text>
        </View>
        <ThemedButton name="bruce" type="primary" style={styles.button}>
          Primary
        </ThemedButton>
        <ThemedButton name="bruce" type="secondary" style={styles.button}>
          Secondary
        </ThemedButton>
        <ThemedButton name="bruce" type="anchor" style={styles.button}>
          Anchor
        </ThemedButton>
        <ThemedButton name="bruce" type="danger" style={styles.button}>
          Anchor
        </ThemedButton>
        <ThemedButton name="bruce" type="danger" disabled style={styles.button}>
          Anchor
        </ThemedButton>
      </View>
      <View style={styles.section}>
        <View style={styles.title}>
          <Text style={styles.title__text}>Bruce theme progress</Text>
        </View>
        <ThemedButton
          progress
          name="bruce"
          type="primary"
          onPress={handleProgress}
          style={styles.button}
        >
          Primary
        </ThemedButton>
        <ThemedButton
          progress
          name="bruce"
          type="danger"
          onPress={handleProgress}
          style={styles.button}
        >
          Danger
        </ThemedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  section: {},
  title: {
    marginBottom: 20,
    alignItems: "center",
  },
  title__text: {
    fontWeight: "600",
  },
  button: {
    marginBottom: 16,
  },
});
