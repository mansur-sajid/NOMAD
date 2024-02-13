import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Icon5 from "react-native-vector-icons/Octicons";
import IIcon from "react-native-vector-icons/Ionicons";
import FIcon from "react-native-vector-icons/Feather";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FFIcon from "react-native-vector-icons/Fontisto";
import CreateOptions from "./CreateOptions";

const Menu = ({ onIconPress }) => {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
  const [selectedIcon, setSelectedIcon] = useState('chatbubbles-outline'); // Default selected icon
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleIconPress = (iconName) => {
    setSelectedIcon(iconName);
    onIconPress(iconName); // Pass selected icon to parent component
  };

  return (
    <View style={{ ...styles.container, top: screenHeight - 70, width: screenWidth }}>
      <TouchableOpacity onPress={() => handleIconPress('chatbubbles-outline')}>
        <View style={{ ...styles.option, marginLeft: 5 }}>
          <IIcon
            name="chatbubbles-outline"
            size={22}
            color={selectedIcon === 'chatbubbles-outline' ? "#00FF17" : "black"}
            style={styles.icon}
          />
          <Text style={{ color: selectedIcon === 'chatbubbles-outline' ? "#00FF17" : "black" }}>lounge</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress('people')}>
        <View style={styles.option}>
          <Icon5
            name="people"
            size={22}
            color={selectedIcon === 'people' ? "#00FF17" : "black"}
            style={styles.icon}
          />
          <Text style={{ color: selectedIcon === 'people' ? "#00FF17" : "black" }}>Buddy</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.option, ...styles.addButton}}
        onPress={openModal}
      >
        <IIcon name="add" size={30} color="white" style={{marginBottom:0}} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress('map')}>
        <View style={styles.option}>
          <FFIcon
            name="map"
            size={22}
            color={selectedIcon === 'map' ? "#00FF17" : "black"}
            style={{...styles.icon, marginLeft:-0}}
          />
          <Text style={{ color: selectedIcon === 'map' ? "#00FF17" : "black" }}>Map</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleIconPress('account')}>
        <View style={styles.option}>
          <MIcon
            name="account"
            size={22}
            color={selectedIcon === 'account' ? "#00FF17" : "black"}
            style={styles.icon}
          />
          <Text style={{ color: selectedIcon === 'account' ? "#00FF17" : "black" }}>Profile</Text>
        </View>
      </TouchableOpacity>

      <CreateOptions visible={modalVisible} onClose={closeModal} />
      
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    paddingBottom: 30,
    paddingLeft: 0,
    borderTopWidth: 1, // Adding border top
    borderTopColor: "rgba(0, 0, 0, 0.1)", // Adding a light gray color
    paddingTop: 10,
  },
  option: {
    marginLeft: 40,
  },
  addButton: {
    borderRadius: 30,
    backgroundColor: "#00FF17",
    padding: 10,
    marginTop: 0, // Adjusting the position of the "add" icon
  },
  icon: {
    marginLeft: 8
  },
});
