import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ user }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={require('../assets/coding.jpg')} style={styles.avatar} />
        <Text style={styles.name}>Ahmad Mudassir</Text>
      </View>

      {/* About Section */}
      <Text style={styles.sectionTitle}>About</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Name:</Text>
          <Text style={styles.infoText}>Ahmad Mudassir</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>ahmad786@gmail.com</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Completed Courses:</Text>
          <Text style={styles.infoText}>None</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Progress:</Text>
          <Text style={styles.infoText}>0%</Text>
        </View>
      </View>

      {/* Logout Button */}
      <Button
       // color='#C36FDE'
       color='#5C36A6'
        title="Log Out"
        onPress={() => alert('Logged out')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 15,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginLeft:19,marginTop:18
  },
  header: {
    //backgroundColor: '#C36FDE',
    padding: 20,
    alignItems: 'center',
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: '300',
    color: '#C36FDE',
    marginBottom: 10
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C36FDE',
  },
  sectionTitle: {
    fontSize: 25,
    marginVertical: 12,
    fontWeight: 'bold',
    marginLeft:12,
    color: '#333',
  },
  infoContainer: {
    marginBottom: 25,
  },
  infoBox: {
    backgroundColor: '#c7c7c7',
    borderRadius: 12,
    padding: 12,display:'flex',alignItems:'flex-start',flexDirection:'row',
    gap:23,margin:12
  },
  infoLabel: {
    color: '#454545',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Profile;
