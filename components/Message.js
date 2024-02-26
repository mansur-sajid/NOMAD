// Message.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Swipeable from "react-native-swipeable";

const Message = ({ id, sender, message, profilePic, onDelete }) => {
  const rightContent = [
    <TouchableOpacity key={id} style={styles.deleteButton} onPress={onDelete}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>,
  ];

  return (
    <Swipeable rightButtons={rightContent} rightButtonWidth={75}>
      <View style={styles.messageContainer}>
        <View style={styles.profileContainer}>
          {/* Profile picture */}
          <Image source={profilePic} style={styles.profilePic} />
        </View>
        <View style={styles.messageContent}>
          {/* Sender and message content */}
          <Text style={styles.sender}>{sender}</Text>
          <Text style={styles.messageText} numberOfLines={2}>{message}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    elevation: 5,
    marginTop: 10,
  },
  profileContainer: {
    marginRight: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    padding: 2
  },
  sender: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageText: {
    fontSize: 12,
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 83,
    marginTop: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Message;