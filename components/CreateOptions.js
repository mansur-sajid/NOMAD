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

const CreateOptions = ({ visible, onClose }) => {
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
            <TouchableOpacity style={styles.modalOption} onPress={onClose}>
              <Text>Create Itinerary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption} onPress={onClose}>
              <Text>Option 2</Text>
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
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
  },
  modalOption: {
    marginBottom: 10,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
