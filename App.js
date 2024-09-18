import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import FirstImageCarousel from "./screens/FirstImageCarousel/FirstImageCarousel";
import Tabs from "./screens/BottomTabs/Tabs";
import CustomDrawer from "./screens/DrawerNavigation/CustomDrawer";
import CustomAnimatedDrawer from "./screens/DrawerNavigation/CustomAnimatedDrawer";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Parallax Carousel" component={FirstImageCarousel} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
        <Stack.Screen
          name="CustomAnimatedDrawer"
          component={CustomAnimatedDrawer}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default App;
