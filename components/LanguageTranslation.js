import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const LanguageTranslation = () => {
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const goToTranslationPage = () => {
    navigation.navigate("TranslationPage"); // Navigate to the Translation page when clicked
  };

  return (
    <TouchableOpacity
      onPress={goToTranslationPage}
      style={{ ...styles.container, width: screenWidth - 30 }}
    >
      {/* Left section with translation icon */}
      <View style={styles.leftSection}>
        <Icon name="language" size={50} color="#007bff" />
      </View>

      {/* Right section with translation update */}
      <View style={styles.rightSection}>
        <Text style={styles.translationUpdate}>Language Translation</Text>
        <Text style={styles.translationDetail}>Translate text instantly</Text>
        {/* Add more translation details as needed */}
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
  translationUpdate: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  translationDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default LanguageTranslation;
