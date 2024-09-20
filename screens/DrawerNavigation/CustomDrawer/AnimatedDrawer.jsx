import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import {
  Ionicons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import Home from "../../../SampleScreens/Home";
import StoriesInQue from "../../../SampleScreens/StoriesInQue";
import LikedStories from "../../../SampleScreens/LikedStories";
import ChangePassword from "../../../SampleScreens/ChangePassword";
import RateYourExperience from "../../../SampleScreens/RateYourExperience";
import ContactUs from "../../../SampleScreens/ContactUs";
import YourProfile from "../../../SampleScreens/YourProfile";
import TermsAndConditions from "../../../SampleScreens/TermsAndConditions";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const AnimatedDrawer = () => {
  const navigation = useNavigation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("Home");
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const borderRadius = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const openDrawer = (drawerOpen) => setDrawerOpen(drawerOpen);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale, {
        toValue: drawerOpen ? 0.85 : 1,
        duration: 300,
        easing: Easing.bezier(0.04, 0.86, 0.72, 0.99),
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: drawerOpen ? 250 : 0,
        duration: 300,
        easing: Easing.bezier(0.04, 0.86, 0.72, 0.99),
        useNativeDriver: true,
      }),
      Animated.timing(borderRadius, {
        toValue: drawerOpen ? 60 : 0,
        duration: 300,
        easing: Easing.bezier(0.04, 0.86, 0.72, 0.99),
        useNativeDriver: true,
      }),
      Animated.timing(rotation, {
        toValue: drawerOpen ? -0.2 : 0,
        duration: 300,
        easing: Easing.bezier(0.04, 0.86, 0.72, 0.99),
        useNativeDriver: true,
      }),
    ]).start();
  }, [openDrawer]);

  const renderContent = useMemo(() => {
    switch (currentMenu) {
      case "Home":
        return drawerOpen ? (
          <View
            style={{
              backgroundColor: "#ffffffa9",
              paddingLeft: 20,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                borderRadius: 40,
                overflow: "hidden",
                padding: 0,
                marginTop: -20,
              }}
            >
              <Home />
            </View>
          </View>
        ) : (
          <Home />
        );
      case "StoriesInQue":
        return <StoriesInQue />;
      case "LikedStories":
        return <LikedStories />;
      case "LikedStories":
        return <LikedStories />;
      case "ChangePassword":
        return <ChangePassword />;
      case "RateYourExperience":
        return <RateYourExperience />;
      case "ContactUs":
        return <ContactUs />;
      case "PrivacyPolicy":
        return <TermsAndConditions />;
      case "YourProfile":
        return <YourProfile />;
      default:
        return null;
    }
  }, [currentMenu, drawerOpen]);

  return (
    <>
      <StatusBar barStyle="dark-content" translucent={true} />
      <ImageBackground
        source={require("../../../assets/images/back.png")}
        style={{ width: "100%", height: "100%" }}
      >
        {currentMenu === "Home" ? (
          <Animated.View
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              overflow: "hidden",
              right: 0,
              bottom: 0,
              zIndex: 100,
              transform: [
                { scale },
                { translateX },
                {
                  rotate: rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"],
                  }),
                },
              ],
              borderRadius,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                position: "absolute",
                top: 10,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 59,
                  height: 59,
                  backgroundColor: "#fff",
                  borderRadius: 30,
                  justifyContent: "center",
                }}
                onPress={() => openDrawer(!drawerOpen)}
              >
                <Ionicons
                  name={drawerOpen ? "close" : "menu"}
                  size={30}
                  color="black"
                  style={{ alignSelf: "center" }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../../assets/images/profilePhotot.png")}
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                />
              </TouchableOpacity>
            </View>

            <Animated.View>{renderContent}</Animated.View>
          </Animated.View>
        ) : (
          renderContent
        )}
      </ImageBackground>
      {currentMenu === "Home" && (
        <View style={{ position: "absolute", width: 130, marginLeft: 10 }}>
          <View style={styles.container}>
            <Image
              source={require("../../../assets/images/profilePhotot.png")}
              style={styles.profileImage}
            />
            <Text style={styles.name}>Hi, Hammad</Text>
          </View>

          <View
            style={[
              styles.screenContainer,
              {
                backgroundColor:
                  currentMenu === "Home" ? "#8075B8" : "transparent",
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setCurrentMenu("Home");
                openDrawer(!drawerOpen);
              }}
              style={styles.screenInnerContainer}
            >
              <AntDesign
                name="home"
                size={17}
                color="#fff"
                style={styles.icons}
              />
              <Text
                style={[
                  styles.text,
                  {
                    color: currentMenu === "Home" ? "#fff" : "#fff",
                    fontFamily:
                      currentMenu === "Home" ? "Work Sans Bold" : "Work Sans",
                  },
                ]}
              >
                Home
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.screenContainer,
              {
                backgroundColor:
                  currentMenu === "YourProfile" ? "#8075B8" : "transparent",
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.screenInnerContainer,
                {
                  backgroundColor:
                    currentMenu === "YourProfile" ? "#8075B8" : "transparent",
                },
              ]}
              onPress={() => {
                setCurrentMenu("YourProfile");
                openDrawer(!drawerOpen);
              }}
            >
              <FontAwesome5
                name="user"
                size={17}
                color="#fff"
                style={styles.icons}
              />
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily:
                      currentMenu === "YourProfile"
                        ? "Work Sans Bold"
                        : "Work Sans",
                  },
                ]}
              >
                Your Profile
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.screenContainer,
              {
                backgroundColor:
                  currentMenu === "StoriesInQue" ? "#8075B8" : "transparent",
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.screenInnerContainer,
                {
                  backgroundColor:
                    currentMenu === "StoriesInQue" ? "#8075B8" : "transparent",
                },
              ]}
              onPress={() => {
                setCurrentMenu("StoriesInQue");
                openDrawer(!drawerOpen);
              }}
            >
              <FontAwesome5
                name="plus"
                size={17}
                color="#fff"
                style={styles.icons}
              />
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily:
                      currentMenu === "StoriesInQue"
                        ? "Work Sans Bold"
                        : "Work Sans",
                  },
                ]}
              >
                Stories in Que
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.screenContainer,
              {
                backgroundColor:
                  currentMenu === "LikedStories" ? "#8075B8" : "transparent",
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.screenInnerContainer,
                {
                  backgroundColor:
                    currentMenu === "LikedStories" ? "#8075B8" : "transparent",
                },
              ]}
              onPress={() => {
                setCurrentMenu("LikedStories");
                openDrawer(!drawerOpen);
              }}
            >
              <AntDesign
                name="hearto"
                size={17}
                color="#fff"
                style={styles.icons}
              />
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily:
                      currentMenu === "StoriesInQue"
                        ? "Work Sans Bold"
                        : "Work Sans",
                  },
                ]}
              >
                Liked Stories
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.screenContainer,
              {
                backgroundColor:
                  currentMenu === "RateYourExperience"
                    ? "#8075B8"
                    : "transparent",
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.screenInnerContainer,
                {
                  backgroundColor:
                    currentMenu === "RateYourExperience"
                      ? "#8075B8"
                      : "transparent",
                },
              ]}
              onPress={() => {
                setCurrentMenu("RateYourExperience");
                openDrawer(!drawerOpen);
              }}
            >
              <AntDesign
                name="copy1"
                size={17}
                color="#fff"
                style={styles.icons}
              />
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily:
                      currentMenu === "StoriesInQue"
                        ? "Work Sans Bold"
                        : "Work Sans",
                  },
                ]}
              >
                Rate Experience
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.screenContainer}>
            <TouchableOpacity
              style={[
                styles.screenInnerContainer,
                {
                  backgroundColor:
                    currentMenu === "ContactUs" ? "#8075B8" : "transparent",
                },
              ]}
              onPress={() => {
                setCurrentMenu("ContactUs");
                openDrawer(!drawerOpen);
              }}
            >
              <AntDesign
                name="contacts"
                size={17}
                color="#fff"
                style={styles.icons}
              />
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily:
                      currentMenu === "StoriesInQue"
                        ? "Work Sans Bold"
                        : "Work Sans",
                  },
                ]}
              >
                Contact Us
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.screenContainer,
              {
                backgroundColor:
                  currentMenu === "PrivacyPolicy" ? "#8075B8" : "transparent",
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.screenInnerContainer,
                {
                  backgroundColor:
                    currentMenu === "PrivacyPolicy" ? "#8075B8" : "transparent",
                },
              ]}
              onPress={() => {
                setCurrentMenu("PrivacyPolicy");
                openDrawer(!drawerOpen);
              }}
            >
              <AntDesign
                name="lock1"
                size={17}
                color="#fff"
                style={styles.icons}
              />
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily:
                      currentMenu === "PrivacyPolicy"
                        ? "Work Sans Bold"
                        : "Work Sans",
                  },
                ]}
              >
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <FontAwesome
              name="share"
              size={24}
              color="#fff"
              style={styles.shareIcon}
            />
            <Text style={styles.buttonText}>Share This App</Text>
          </TouchableOpacity>
          <View style={styles.lineContainer}></View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={styles.logoutButton}
          >
            <MaterialIcons
              name="logout"
              size={24}
              color="#FF0000"
              style={styles.logoutIcon}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default AnimatedDrawer;

