import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PictureSlideShow from "../components/PictureSlideshow";
import Weather from "../components/Weather";
import LanguageTranslation from "../components/LanguageTranslation";
import LocalRecommendation from "../components/LocalRecommendation";

const LoungePage = () => {
  return (
    <View>
      <PictureSlideShow />
      <Weather />
      <LanguageTranslation />
      <LocalRecommendation/>
    </View>
  );
};

export default LoungePage;
