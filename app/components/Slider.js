import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-web";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch data here if required
  }, []);

  const navigateToDetails = () => {
    navigation.navigate("CourseList");
  };

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView>
        <View style={styles.sliderContainer}>
          {/* First Course */}
          <TouchableOpacity
            style={[styles.courseCard, { backgroundColor: "#4AC8F0" }]}
            onPress={() => navigateToDetails()}
          >
            <Image
              style={styles.courseImage}
              source={require("../assets/pythonSquare.png")}
            />
            <Text style={styles.courseText}>
              Learn Python - A versatile programming language ideal for beginners and professionals. 
              Build your skills in data analysis, web development, and more.
            </Text>
          </TouchableOpacity>

          {/* Second Course */}
          <TouchableOpacity
            style={[styles.courseCard, { backgroundColor: "#D7CFFF" }]}
            onPress={() => navigateToDetails()}
          >
            <Image
              style={styles.courseImage}
              source={require("../assets/javascript.png")}
            />
            <Text style={styles.courseText}>
              Master React - The framework for building modern web and mobile apps. 
              Explore component-based architecture and state management.
            </Text>
          </TouchableOpacity>

          {/* Third Course */}
          <TouchableOpacity
            style={[styles.courseCard, { backgroundColor: "#80FFDB" }]}
            onPress={() => navigateToDetails()}
          >
            <Image
              style={styles.courseImage}
              source={require("../assets/cSqaure.png")}
            />
            <Text style={styles.courseText}>
              Dive into C++ - A powerful language for system programming, 
              game development, and building high-performance applications.
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
