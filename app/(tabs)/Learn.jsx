import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Learn = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, textAlign: "center" }}>Start Learning</Text>
      <Text style={{ marginTop: 6, fontSize: 16 }}>Courses</Text>

      <Image
        style={{ marginTop: 5, width: "100%" }}
        source={require("../assets/ht.png")}
      />

      <View style={{ flexDirection: "row", gap: 14, marginTop: 9 }}>
        <Text>
          <Text style={{ marginLeft: 20 }}>HTML</Text>
          <Text style={{ marginLeft: 240 }}>1.5 hour</Text>
        </Text>
      </View>

      <View style={styles.infoSection}>
        <Text>Beginning HTML</Text>
        <Text>0/14</Text>
      </View>

      <View style={styles.infoSection}>
        <Text>Beginning HTML</Text>
        <Text>0/14</Text>
      </View>

      <View style={styles.infoSection}>
        <Text>Beginning HTML</Text>
        <Text>0/14</Text>
      </View>

      <View style={styles.infoSection}>
        <Text>Beginning HTML</Text>
        <Text>0/14</Text>
      </View>
    </View>
  );
};

export default Learn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoSection: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
  },
});
