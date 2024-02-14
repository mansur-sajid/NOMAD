// PictureSlideshow.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const PictureSlideShow = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView horizontal={true} style={styles.container}>
      <ImageWithOverlay
        text="Turn solo adventures into shared memories."
        source={require("../assets/img1.jpeg")}
        screenWidth={screenWidth}
      />
      <ImageWithOverlay
        text="Find travel buddies who share your passions."
        source={require("../assets/img2.jpeg")}
        screenWidth={screenWidth}
      />
      <ImageWithOverlay
        text="Download the app and join the community."
        source={require("../assets/img3.jpeg")}
        screenWidth={screenWidth}
      />
      {/* Add more images as needed */}
    </ScrollView>
  );
};

const ImageWithOverlay = ({ text, source, screenWidth }) => {
  return (
    <View style={{ ...styles.imageContainer, width: screenWidth - 30 }}>
      <Image style={styles.image} source={source} />
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
  },
  imageContainer: {
    position: "relative",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  image: {
    width: "100%",
    height: 200, // Adjust the height as needed
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust opacity as needed
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  overlayText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 80,
  },
});

export default PictureSlideShow;
