import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GlobalApi from "../shared/GlobalApi";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import { Ionicons } from "@expo/vector-icons";

export default function CourseList() {
  const { currentCourse } = useContext(AppContext);
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation();
  console.log(currentCourse, "sss");
  const green = "#00FF00"; // Define your color here or use Colors.green
  const white = "#FFFFFF"; // Define your color here or use Colors.white
  const gray = "#454545";

  useEffect(() => {
    getCourseList();
  }, []); // Only call once on initial load

  const getCourseList = async () => {
    let resp;
    if (currentCourse === "C Course") {
      resp = (await GlobalApi.getCourseUrduList()).data;
    } else if (currentCourse === "Python Course") {
      resp = (await GlobalApi.getPythonUrduCourse()).data;
    } else if (currentCourse === "JS Course") {
      resp = (await GlobalApi.getJsUrduCourse()).data;
    } else {
      // Default API call if no match for currentCourse
      resp = (await GlobalApi.getCourseEnglishList()).data;
    }

    const result = resp.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      description: item.attributes.description,
      image: item.attributes.image.data.attributes.url,
      Topic: item.attributes.modules,
    }));
    setCourseList(result);
  };

  const onPressCourse = (course) => {
    navigation.navigate("CourseDetails", {
      courseData: course,
      courseType: "text",
    });
  };

  return (
    <ScrollView style={{ marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 15,
          backgroundColor: "#f8f8f8", // Light background color for the header
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
        }}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={{ flexDirection: "row", marginTop: 6 }}
          onPress={() => navigation.navigate("CourseItem")}
        >
          <Ionicons
            style={{ alignSelf: "center" }}
            name="arrow-back-sharp"
            size={24}
            color="black"
          />
          <Text
            style={{
              padding: 5,
              marginLeft: 15,
              fontSize: 24,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>

        {/* Title */}
      </View>
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
