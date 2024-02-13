import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Weather from "../components/Weather";
import LoungePage from "./LoungePage";
import MatchItineraryPage from "./MatchItineraryPage";
import MapPage from "./MapPage";
import ProfilePage from "./ProfilePage";

const MainPage = () => {
  const [activeIcon, setActiveIcon] = useState("chatbubbles-outline");

  const handleIconPress = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <View>
      <Navbar />
      <ScrollView showsVerticalScrollIndicator={true} style={{ height: 5000 }}>
        {activeIcon === "chatbubbles-outline" && <LoungePage />}
        {activeIcon === "people" && <MatchItineraryPage />}
        {activeIcon === "map" && <MapPage />}
        {activeIcon === "account" && <ProfilePage />}
      </ScrollView>
      <Menu onIconPress={handleIconPress} />
    </View>
  );
};

export default MainPage;
