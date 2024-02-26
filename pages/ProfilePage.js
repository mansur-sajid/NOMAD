// ProfilePage.js

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfilePage = () => {
  // Dummy data
  const profile = {
    name: "Mansur Sajid",
    contactNumber: "+92 3348670100",
    joinDate: "January 1, 2023", // Dummy join date
  };

  return (
    <View style={styles.container}>
      {/* Profile picture */}
      <Image source={require("../assets/me.jpg")} style={styles.profilePic} />

      {/* Joined since */}
      <Text style={styles.joinedSince}>Joined since {profile.joinDate}</Text>

      {/* Profile details */}
      <View style={styles.profileDetails}>
        <View style={{ ...styles.detailRow, height: 30, top: 3 }}>
          <Text style={styles.detailLabel}>Name:</Text>
          <Text style={styles.detailValue}>{profile.name}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Contact Number:</Text>
          <Text style={styles.detailValue}>{profile.contactNumber}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Plan:</Text>
          <Text style={styles.detailValue}>Basic</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Existing Itineraries</Text>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="arrow-right" size={20} color="#007260" />
          </TouchableOpacity>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Change Password</Text>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="arrow-right" size={20} color="#007260" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.detailRow,
            borderBottomWidth: 0,
            borderBottomColor: "white",
          }}
        >
          <Text style={styles.detailLabel}> Delete Account</Text>
          {/* Arrow icon for delete account */}
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="arrow-right" size={20} color="#007260" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact us */}
      <TouchableOpacity style={styles.contactUs}>
        <Text style={styles.contactUsText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  joinedSince: {
    marginBottom: 20,
  },
  profileDetails: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    height: 350,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    height: 30,
    borderBottomColor: "#a4a6a5",
    borderBottomWidth: 1,
  },
  detailLabel: {
    paddingBottom: 5,
    position: "absolute",
    top: -10,
    color: "#007260",
  },
  detailValue: {
    position: "absolute",
    right: 0,
    top: -8,
    color: "#a4a6a5",
    fontSize: 12,
  },
  iconContainer: {
    position: "absolute",
    right: 0,
    top: -8,
  },
  contactUs: {
    marginTop: 20,
  },
  contactUsText: {
    color: "#007bff",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default ProfilePage;
