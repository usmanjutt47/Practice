import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlatList
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const { bottom } = useSafeAreaInsets();
  const [tabWidths, setTabWidths] = useState([]);
  const translateX = useRef(new Animated.Value(0)).current;
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const scaleValue = useRef(new Animated.Value(1)).current; // For bubble animation

  useEffect(() => {
    const activeTabWidth = tabWidths[state.index] || 0;
    setIndicatorWidth(activeTabWidth);

    const totalTranslateX = tabWidths.reduce((sum, width, i) => {
      return i < state.index ? sum + width : sum;
    }, 0);

    Animated.spring(translateX, {
      toValue: totalTranslateX + activeTabWidth / 2 - indicatorWidth / 2,
      useNativeDriver: true,
    }).start();

    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2, // Slightly enlarge
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.spring(scaleValue, {
        toValue: 1, // Back to original size
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, [state.index, tabWidths]);

  const handlePress = (index) => {
    navigation.navigate(state.routeNames[index]);
  };

  const handleLayout = (index, event) => {
    const { width } = event.nativeEvent.layout;
    setTabWidths((prevWidths) => {
      const newWidths = [...prevWidths];
      newWidths[index] = width;
      return newWidths;
    });
  };

  return (
    <View style={[styles.tabBar, { paddingBottom: bottom }]}>
      <Animated.View
        style={[
          styles.indicator,
          {
            width: indicatorWidth,
            transform: [{ translateX }],
          },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isActive = state.index === index;

        return (
          <TouchableOpacity
            key={index}
            style={styles.tabItem}
            onPress={() => handlePress(index)}
            onLayout={(event) => handleLayout(index, event)}
          >
            <Animated.View
              style={[
                styles.iconContainer,
                { transform: [{ scale: isActive ? scaleValue : 1 }] },
              ]}
            >
              <FontAwesome
                name={index === 0 ? "home" : index === 1 ? "star" : "user"}
                size={24}
                color={isActive ? "#fff" : "#888"}
              />
              {isActive && (
                <Text style={[styles.label, { color: "#fff" }]}>{label}</Text>
              )}
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderTopWidth: 0,
    borderTopColor: "#ddd",
    position: "absolute",
    elevation: 0,
    bottom: 16,
    left: 16,
    right: 16,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    position: "relative",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    marginLeft: 4,
  },
  indicator: {
    position: "absolute",
    bottom: 10,
    height: 50,
    backgroundColor: "#003468",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
    left: 5,
  },
});

export default CustomTabBar;
