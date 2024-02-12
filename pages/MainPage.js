import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import LanguageTranslation from "../components/LanguageTranslation";
import Weather from "../components/Weather";
import PictureSlideShow from "../components/PictureSlideShow";

const MainPage = () => {
  return (
    <View>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={true} style={{ height: 5000 }}>
        <PictureSlideShow/>
        <Weather />
      </ScrollView>
      <Menu />
    </View>
  );
};

export default MainPage;
