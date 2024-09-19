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
import Map from "./screens/Map/Map";
import CustomImageCrousel from "./screens/ImageSlider/CustomImageCrousel";
import ImageHome from "./screens/ImageSlider/ImageHome";
import TextInputScreen from "./screens/TextInput/TextInputScreen";
import InputHome from "./screens/TextInput/InputHome";
import OrderStatusScreen from "./screens/OrderStatus/VerticalOrderStatusScreen";
import VerticalOrderStatusScreen from "./screens/OrderStatus/VerticalOrderStatusScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Parallax Carousel" component={FirstImageCarousel} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="ImageSlider" component={CustomImageCrousel} />
        <Stack.Screen name="ImageHome" component={ImageHome} />
        <Stack.Screen name="TextInput" component={TextInputScreen} />
        <Stack.Screen name="InputHome" component={InputHome} />
        <Stack.Screen
          name="OrderStatusScreen"
          component={VerticalOrderStatusScreen}
        />
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
