import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const LocalRecommendation = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const goToRecommendationPage = () => {
    navigation.navigate("RecommendationPage"); // Navigate to the Recommendation page when clicked
  };

  return (
    <TouchableOpacity onPress={goToRecommendationPage} style={{ ...styles.container, width: screenWidth - 30 }}>
      {/* Left section with recommendation icon */}
      <View style={styles.leftSection}>
        <Icon name="attractions" size={50} color="#28a745" />
      </View>

      {/* Right section with recommendation update */}
      <View style={styles.rightSection}>
        <Text style={styles.recommendationUpdate}>Local Recommendation</Text>
        <Text style={styles.recommendationDetail}>
          Discover nearby attractions
        </Text>
        {/* Add more recommendation details as needed */}
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
  recommendationUpdate: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recommendationDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default LocalRecommendation;
