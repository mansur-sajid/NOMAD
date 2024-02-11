import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import PictureSlideshow from "../components/PictureSlideshow";

const MainPage = () => {
  return (
    <View>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={true} style={{ height: 5000 }}>
        <PictureSlideshow />
      </ScrollView>
      <Menu />
    </View>
  );
};

export default MainPage;
