// Message.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Swipeable from "react-native-swipeable";

const Message = ({ id, sender, message, onDelete }) => {
  const rightContent = [
    <TouchableOpacity key={id} style={styles.deleteButton} onPress={onDelete}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>,
  ];

  return (
    <Swipeable rightButtons={rightContent} rightButtonWidth={75}>
      <View style={styles.messageContainer}>
        <View style={styles.message}>
          <Text style={styles.title}>{sender}</Text>
          <Text style={styles.messageText} numberOfLines={2}>
            {message}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    height: 90,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 5,
    marginTop: 10,
  },
  message: {},
  title: {
    fontWeight: "bold",
    marginRight: 5,
  },
  messageText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 90,
    marginTop: 10,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Message;
