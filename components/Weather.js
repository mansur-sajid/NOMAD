import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const Weather = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const goToWeatherPage = () => {
    navigation.navigate('Weather'); // Navigate to the WeatherPage when clicked
  };

  return (
    <TouchableOpacity onPress={goToWeatherPage} style={{ ...styles.container, width: screenWidth - 30 }}>
      {/* Left section with weather icon */}
      <View style={styles.leftSection}>
        <Icon name="sun-o" size={50} color="#FFA500" />
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
    fontFamily: "Georgia", // Example custom font
  },
  weatherDetail: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "Arial", // Example custom font
  },
});

export default Weather;