import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const UrduCourse = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const navigateToCourse = (language) => {
    if (language === "english") {
      router.push("/CourseLists");
    } else {
      router.push("/CourseList");
    }
  };

  return (
    <>
      <View>
        <TouchableOpacity
          style={{ marginTop: 25, marginLeft: 25, marginBottom: 25 }}
          onPress={() => router.push("/CourseItem")}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.container}>
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
      </View>
    </>
  );
};

export default UrduCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
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
