import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import GlobalApi from "../shared/GlobalApi";

const CongratulationScreen = ({ route }) => {
  const navigation = useNavigation();
  const param = useRoute().params;
  const { points } = param;
  const { user, setUser } = useContext(AppContext);
  const [hasUpdated, setHasUpdated] = useState(false); // New flag to control effect

  useEffect(() => {
    const updateExperience = async () => {
      // Check if the update has already occurred to avoid repeated runs
      if (hasUpdated) return;

      // Parse experience, add 100 points
      const updatedExperience = (
        parseInt(user.experience, 10) + points
      ).toString();

      // Determine new rank based on updated experience points
      let newRank = user.rank;
      if (user.rank === "Beginner" && updatedExperience > 1000) {
        newRank = "Intermediate";
      } else if (user.rank === "Intermediate" && updatedExperience > 3000) {
        newRank = "Expert";
      }

      // Update experience and rank on the server
      const response = await GlobalApi.updateUserExperience(
        user.id,
        updatedExperience,
        newRank,
        user.jwt
      );

      if (!response.ok) {
        console.error("Failed to update experience or rank:", response.problem);
      } else {
        // Update user context with new experience and rank
        setUser({
          ...user,
          experience: updatedExperience,
          rank: newRank,
        });
        console.log("User experience and rank updated successfully");
        setHasUpdated(true); // Set flag to prevent re-running
      }
    };

    updateExperience();
  }, [hasUpdated, user, setUser]);

  return (
    <View style={styles.container}>
      <View style={{ right: 150, bottom: 34 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.congratulationText}>Congratulations!</Text>
      <Image source={require("../assets/win.jpg")} style={styles.image} />
      <Text style={styles.messageText}>
        You have successfully completed the task and gained {points} Experience
        Points!
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CourseDetails", {
            courseData: param.courseData,
            courseType: "text",
          })
        }
        style={{
          backgroundColor: "green",
          padding: 10,
          borderRadius: 7,
          width: "100%",
          marginTop: "30%",
        }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CongratulationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  congratulationText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: 330,
    height: 330,
    marginBottom: 20,
    resizeMode: "contain",
  },
  messageText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
  },
});
