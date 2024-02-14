import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const Alert = ({ title, description }) => {
  return (
    <TouchableOpacity style={styles.alert}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  alert: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default Alert;
