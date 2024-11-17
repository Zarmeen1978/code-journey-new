import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const UrduCourse = () => {
  const router = useRouter();

  const navigateToCourse = (language) => {
    if (language === "english") {
      router.push("/CourseLists");
    } else {
      router.push("/CourseList");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/CourseItem")}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.heading}>Select Language</Text>
      <View style={styles.languageButtonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.englishButton]}
          onPress={() => navigateToCourse("english")}
        >
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.urduButton]}
          onPress={() => navigateToCourse("urdu")}
        >
          <Text style={styles.buttonText}>Urdu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
  },
  backButton: {
    position: "absolute",
    top: 25,
    left: 25,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  languageButtonsContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  englishButton: {
    backgroundColor: "#4CAF50",
  },
  urduButton: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default UrduCourse;
