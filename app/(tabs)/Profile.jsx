import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, AntDesign, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';
import Button from '../components/Button.jsx';

const Profile = () => {
  const route = useRouter();
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.secondSection}>
        <Text style={styles.welcomeStyle}>Welcome to Code Journey</Text>
      </View>
      <View style={styles.detailsSection}>
        {[
          { icon: <AntDesign name="user" size={19} color="black" />, text: "Hello User" },
          { icon: <FontAwesome name="birthday-cake" size={19} color="black" />, text: "Birthday" },
          { icon: <Entypo name="phone" size={19} color="black" />, text: "889 667 889" },
          { icon: <AntDesign name="instagram" size={19} color="black" />, text: "Instagram" },
          { icon: <Fontisto name="email" size={19} color="black" />, text: "1234@gmail.com" },
          { icon: <MaterialIcons name="password" size={19} color="black" />, text: "Password" },
        ].map((item, index) => (
          <View style={styles.detailRow} key={index}>
            {item.icon}
            <Text style={styles.detailText}>{item.text}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.googleSection} onPress={() => console.log("Google Login")}>
        <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
        <Text style={styles.googleText}>Learn with fun</Text>
      </TouchableOpacity>
      {/* <Button
        title="Continue"
        handlePress={() => route.push('/CommunityScreen')}
      /> */}
    </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loginImage: {
    width: 200,
    height: 150,
    marginTop: 50,
  },
  secondSection: {
    paddingTop: 40,
    marginTop: -25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  welcomeStyle: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    color: '#BA55D3',
  },
  detailsSection: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  detailText: {
    marginLeft: 14,
    fontSize: 16,
    color: '#333',
  },
  googleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BA55D3',
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
  },
  googleText: {
    color: 'white',
    fontSize: 16,
  },
  button: {
    color: '#BA55D3',
    fontSize: 12,
    borderRadius: 20,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 44,
    paddingRight: 44,
  },
});
