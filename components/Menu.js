import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon5 from "react-native-vector-icons/Octicons";
import IIcon from "react-native-vector-icons/Ionicons";
import FIcon from "react-native-vector-icons/Feather";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CreateOptions from "./CreateOptions";

const Menu = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <IIcon
          name="chatbubbles-outline"
          size={22}
          color="#00FF17"
          style={styles.icon}
        />
        <Text>lounge</Text>
      </View>
      <View style={styles.option}>
        <Icon5
          name="people"
          size={22}
          color="#00FF17"
          style={styles.icon}
        />
        <Text>Buddy</Text>
      </View>
      <TouchableOpacity
        style={[styles.option, styles.addButton]}
        onPress={openModal}
      >
        <IIcon name="add" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.option}>
        <FIcon name="map-pin" size={22} color="#00FF17" style={styles.icon} />
        <Text>Local</Text>
      </View>
      <View style={styles.option}>
        <MIcon name="account" size={22} color="#00FF17" style={styles.icon} />
        <Text>Profile</Text>
      </View>

      <CreateOptions visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 790,
    flexDirection: "row",
    paddingBottom: 30,
    paddingLeft: 5
  },
  option: {
    marginLeft: 40,
  },
  addButton: {
    borderRadius: 30,
    backgroundColor: "#00FF17",
    padding: 10,
  },
  icon: {
    marginLeft: 8
  },
});
