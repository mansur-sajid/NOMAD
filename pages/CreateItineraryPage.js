import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateItineraryPage = () => {
  const [destinationCity, setDestinationCity] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [numberOfTravelers, setNumberOfTravelers] = useState('');

  const [showFromDate, setShowFromDate] = useState(false);
  const [showToDate, setShowToDate] = useState(false);

  const handleFromDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDate(false);
    setFromDate(currentDate);
  };

  const handleToDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToDate(false);
    setToDate(currentDate);
  };

  const handleSubmit = () => {
    // Logic to handle form submission, e.g., validation, saving data, etc.
    console.log('Destination City:', destinationCity);
    console.log('From Date:', fromDate);
    console.log('To Date:', toDate);
    console.log('Number of Travelers:', numberOfTravelers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Destination City:</Text>
      <TextInput
        style={styles.input}
        value={destinationCity}
        onChangeText={text => setDestinationCity(text)}
      />
      <Text style={styles.label}>From Date:</Text>
      <TouchableOpacity onPress={() => setShowFromDate(true)}>
        <TextInput
          style={styles.input}
          value={fromDate.toDateString()}
          editable={false}
        />
      </TouchableOpacity>
      {showFromDate && (
        <DateTimePicker
          testID="fromDateTimePicker"
          value={fromDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleFromDateChange}
        />
      )}
      <Text style={styles.label}>To Date:</Text>
      <TouchableOpacity onPress={() => setShowToDate(true)}>
        <TextInput
          style={styles.input}
          value={toDate.toDateString()}
          editable={false}
        />
      </TouchableOpacity>
      {showToDate && (
        <DateTimePicker
          testID="toDateTimePicker"
          value={toDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleToDateChange}
        />
      )}
      <Text style={styles.label}>Number of Travelers:</Text>
      <TextInput
        style={styles.input}
        value={numberOfTravelers}
        onChangeText={text => setNumberOfTravelers(text)}
        keyboardType="numeric"
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
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default CreateItineraryPage;
