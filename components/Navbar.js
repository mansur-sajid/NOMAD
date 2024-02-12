import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome, UserName</Text>
      <View style={styles.icons}>
        <Icon name="search" size={20} color="black" style={styles.icon} />
        <Icon name="bell-o" size={20} color="black" style={styles.icon} />
        <Icon name="envelope-o" size={20} color="black" style={styles.icon} />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    paddingLeft: 5,
    height: 150,
    flexDirection: "row",
    paddingTop: 30,
    borderRadius: 10,
    marginBottom: 10, // Adjust the margin as needed to create space for the shadow
    elevation: 5,
  },
  mainText: {
    fontSize: 20,
    color: "#00FF17",
    fontFamily: "serif",
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    top: 40
  },
  icon: {
    marginRight: 30, // Add spacing between icons
  },
});
