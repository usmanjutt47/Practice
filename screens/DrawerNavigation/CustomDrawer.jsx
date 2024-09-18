import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import {
  COLORS,
  constants,
  dummyData,
  FONTS,
  icons,
  SIZES,
} from "../../constants";
import MainLayout from "../MainLayout";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
      }}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: COLORS.white }}
      />
      <Text
        style={{ marginLeft: SIZES.radius, color: COLORS.white, fontSize: 16 }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        {/* close */}
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.closeDrawer()}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={icons.cross}
              style={{ width: 35, height: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>
        {/* profile */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("Profile")}
        >
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{ height: 50, width: 50, borderRadius: SIZES.radius }}
          />
          <View style={{ marginLeft: SIZES.radius }}>
            <Text style={{ color: COLORS.white, fontSize: 16 }}>
              {dummyData.myProfile?.name}
            </Text>
            <Text style={{ color: COLORS.white, fontSize: 14 }}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>
        {/* Drawer items */}
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          <CustomDrawerItem label={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            label={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            label={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            label={constants.screens.favourite}
            icon={icons.favourite}
          />

          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />
          <CustomDrawerItem label={"Track Your Order"} icon={icons.location} />
          <CustomDrawerItem label={"Coupon"} icon={icons.coupon} />
          <CustomDrawerItem label={"Settings"} icon={icons.setting} />
          <CustomDrawerItem label={"Invite Freind"} icon={icons.profile} />
          <CustomDrawerItem label={"Help Center"} icon={icons.help} />
        </View>
        <View style={{ marginBottom: SIZES.padding }}>
          <CustomDrawerItem
            label={"Logout"}
            icon={icons.logout}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default function CustomDrawer() {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  // const scale = interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });
  // const borderRadius = interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 26],
  // });
  // const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            flex: 1,
            width: "65%",
            paddingRight: 20,
            backgroundColor: COLORS.primary,
          },
          headerShown: true,
          drawerType: "slide",
          overlayColor: "transparent",
          sceneContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}
