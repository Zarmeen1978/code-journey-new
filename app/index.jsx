import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router"; // Correcting the import for routing
import Button from "./components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Make sure the image is being loaded correctly */}
      <Image
        style={{ width: 240, height: 160 }}
        source={require("../app/assets/mimo.png")}
      />
      {/* Correcting the Text rendering error */}
      <Text style={styles.heading}>CODE JOURNEY</Text>
      <Button
        title="Start Your Journey"
        handlePress={() => router.push("/Sign-in")} // Correct routing
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B0082",
  },
  heading: {
    fontSize: 40,
    color: "#ccc",
    fontWeight: "semibold",
  },
});
