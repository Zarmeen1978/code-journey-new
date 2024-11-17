import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../shared/GlobalApi";
import { useRouter } from "expo-router";

const SelectLanguage = () => {
  const [videoList, setVideoList] = useState([]);
  const router = useRouter();

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

  const navigateToCourse = (language) => {
    if (language === "english") {
      router.push("/CourseLists"); // Navigate to CourseLists page
    } else {
      router.push("/CourseList"); // Navigate to CourseList page
    }
  };

  return (
    <View style={{ marginTop: 15, padding: 10 }}>
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
      <FlatList
        data={videoList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => router.push("/CourseLists")}>
              <Image source={{ uri: item.image }} style={styles.courseImage} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SelectLanguage;

const styles = StyleSheet.create({
  heading: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 3,
  },
  languageButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
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
  courseImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
});
