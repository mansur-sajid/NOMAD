import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Modal, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import WIcon from "react-native-vector-icons/Fontisto";
import RIcon from "react-native-vector-icons/Ionicons";

const WeatherPage = () => {
  const [currentCity, setCurrentCity] = useState("Lahore");
  const [currentTemperature, setCurrentTemperature] = useState("");
  const [currentForecast, setCurrentForecast] = useState("");
  const [currentHumidity, setCurrentHumidity] = useState("");
  const [currentWindSpeed, setCurrentWindSpeed] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [recentCities, setRecentCities] = useState(["New York", "Los Angeles"]); // Dummy recent cities
  const [forecastData, setForecastData] = useState([]); // Dummy forecast data

  useEffect(() => {
    // Fetch weather data for the current city (Lahore)
    fetchWeatherData(currentCity);
  }, []);

  useEffect(() => {
    // Update recent cities list when current city changes
    setRecentCities(prevCities => [currentCity, ...prevCities.filter(item => item !== currentCity)].slice(0, 2));
  }, [currentCity]);

  const fetchWeatherData = (city) => {
    // Simulate fetching weather data for the city
    // Dummy weather data (replace with actual data)
    const randomTemperature = Math.floor(Math.random() * (40 - 10) + 10) + "°C";
    const randomForecast = getRandomForecast();
    const randomHumidity = Math.floor(Math.random() * (100 - 20) + 20) + "%";
    const randomWindSpeed = Math.floor(Math.random() * (30 - 5) + 5) + " km/h";

    setCurrentTemperature(randomTemperature);
    setCurrentForecast(randomForecast);
    setCurrentHumidity(randomHumidity);
    setCurrentWindSpeed(randomWindSpeed);

    // Simulate fetching 5-day forecast data for the city
    // Dummy forecast data (replace with actual data)
    const dummyForecastData = generateDummyForecastData();
    setForecastData(dummyForecastData);
  };

  const getRandomForecast = () => {
    const forecasts = ["Sunny", "Cloudy", "Rainy", "Windy"];
    return forecasts[Math.floor(Math.random() * forecasts.length)];
  };

  const generateDummyForecastData = () => {
    const forecasts = [];
    for (let i = 0; i < 5; i++) {
      const day = new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", { weekday: "long" });
      const forecast = getRandomForecast();
      const temperature = Math.floor(Math.random() * (40 - 10) + 10) + "°C";
      forecasts.push({ day, forecast, temperature });
    }
    return forecasts;
  };

  const handleCityChange = (city) => {
    setCurrentCity(city);
    // Fetch weather data for the selected city
    fetchWeatherData(city);
    // Close the modal after city selection
    setModalVisible(false);
    // Add the selected city to recentCities list
    setRecentCities(prevCities => [city, ...prevCities.filter(item => item !== city)].slice(0, 2));
  };

  const handleSearch = () => {
    // Implement logic to search for the entered city
    // Fetch weather data for the searched city
    // Dummy weather data (replace with actual data)
    setCurrentCity(searchText);
    setCurrentTemperature("30°C");
    setCurrentForecast("Sunny");
    setCurrentHumidity("60%");
    setCurrentWindSpeed("10 km/h");
    // Close the modal after city search
    setModalVisible(false);
    // Add the searched city to recentCities list
    setRecentCities(prevCities => [searchText, ...prevCities.filter(item => item !== searchText)].slice(0, 2));
  };

  const renderWeatherIcon = (forecast) => {
    switch (forecast) {
      case "Sunny":
        return <Icon name="sun-o" size={60} color="#FFA500" />;
      case "Cloudy":
        return <Icon name="cloud" size={60} color="black" />;
      case "Windy":
        return <WIcon name="wind" size={60} color="black" />;
      case "Rainy":
        return <RIcon name="rainy-outline" size={60} color="black" />;
      default:
        return <Icon name="question" size={100} color="#000" />;
    }
  };

  return (
    
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.cityPicker}>
          <Text style={styles.cityPickerText}>{currentCity}</Text>
          <Icon name="chevron-down" size={20} color="#FFF" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search City..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
        <View style={styles.currentWeatherContainer}>
          <View style={styles.weatherIconContainer}>
            {renderWeatherIcon(currentForecast)}
          </View>
          <View style={styles.weatherDetailsContainer}>
            <Text style={styles.currentTemperature}>{currentTemperature}</Text>
            <Text style={styles.weatherDetail}>Forecast: {currentForecast}</Text>
            <

Text style={styles.weatherDetail}>Humidity: {currentHumidity}</Text>
            <Text style={styles.weatherDetail}>Wind Speed: {currentWindSpeed}</Text>
          </View>
        </View>
        <View style={styles.forecastContainer}>
          {forecastData.map((item, index) => (
            <View key={index} style={styles.forecastItem}>
              <Text style={styles.forecastDay}>{item.day}</Text>
              <Text style={{...styles.forecastDetail, marginRight: 20}}>{item.forecast}</Text>
              <Text style={styles.forecastDetail}>{item.temperature}</Text>
            </View>
          ))}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {recentCities.map((city, index) => (
                <TouchableOpacity key={index} onPress={() => handleCityChange(city)} style={styles.modalItem}>
                  <Text style={styles.modalItemText}>{city}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    marginLeft: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "repeat", // or "stretch"
  },
  cityPicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    marginBottom: 20,
  },
  cityPickerText: {
    color: "#FFF",
    fontSize: 18,
  },
  searchInput: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 10,
    paddingHorizontal: 15, // Adjusted padding for better appearance
    marginBottom: 20,
    height: 40, // Adjusted height for better appearance
    elevation: 1
  },
  currentWeatherContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  weatherIconContainer: {
    marginBottom: 20,
  },
  weatherDetailsContainer: {
    alignItems: "center",
  },
  currentTemperature: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  weatherDetail: {
    fontSize: 18,
    color: "black",
    marginBottom: 5,
  },
  forecastContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 20,
    elevation: 1,
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  forecastItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Add this line to ensure proper vertical alignment
    marginBottom: 10,
  },
  forecastDay: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    flex: 1, // Add this line to allow flexibility for the day text
  },
  forecastDetail: {
    fontSize: 16,
    color: "#333",
  },  
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  modalItemText: {
    fontSize: 18,
    color: "#333",
  },
});

export default WeatherPage;