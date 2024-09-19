import React, { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
} from "react-native-reanimated";
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";
import { FontAwesome5, AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Slider from "@react-native-community/slider";

const Card = ({
  maxVisibleItems,
  item,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  prevIndex,
  onChange,
  onPress,
}) => {
  const navigation = useNavigation();
  const IMAGE_WIDTH = 371;
  const IMAGE_HEIGHT = 311;

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-20, 0, 20] // Reduced translation values
    );
    const translateY2 = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [-100, 0, 100] // Reduced translation values
    );
    const scale = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [0.95, 1, 1.05] // Reduced scale values
    );
    const opacity = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [1, 1, 0]
    );
    return {
      transform: [
        { translateY: index === prevIndex.value ? translateY2 : translateY },
        { scale },
      ],
      opacity:
        index < currentIndex.value + maxVisibleItems - 1
          ? opacity
          : index === currentIndex.value + maxVisibleItems - 1
          ? withTiming(1)
          : withTiming(0),
    };
  });

  return (
    <>
      <FlingGestureHandler
        key={"up"}
        direction={Directions.UP}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (currentIndex.value !== 0) {
              animatedValue.value = withTiming((currentIndex.value -= 1));
              prevIndex.value = currentIndex.value - 1;
              onChange(currentIndex.value - 1);
            }
          }
        }}
      >
        <FlingGestureHandler
          key={"down"}
          direction={Directions.DOWN}
          onHandlerStateChange={(ev) => {
            if (ev.nativeEvent.state === State.END) {
              if (currentIndex.value !== dataLength - 1) {
                animatedValue.value = withTiming((currentIndex.value += 1));
                prevIndex.value = currentIndex.value + 1;
              }
            }
          }}
        >
          <Animated.View
            style={[
              styles.image,
              { zIndex: dataLength - index },
              animatedStyle,
            ]}
          >
            <Pressable>
              <Animated.Image
                source={item.image}
                style={[
                  styles.animatedImage,
                  {
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                  },
                ]}
              />
            </Pressable>
          </Animated.View>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </>
  );
};

const CustomImageCrousel = ({ data, maxVisibleItems, onPress }) => {
  const animatedValue = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const prevIndex = useSharedValue(0);
  const navigation = useNavigation();

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {data.map((item, index) => (
        <Card
          maxVisibleItems={maxVisibleItems}
          item={item}
          index={index}
          dataLength={data.length}
          animatedValue={animatedValue}
          currentIndex={currentIndex}
          prevIndex={prevIndex}
          key={index}
          onChange={(index) => setActiveIndex(index)}
          onPress={onPress}
        />
      ))}
    </>
  );
};

export default CustomImageCrousel;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    borderRadius: 20,
  },
  animatedImage: {
    borderRadius: 20,
  },
  sliderText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  text2: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 5,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "regular",
  },
  text3: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "regular",
  },
  text4: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "regular",
    marginBottom: 10,
  },
  textContainer: {
    height: 37,
    width: 121,
    backgroundColor: "#fff",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 10,
  },
  storyText: {
    color: "#000",
    alignSelf: "center",
    fontSize: 15,
    fontFamily: "Work Sans Bold",
  },
  heartContainer: {
    height: 37,
    width: 37,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "transparent",
    borderRadius: 23,
    justifyContent: "center",
    marginRight: 10,
  },
  plusContainer: {
    height: 37,
    width: 37,
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: 23,
    marginRight: 10,
  },
  LinearParent: {
    backgroundColor: "#676767",
    height: 61,
    width: Dimensions.get("window").width - 60,
    position: "relative",
    borderRadius: 23,
    alignSelf: "center",
    marginBottom: 10,
    zIndex: 1000,
  },
  sliderContainer: {
    width: 313,
    height: 40,
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    zIndex: 99,
  },
  gradient: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    height: 7,
    transform: [{ translateY: -2 }],
    borderRadius: 2,
  },
  slider: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignSelf: "center",
  },
});
