import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TextInputScreen from "./TextInputScreen";

export default function InputHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <TextInputScreen
          containerStyle={{ marginHorizontal: 20 }}
          placeholder={"Email"}
          onChangeText={setEmail}
        />
        <TextInputScreen
          containerStyle={{ marginHorizontal: 20, marginTop: 10 }}
          placeholder={"Password"}
          onChangeText={setPassword}
          error={passwordError}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            if (password.length < 6) {
              setPasswordError("The password is to short");
            } else {
              setPasswordError("");
            }
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  loginButton: {
    width: 100,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});
