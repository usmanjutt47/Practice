import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomTabBar from "../BottomTabs/CustomTabBar"; // Adjust the path as needed
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function Sample() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: "red" }]}>
      <View
        style={{
          backgroundColor: "#f4f6f6",
          height: 50,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
          gap: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 44,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text>OnBoarding Screen</Text>
      </View>
    </SafeAreaView>
  );
}

function Sample2() {
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: "blue" }]}>
      <Text>Sample2</Text>
    </SafeAreaView>
  );
}

function Sample3() {
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: "pink" }]}>
      <Text>Sample3</Text>
    </SafeAreaView>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Sample} />
      <Tab.Screen name="Favourite" component={Sample2} />
      <Tab.Screen name="Profile" component={Sample3} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f4f6f6",
  },
});

export default BottomTabs;
