import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import GlobalApi from "../shared/GlobalApi";
import { useRouter } from "expo-router";
import BoxedImagePage from "./Image";

const VideoCourse = () => {
  const [videoList, setVideoList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getVideoCourse();
  }, []);

  const getVideoCourse = async () => {
    // Uncomment the code below to fetch data from the API
    // try {
    //   const resp = (await GlobalApi.getVideoCourse()).data;
    //   if (resp && resp.data) {
    //     const result = resp.data.map((item) => ({
    //       id: item.id,
    //       name: item.attributes.name,
    //       des: item.attributes.description,
    //       image: item.attributes.videoUrl.data.attributes.url,
    //     }));
    //     setVideoList(result);
    //   } else {
    //     console.error("No data found in response:", resp);
    //   }
    // } catch (error) {
    //   console.error("Error fetching video courses:", error);
    // }
  };

  const navigateToCourse = (language) => {
    router.push(language === "english" ? "/CourseLists" : "/CourseList");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Course</Text>
      
      {/* Language Selection Buttons */}
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

      {/* Video Course List */}
      {/* <FlatList
        data={videoList}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseDescription}>{item.des}</Text>
          </View>
        )}
      /> */}
    </View>
  );
};

export default VideoCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  heading: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  languageButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  englishButton: {
    backgroundColor: "#4CAF50", // Green for English
  },
  urduButton: {
    backgroundColor: "#2196F3", // Blue for Urdu
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  courseItem: {
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginRight: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  courseImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  courseName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
  },
  courseDescription: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});
