import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import AppContext from "../context/AppContext";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
function ImageSlider() {
  const router = useRouter(); // Use naviga
  const { currentCourse, setCurrentCourse } = useContext(AppContext);

  // Set the current course when an image is clicked
  const handleImagePress = (courseName) => {
    setCurrentCourse(courseName); // Update the current course in context
    router.replace("/UrduCourse");
    console.log(`Current course set to: ${courseName}`);
  };

  return (
    <>
      <Text
        style={{
          textAlign: "left",
          marginTop: 25,
          color: "#C36FDE",
          fontSize: 29,
          fontWeight: "bold",
        }}
      >
        Select a Course
      </Text>

      {/* C Course */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleImagePress("C Course")}>
          <Image
            source={require("../assets/C.png")}
            style={{
              width: 240,
              height: 120,
              marginTop: 12,
              borderRadius: 7,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Python Course */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleImagePress("Python Course")}>
          <Image
            source={require("../assets/python.png")}
            style={{
              width: 240,
              height: 120,
              marginTop: 12,
              borderRadius: 7,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* JS Course */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleImagePress("JS Course")}>
          <Image
            source={require("../assets/js.png")}
            style={{
              width: 240,
              height: 120,
              marginTop: 12,
              borderRadius: 7,
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    gap: 9,
  },
});
