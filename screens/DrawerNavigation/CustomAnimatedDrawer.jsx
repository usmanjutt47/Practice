import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerScreenWrapper from "./components/DrawerScreenWrapper";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { MaterialIcons } from "@expo/vector-icons";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <DrawerScreenWrapper>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <View
          style={{
            backgroundColor: "transparent",
            height: 50,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name="grip-lines" size={24} color="#009699" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
          >
            Welcome to the Custom Drawer
          </Text>
        </View>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
}

function PrivacyScreen() {
  const navigation = useNavigation();
  return (
    <DrawerScreenWrapper>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f3f3" }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 25, textAlign: "center" }}>
            Privacy Screen
          </Text>
        </View>
      </SafeAreaView>
    </DrawerScreenWrapper>
  );
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <DrawerItemList {...props} />
      <View
        style={{
          justifyContent: "flex-end",
          borderTopColor: "#d1cfc9",
          borderTopWidth: 1,
          padding: 20,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="log-out-outline" size={24} color="#fff" />
          <Text style={{ color: "#fff", fontSize: 18, marginLeft: 10 }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default function CustomAnimatedDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "transparent",
        drawerInactiveBackgroundColor: "transparent",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#d1cfc9",
        overlayColor: "transparent",
        drawerStyle: {
          backgroundColor: "#009699",
        },
        sceneContainerStyle: {
          backgroundColor: "#009699",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy"
        component={PrivacyScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="lock" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
