import React from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import FIcon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const CreateOptions = ({ visible, onClose }) => {
  const navigation = useNavigation();

  const navigateToCreateItinerary = () => {
    navigation.navigate("CreateItineraryPage"); // Replace "CreateItineraryPage" with your actual screen name
    onClose(); // Close the modal after navigation
  };

  const navigateToCustomItinerary = () => {
    navigation.navigate("CustomItineraryPage"); // Replace "CustomItineraryPage" with your actual screen name
    onClose(); // Close the modal after navigation
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <FIcon name="close" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.modalOption, borderBottomColor: "#a4a6a5",
              borderBottomWidth: 1,}}
              onPress={navigateToCreateItinerary}
            >
              <FIcon name="plus" size={24} color="#000" style={{marginBottom: 25}}/>
              <Text style={styles.optionText}>Create Itinerary</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={navigateToCustomItinerary}
            >
              <FIcon name="tool" size={24} color="#000" style={{marginBottom: 25}}/>
              <Text style={styles.optionText}>Custom Itinerary</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CreateOptions;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: 150,
    backgroundColor: "#fff",
    padding: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  optionText: {
    marginLeft: 10,
    marginBottom: 30
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});