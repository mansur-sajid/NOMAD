import React from "react";
import { View, StyleSheet } from "react-native";
import Alert from "../components/Alert";

const AlertPage = () => {
  const alerts = [
    { id: 1, title: "Warning", description: "This is a warning message." },
    { id: 2, title: "Success", description: "Something happened successfully." },
    { id: 3, title: "Error", description: "Error occurred while processing." },
  ];

  const renderAlerts = () => {
    return alerts.map((alert) => (
      <Alert
        key={alert.id}
        title={alert.title}
        description={alert.description}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.alertsContainer}>{renderAlerts()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  alertsContainer: {
    flex: 1,
  },
});

export default AlertPage;