const styles = StyleSheet.create({
  container: {
    marginTop: "100%",
    marginLeft: 20,
    marginBottom: 40,
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  name: {
    color: "#fff",
    marginTop: 10,
    fontFamily: "Work Sans Bold",
    opacity: 1,
  },
  screenContainer: {
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    marginTop: "10%",
    flexDirection: "row",
    width: 190,
    marginLeft: 10,
  },
  screenInnerContainer: {
    alignSelf: "center",
    width: "100%",
    borderRadius: 20,
  },
  icons: {
    alignSelf: "center",
    position: "absolute",
    left: 0,
    marginLeft: 15,
    justifyContent: "center",
    marginTop: 3,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 40,
  },
  buttonContainer: {
    backgroundColor: "transparent",
    height: 45,
    width: 171,
    borderRadius: 67,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    flexDirection: "row",
    margin: 20,
  },
  shareIcon: {
    alignSelf: "center",
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 14,
  },
  lineContainer: {
    borderWidth: 1,
    width: 167,
    marginLeft: 15,
    borderColor: "#E08491",
  },
  logoutButton: {
    backgroundColor: "#fff",
    height: 45,
    width: 137,
    borderRadius: 67,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    flexDirection: "row",
    margin: 20,
  },
  logoutIcon: {
    alignSelf: "center",
    marginRight: 10,
  },
  logoutText: {
    color: "#FF0000",
    alignSelf: "center",
    fontSize: 16,
  },
});
