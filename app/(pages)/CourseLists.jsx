import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GlobalApi from "../shared/GlobalApi";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";

export default function CourseLists() {
  const { currentCourse, setCurrentCourse } = useContext(AppContext);
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation();

  const green = "#00FF00"; // Define your color here or use Colors.green
  const white = "#FFFFFF"; // Define your color here or use Colors.white
  const gray = "#454545";

  useEffect(() => {
    getCourseList();
  }, [currentCourse]); // Add currentCourse as a dependency to trigger effect when it changes

  const getCourseList = async () => {
    try {
      let resp;
      console.log(currentCourse, "sss");
      if (currentCourse === "C Course") {
        resp = (await GlobalApi.getCourseEnglishList()).data;
      } else if (currentCourse === "Python Course") {
        resp = (await GlobalApi.getPythonEnglishCourse()).data;
      } else if (currentCourse === "JS Course") {
        resp = (await GlobalApi.getJsEnglishCourse()).data;
      } else {
        // Default API call if no match for currentCourse
        resp = (await GlobalApi.getCourseEnglishList()).data;
      }
      console.log(resp, "ressppp===>");
      const result = resp.data.map((item) => ({
        id: item.id,
        name: item.attributes.name,
        description: item.attributes.description,
        image: item.attributes.image
          ? item.attributes.image.data.attributes.url
          : "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
        Topic: item.attributes.modules,
      }));

      setCourseList(result);
    } catch (error) {
      console.error("Error fetching course list:", error);
    }
  };

  const onPressCourse = (course) => {
    console.log(course, "etcc;");
    navigation.navigate("CourseDetails", {
      courseData: course,
      courseType: "text",
    });
  };

  return (
    <ScrollView style={{ marginTop: 10 }}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 12,
            marginTop: 10,
          }}
        >
          ← Back
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          textTransform: "capitalize",
          fontFamily: "sans-serif",
          marginTop: 25,
          marginLeft: 12,
          marginBottom: 8,
        }}
      >
        Course Detail
      </Text>
      <FlatList
        style={{ marginLeft: 25 }}
        data={courseList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: white,
              marginRight: 10,
              marginTop: 25,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderRadius: 10,
            }}
            onPress={() => onPressCourse(item)}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 280,
                height: 120,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                resizeMode: "cover",
              }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {item.name}
              </Text>
              <Text style={{ color: gray, fontWeight: "300" }}>
                {item.Topic?.length} Lessons
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}
