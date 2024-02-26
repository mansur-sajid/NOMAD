import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const RecommendationPage = () => {
  // Dummy data for local recommendations
  const [favorites, setFavorites] = useState([]);

  const recommendations = [
    { id: 1, name: "Local Park", description: "A serene green space for relaxation and outdoor activities.", type: "place", distance: "0.5 miles", openingTime: "8:00 AM", closingTime: "6:00 PM" },
    { id: 2, name: "Art Gallery", description: "Featuring contemporary and classical artworks from local and international artists.", type: "place", distance: "1.2 miles", openingTime: "10:00 AM", closingTime: "7:00 PM" },
    { id: 3, name: "Jazz Concert", description: "An evening of smooth jazz performances by talented musicians.", type: "event", distance: "2.5 miles", time: "Saturday, 7:00 PM" },
    { id: 4, name: "Historical Museum", description: "Explore the rich history of our city through interactive exhibits and artifacts.", type: "place", distance: "0.8 miles", openingTime: "9:00 AM", closingTime: "5:00 PM" },
    { id: 5, name: "Local Market", description: "Discover fresh produce, artisanal goods, and local delicacies at this vibrant market.", type: "place", distance: "1.5 miles", openingTime: "9:00 AM", closingTime: "4:00 PM" },
    { id: 6, name: "Food Festival", description: "Indulge in a culinary adventure with a variety of mouthwatering dishes from around the world.", type: "event", distance: "3.0 miles", time: "Sunday, 12:00 PM" },
    // Add more dummy data as needed
  ];

  // Function to handle marking a recommendation as favorite
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Function to check if a recommendation is a favorite
  const isFavorite = (id) => favorites.includes(id);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {recommendations.map((recommendation) => (
          <View key={recommendation.id} style={styles.recommendationContainer}>
            <View style={styles.header}>
              {/* Star icon for marking as favorite */}
              <TouchableOpacity>
                <Icon
                  name={isFavorite(recommendation.id) ? "star" : "star-o"}
                  size={22}
                  color={isFavorite(recommendation.id) ? "gold" : "black"}
                  style={styles.starIcon}
                  onPress={(e) => {e.stopPropagation(); toggleFavorite(recommendation.id);}}
                />
              </TouchableOpacity>
              {/* Icon to show on map */}
              <TouchableOpacity onPress={() => { /* Implement logic to show recommendation on map */ }}>
                <Icon name="map-marker" size={20} color="blue" style={{position: "absolute", left:-70}}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>{recommendation.name}</Text>
            <Text style={styles.description}>{recommendation.description}</Text>
            <Text style={styles.distance}>Distance: <Text style={styles.smallText}>{recommendation.distance}</Text></Text>
            {recommendation.type === "place" ? (
              <Text style={styles.time}>Opening Time: <Text style={styles.smallText}>{recommendation.openingTime}</Text> - Closing Time: <Text style={styles.smallText}>{recommendation.closingTime}</Text></Text>
            ) : (
              <Text style={styles.time}>Time: <Text style={styles.smallText}>{recommendation.time}</Text></Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  recommendationContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    position: "relative", // Needed for absolute positioning of the star icon
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  starIcon: {
    position : "absolute",
    right:5
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    marginBottom: 5,
  },
  distance: {
    fontSize: 12,
    marginTop: 5,
  },
  time: {
    fontSize: 12,
    marginTop: 5,
  },
  smallText: {
    fontSize: 14,
  },
});

export default RecommendationPage;