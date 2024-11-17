import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AppContext from "../context/AppContext";

function ImageSlider() {
  const router = useRouter();
  const { setCurrentCourse } = useContext(AppContext);

  const handleImagePress = (courseName) => {
    setCurrentCourse(courseName); // Update the current course in context
    router.replace("/UrduCourse");
    console.log(`Current course set to: ${courseName}`);
  };

  return (
    <>
      <Text style={styles.title}>Select a Course</Text>

      {/* C Course */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleImagePress("C Course")}>
          <Image source={require("../assets/C.png")} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Python Course */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleImagePress("Python Course")}>
          <Image
            source={require("../assets/python.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      {/* JS Course */}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleImagePress("JS Course")}>
          <Image source={require("../assets/js.png")} style={styles.image} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    gap: 9,
  },
  title: {
    textAlign: "left",
    marginTop: 25,
    color: "#C36FDE",
    fontSize: 29,
    fontWeight: "bold",
  },
  image: {
    width: 240,
    height: 120,
    marginTop: 12,
    borderRadius: 7,
  },
});

export default ImageSlider;
