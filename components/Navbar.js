import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();

  const goToAlertPage = () => {
    navigation.navigate("AlertPage");
  };
  const goToMessagesPage = () => {
    navigation.navigate("MessagePage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome, UserName</Text>
      <View style={styles.icons}>
        <Icon name="search" size={20} color="black" style={styles.icon} />
        <TouchableOpacity onPress={goToAlertPage}>
          <Icon name="bell-o" size={20} color="black" style={styles.icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToMessagesPage}>
        <Icon name="envelope-o" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 5,
    height: 150,
    flexDirection: "row",
    paddingTop: 30,
    borderRadius: 10,
    marginBottom: 10,
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
    top: 40,
  },
  icon: {
    marginRight: 30,
  },
});
