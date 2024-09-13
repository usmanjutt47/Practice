import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
} from "react-native-reanimated";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// Custom Animated Icon Component
function AnimatedIcon({ name, color, size, focused, family }) {
  const scale = useSharedValue(focused ? 1.5 : 1);

  // Animate scale and background color
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(scale.value) }],
  }));

  const animatedBackgroundStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scale.value,
      [1, 1.5],
      ["#fff", "#673ab7"]
    ),
    padding: 10,
    borderRadius: 20,
  }));

  React.useEffect(() => {
    scale.value = focused ? 1.5 : 1;
  }, [focused]);

  // Return the appropriate icon from the specified family
  return (
    <Animated.View style={[animatedBackgroundStyle, styles.iconContainer]}>
      <Animated.View style={animatedStyle}>
        {family === "Ionicons" ? (
          <Ionicons name={name} size={size} color={color} />
        ) : (
          <MaterialIcons name={name} size={size} color={color} />
        )}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AnimatedIcon;
