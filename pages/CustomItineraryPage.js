import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CustomItineraryPage = () => {
  const [tourDetails, setTourDetails] = useState('');

  const handleSubmit = () => {
    // Logic to handle form submission, e.g., validation, saving data, etc.
    console.log('Custom Tour Details:', tourDetails);
    // You can perform further actions with the entered tour details
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Tour Details:</Text>
      <TextInput
        style={styles.textArea}
        value={tourDetails}
        onChangeText={text => setTourDetails(text)}
        multiline={true}
        numberOfLines={10} // Set the number of lines for the text box
        textAlignVertical="top" // Align text to the top
        placeholder="Describe your tour..."
      />
      <Button title="Create" onPress={handleSubmit} color="#66cc99" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    height: 200, // Set the height of the text box
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlignVertical: 'top', // Align text to the top
  },
});

export default CustomItineraryPage;