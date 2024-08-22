import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

const Profile = ({ user }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={require('../assets/coding.jpg')} style={styles.avatar} />
        <Text style={styles.name}>Ahmad</Text>
        <Text style={styles.email}>ahmad@gmail.com</Text>
      </View>

      {/* User Details */}
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <Text style={styles.detailItem}>Enrolled Courses: C++</Text>
        <Text style={styles.detailItem}>Completed Courses: None</Text>
        <Text style={styles.detailItem}>Progress: 0%</Text>
      </View>

      {/* Logout Button */}
      <Button 
      color='#C36FDE'
      title="Log Out" onPress={() => alert('Logged out')} />

      {/* Add more sections like achievements, settings, etc. */}
    </ScrollView>
  );
};

// Sample user data for demonstration
const user = {
  avatar: 'https://your-avatar-url.com',
  name: 'John Doe',
  email: 'john.doe@example.com',
  enrolledCourses: 5,
  completedCourses: 3,
  progress: 60,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#C36FDE',
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  email: {
    fontSize: 18,
    color: '#ffffff',
  },
  detailsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Profile;
