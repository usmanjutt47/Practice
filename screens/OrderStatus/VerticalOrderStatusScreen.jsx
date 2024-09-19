import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function VerticalOrderStatusScreen() {
  const [selectedStep, setSelectedStep] = useState(1);
  const progress1 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress3 = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const start1 = () => {
    Animated.timing(progress1, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start2 = () => {
    Animated.timing(progress2, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };
  const start3 = () => {
    Animated.timing(progress3, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", alignItems: "center", paddingTop: 50 }}>
        {/* Circle Stepper */}
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 0 ? "green" : "grey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>1</Text>
        </View>
        <View
          style={{
            width: 6,
            height: 100,
            backgroundColor: "grey",
          }}
        ></View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 1 ? "green" : "grey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>2</Text>
        </View>
        <View
          style={{
            width: 6,
            height: 100,
            backgroundColor: "grey",
          }}
        ></View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 2 ? "green" : "grey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>3</Text>
        </View>
        <View
          style={{
            width: 6,
            height: 100,
            backgroundColor: "grey",
          }}
        ></View>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: selectedStep > 3 ? "green" : "grey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>4</Text>
        </View>
      </View>

      {/* Animated Progress Bar */}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          paddingTop: 50,
          position: "absolute",
          top: 80, // Adjust this value as per your requirement
        }}
      >
        <Animated.View
          style={{
            width: 6,
            height: progress1,
            backgroundColor: "green",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 6,
            height: progress2,
            marginTop: 30,
            backgroundColor: "green",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 6,
            height: progress3,
            marginTop: 30,
            backgroundColor: "green",
          }}
        ></Animated.View>
      </View>

      {/* Button for Progress */}
      {selectedStep < 4 ? (
        <TouchableOpacity
          style={{
            marginTop: 300, // Adjust this value to push the button down
            height: 50,
            width: 200,
            backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            alignSelf: "center",
          }}
          onPress={() => {
            if (selectedStep == 1) {
              start1();
            }
            if (selectedStep == 2) {
              start2();
            }
            if (selectedStep == 3) {
              start3();
            }
            if (selectedStep == 0) {
              setSelectedStep(selectedStep + 1);
            } else {
              setTimeout(() => {
                setSelectedStep(selectedStep + 1);
              }, 3000);
            }
          }}
        >
          <Text>Next Step</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            marginTop: 300, // Adjust this value to push the button down
            height: 50,
            width: 200,
            backgroundColor: "green", // Green color for "Finish"
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ color: "#fff" }}>Finish</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
