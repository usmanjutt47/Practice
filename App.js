import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import FirstImageCarousel from "./screens/FirstImageCarousel/FirstImageCarousel";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ ...TransitionPresets.ModalSlideFromBottomIOS }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="1"
          component={FirstImageCarousel}
          options={{ title: "Image Carousel" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
