import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

const MatchItineraryPage = () => {
  // Dummy data for potential travel partners
  const potentialPartners = [
    {
      id: "1",
      name: "Arun",
      image: require("../assets/arun.jpeg"),
      introduction: "Hi, I'm Arun. I love traveling and exploring new places!",
      travelMode: "plane",
      numberOfTravelers: 2,
      selected: true, // Automated partner selection
    },
    {
      id: "2",
      name: "Alice  ",
      image: require("../assets/alice.jpg"),
      introduction:
        "Hey there, I'm Alice. I enjoy outdoor adventures and meeting new people!",
      travelMode: "car",
      numberOfTravelers: 1,
    },
    {
      id: "3",
      name: "Amy",
      image: require("../assets/amy.jpg"),
      introduction:
        "Hello, I'm Amy. I'm passionate about sustainable travel and local culture!",
      travelMode: "train",
      numberOfTravelers: 3,
    },
    {
      id: "4",
      name: "Zayn",
      image: require("../assets/zayn.jpg"),
      introduction:
        "Hi, I'm Zayn. I love to discover hidden gems and off-the-beaten-path destinations!",
      travelMode: "plane",
      numberOfTravelers: 4,
    },
    {
      id: "5",
      name: "Suzen",
      image: require("../assets/suzen.jpg"),
      introduction:
        "Hi everyone, I'm Suzen. I enjoy solo travels and spontaneous adventures!",
      travelMode: "car",
      numberOfTravelers: 2,
    },
    {
      id: "6",
      name: "Danny",
      image: require("../assets/danny.jpeg"),
      introduction:
        "Hello, I'm Danny. I'm passionate about sustainable travel and local culture!",
      travelMode: "plane",
      numberOfTravelers: 2,
    },
    // Add more partner data...
  ];

  const renderPartnerItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.partnerItem}>
        <View style={styles.partnerInfo}>
          <View style={styles.leftContent}>
            <Image source={item.image} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.partnerName}>{item.name}</Text>
              <Text style={styles.introText}>{item.introduction}</Text>
              <View style={styles.additionalInfo}>
                <MaterialCommunityIcons
                  name={getTravelModeIcon(item.travelMode)}
                  size={18}
                  color="#666"
                  style={styles.icon}
                />
                <Text style={styles.smallText}>{item.travelMode}</Text>
                <Text style={styles.smallText}> | </Text>
                <MaterialCommunityIcons
                  name="account-group"
                  size={18}
                  color="#666"
                  style={styles.icon}
                />
                <Text style={styles.smallText}>{item.numberOfTravelers}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const getTravelModeIcon = (mode) => {
    switch (mode) {
      case "plane":
        return "airplane";
      case "car":
        return "car";
      case "train":
        return "train";
      default:
        return "airplane";
    }
  };

  // Automated partner selection
  const selectedPartner = potentialPartners.find((partner) => partner.selected);

  // Filter locked partners (excluding the selected partner)
  const lockedPartners = potentialPartners.filter(
    (partner) => !partner.selected
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your Travel Partner</Text>
        <View style={styles.selectedPartnerContainer}>
          <Text style={styles.subTitle}>Your Selected Partner</Text>
          {selectedPartner && renderPartnerItem({ item: selectedPartner })}
        </View>
        <Text style={styles.subTitle}>Available Options</Text>
        <FlatList
          data={lockedPartners}
          renderItem={renderPartnerItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.partnerList}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    height: 630,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  selectedPartnerContainer: {
    marginBottom: 20,
  },
  partnerList: {
    flexGrow: 1,
  },
  partnerItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: width - 40, // Set width equal to screen width
  },
  partnerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  partnerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  introText: {
    fontSize: 14,
    color: "#666",
  },
  additionalInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
  smallText: {
    fontSize: 14,
    color: "#666",
  },
});

export default MatchItineraryPage;
