// MessagePage.js

import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Message from "../components/Message";

const MessagePage = () => {
  const [messages, setMessages] = React.useState([
    { id: 1, sender: "Alice", message: "Remember to pack your sunscreen and hat for the beach trip. We don't want to get sunburned!", profilePic: require("../assets/alice.jpg") },
    { id: 2, sender: "Danny", message: "Just booked our flights for the vacation! Can't wait to explore new places and make unforgettable memories.", profilePic: require("../assets/danny.jpeg") },
    { id: 3, sender: "Suzen", message: "Checked in to our hotel. The view from our room is breathtaking! Excited for the adventures ahead.", profilePic: require("../assets/suzen.jpg") },
  ]);

  const handleDelete = (id) => {
    // Filter out the message with the specified ID
    const updatedMessages = messages.filter((message) => message.id !== id);
    // Update the state to re-render the component without the deleted message
    setMessages(updatedMessages);
  };

  const renderMessage = ({ item }) => (
    <Message
      sender={item.sender}
      message={item.message}
      profilePic={item.profilePic}
      onDelete={() => handleDelete(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default MessagePage;