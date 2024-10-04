import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UseState() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleTodos = () => {
    if (input !== "") {
      setTodos([...todos, { key: Date.now().toString(), text: input }]);
      setInput("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>
          Today's tasks, not tomorrow! Make your goals easier
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Todos"
            value={input}
            onChangeText={(text) => setInput(text)}
            multiline={true}
          />
          <TouchableHighlight style={styles.button} onPress={handleTodos}>
            <Text style={styles.buttonText}>Add Todo</Text>
          </TouchableHighlight>
        </View>
        <FlatList
          data={todos}
          contentContainerStyle={{
            marginTop: 20,
          }}
          renderItem={({ item }) => (
            <Text
              style={{
                width: "100%",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#A1D6E2",
                paddingLeft: 10,
                marginBottom: 10,
                paddingVertical: 10,
              }}
              numberOfLines={100}
              ellipsizeMode="tail"
            >
              {item.text}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    width: "90%",
    alignSelf: "center",
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    height: 48,
    width: "78%",
    borderWidth: 1,
    borderColor: "#A1D6E2",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    height: 48,
    width: "20%",
    backgroundColor: "#1995AD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
  },
});
