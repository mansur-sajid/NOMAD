import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MatchItineraryPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is match itinerary Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 400
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default MatchItineraryPage;
