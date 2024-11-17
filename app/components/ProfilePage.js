import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import AppContext from "../context/AppContext";
import { useRouter } from "expo-router";

const ProfilePage = ({ user }) => {
  const router = useRouter();
  const { setUser } = useContext(AppContext);

  const handleLogout = () => {
    setUser(null); // Set the user to null on logout
    router.replace("/"); // Navigate to the "Login" screen (replace with your route)
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* User Details */}
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Enrolled Courses:</Text>
          <Text style={styles.value}>{user.enrolledCourses}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Completed Courses:</Text>
          <Text style={styles.value}>{user.completedCourses}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Progress:</Text>
          <Text style={styles.value}>{user.progress}%</Text>
        </View>
      </View>

      {/* Logout Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Log Out"
          color="#d9534f"
          onPress={handleLogout} // Trigger the logout function
        />
      </View>
    </ScrollView>
  );
};

// Sample user data for demonstration
const user = {
  avatar: "https://your-avatar-url.com/avatar.jpg",
  name: "John Doe",
  email: "john.doe@example.com",
  enrolledCourses: 5,
  completedCourses: 3,
  progress: 60,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    backgroundColor: "#6200ee",
    paddingVertical: 30,
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#ffffff",
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: "#e0e0e0",
  },
  detailsSection: {
    padding: 20,
    backgroundColor: "#ffffff",
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  detailItem: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
    color: "#555555",
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});

export default ProfilePage;
