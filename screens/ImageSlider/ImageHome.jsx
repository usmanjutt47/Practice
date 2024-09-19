import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomImageCrousel from "./CustomImageCrousel";
// import CardContainer from "../screens/ImageCarousel/CardContainer";

const ImageHome = ({ drawerStyles }) => {
  const categories = ["All", "Sports", "Science", "Entertainment"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cardContainerHeight, setCardContainerHeight] = useState(0);
  const cardContainerRef = useRef(null);

  const data = [
    {
      image: require("../../assets/images/img_1.jpg"),
      text: "The Story of an",
      text2: "abandoned temple",
      text3: "In the heart of a lush forest, where the whispers of ancient ",
      text4: "spirits danced among the trees, stood a temple forgotten....",
    },
    {
      image: require("../../assets/images/img_2.jpg"),
      text: "The usman of an",
      text2: "abandoned temple",
      text3: "In the heart of a lush forest, where the whispers of ancient ",
      text4: "spirits danced among the trees, stood a temple forgotten....",
    },
    {
      image: require("../../assets/images/img_3.jpg"),
      text: "The Story of an",
      text2: "abandoned temple",
      text3: "In the heart of a lush forest, where the whispers of ancient ",
      text4: "spirits danced among the trees, stood a temple forgotten....",
    },
    {
      image: require("../../assets/images/img_4.jpg"),
      text: "The Story of an",
      text2: "abandoned temple",
      text3: "In the heart of a lush forest, where the whispers of ancient ",
      text4: "spirits danced among the trees, stood a temple forgotten....",
    },
  ];

  return (
    <View>
      <ScrollView
        horizontal
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(category)}
          >
            {selectedCategory === category ? (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#1877F2", "#FF0000"]}
                style={styles.categories}
              >
                <View style={styles.categoriesInner}>
                  <Text style={styles.categoriesText}>{category}</Text>
                </View>
              </LinearGradient>
            ) : (
              <View style={[styles.categories, styles.unselectedCategory]}>
                <View style={styles.categoriesInner}>
                  <Text style={styles.unselectedCategoryText}>{category}</Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <GestureHandlerRootView style={styles.imageHandler}>
        <View
          style={styles.imageContainer}
          ref={cardContainerRef}
          onLayout={() => {
            cardContainerRef.current.measure(
              (x, y, width, height, pageX, pageY) => {
                setCardContainerHeight(height);
              }
            );
          }}
        >
          <CustomImageCrousel data={data} maxVisibleItems={3} />
        </View>
      </GestureHandlerRootView>
    </View>
  );
};

export default ImageHome;

const styles = StyleSheet.create({
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 100,
    textAlign: "center",
  },
  scrollViewContainer: {
    height: 70,
    marginTop: 20,
    paddingLeft: 5,
  },
  scrollView: {
    flexGrow: 0,
    marginTop: 10,
    marginLeft: 22,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  categories: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 130,
    borderRadius: 30,
    marginRight: 10,
  },
  categoriesInner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  categoriesText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
  unselectedCategory: {
    backgroundColor: "#fff",
  },
  unselectedCategoryText: {
    color: "#000",
    fontSize: 16,
  },
  imageHandler: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    right: 20,
    left: 20,
    top: 500,
  },
});
