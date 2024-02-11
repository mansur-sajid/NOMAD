import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View,ScrollView, SafeAreaView, Platform, StatusBar as SB } from 'react-native';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainPage/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS == 'android' ? SB.currentHeight : 0,
    paddingLeft: 5
  },
});
