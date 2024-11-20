import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { useRouter } from "expo-router";
import AppContext from "../context/AppContext";

export default function ImageSlider() {
  const { setCurrentCourse } = useContext(AppContext);
  const router = useRouter();

  const handleImagePress = (courseName) => {
    setCurrentCourse(courseName); // Update the current course in context
    router.replace("/UrduCourse");
    console.log(`Current course set to: ${courseName}`);
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.title}>Select a Course</Text>
      <ScrollView>
        <View style={styles.sliderContainer}>
          {/* First Course */}
          <TouchableOpacity
            style={[styles.courseCard, { backgroundColor: "#80FFDB" }]}
            onPress={() => handleImagePress("C Course")}
          >
            <Image
              style={styles.courseImage}
              source={require("../assets/cSqaure.png")}
            />
            <Text style={styles.courseText}>
              Dive into C++ - A powerful language for system programming, game
              development, and building high-performance applications.
            </Text>
          </TouchableOpacity>

          {/* Second Course */}
          <TouchableOpacity
            style={[styles.courseCard, { backgroundColor: "#4AC8F0" }]}
            onPress={() => handleImagePress("Python Course")}
          >
            <Image
              style={styles.courseImage}
              source={require("../assets/pythonSquare.png")}
            />
            <Text style={styles.courseText}>
              Learn Python - A versatile programming language ideal for
              beginners and professionals. Build your skills in data analysis,
              web development, and more.
            </Text>
          </TouchableOpacity>

          {/* Third Course */}
          <TouchableOpacity
            style={[styles.courseCard, { backgroundColor: "#D7CFFF" }]}
            onPress={() => handleImagePress("JS Course")}
          >
            <Image
              style={styles.courseImage}
              source={require("../assets/javascript.png")}
            />
            <Text style={styles.courseText}>
              Master React - The framework for building modern web and mobile
              apps. Explore component-based architecture and state management.
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    padding: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  courseCard: {
    flexDirection: "row",
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
    gap: 20,
    alignItems: "center",
  },
  title: {
    textAlign: "left",
    marginTop: 25,
    color: "#C36FDE",
    fontSize: 29,
    fontWeight: "bold",
  },
  courseImage: {
    width: 89,
    height: 95,
    borderRadius: 50,
  },
  courseText: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
});
