import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../shared/GlobalApi";

const CourseListEnglish = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getVideoCourse();
  }, []);

  const getVideoCourse = async () => {
    try {
      const resp = (await GlobalApi.getVideoCourse()).data;
      if (resp && resp.data) {
        const result = resp.data.map((item) => ({
          id: item.id,
          name: item.attributes.name,
          des: item.attributes.description,
          image: item.attributes.videoUrl.data.attributes.url,
        }));
        setVideoList(result);
      } else {
        console.error("No data found in response:", resp);
      }
    } catch (error) {
      console.error("Error fetching video courses:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={videoList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.courseContainer}>
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseDescription}>{item.des}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CourseListEnglish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  courseContainer: {
    marginRight: 16,
    width: 200,
  },
  courseImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  courseName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  courseDescription: {
    fontSize: 14,
    color: "#666",
  },
});
