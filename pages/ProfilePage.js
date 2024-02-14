import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is profile page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ProfilePage;
