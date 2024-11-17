import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const CourseContent = ({ course }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Course Content</Text>
      <FlatList
        data={course?.Topic} // Ensure that 'Topic' exists in the 'course' prop
        keyExtractor={(item, index) => index.toString()} // Ensuring each item has a unique key
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.topic}>{item?.Topic}</Text>{" "}
            {/* Ensure 'Topic' exists */}
          </View>
        )}
      />
    </View>
  );
};

export default CourseContent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
  },
  index: {
    fontWeight: "bold",
  },
  topic: {
    fontSize: 14,
  },
});
