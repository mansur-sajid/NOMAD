import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Weather = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 10000, // Adjust the duration here (in milliseconds)
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const goToWeatherPage = () => {
    navigation.navigate("Weather"); // Navigate to the WeatherPage when clicked
  };

  return (
    <TouchableOpacity
      onPress={goToWeatherPage}
      style={{ ...styles.container, width: screenWidth - 30 }}
    >
      {/* Left section with weather icon */}
      <View style={styles.leftSection}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <Icon name="sun-o" size={50} color="#FFA500" />
        </Animated.View>
      </View>

      {/* Right section with weather update */}
      <View style={styles.rightSection}>
        <Text style={styles.weatherUpdate}>Weather Update</Text>
        <Text style={styles.weatherDetail}>Current Temperature: 25°C</Text>
        <Text style={styles.weatherDetail}>Forecast: Sunny</Text>
        {/* Add more weather details as needed */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    marginLeft: 5,
  },
  leftSection: {
    marginRight: 10,
  },
  rightSection: {
    flex: 1,
  },
  weatherUpdate: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  weatherDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Weather;
