import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useRouter, useNavigation } from 'expo-router';
import Button from '../components/Button.jsx';

const UrduProfile = () => {
  const route = useRouter();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Image
        style={styles.loginImage}
        source={require('../assets/laptop.png')}
      /> */}
      <View style={styles.secondSection}>
        <Text style={styles.welcomeStyle}>کوڈ سفر میں خوش آمدید</Text>
      </View>
      <View style={styles.detailsSection}>
        {[
          { icon: <AntDesign name="user" size={19} color="black" />, text: "ہیلو صارف" },
          { icon: <FontAwesome name="birthday-cake" size={19} color="black" />, text: "سالگرہ" },
          { icon: <Entypo name="phone" size={19} color="black" />, text: "889 667 889" },
          { icon: <AntDesign name="instagram" size={19} color="black" />, text: "انسٹاگرام" },
          { icon: <Fontisto name="email" size={19} color="black" />, text: "1234@gmail.com" },
          { icon: <MaterialIcons name="password" size={19} color="black" />, text: "پاس ورڈ" },
        ].map((item, index) => (
          <View style={styles.detailRow} key={index}>
            {item.icon}
            <Text style={styles.detailText}>{item.text}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.googleSection} onPress={() => console.log("Google Login")}>
        <Text style={styles.googleText}>تفریح کے ساتھ سیکھیں</Text>
      </TouchableOpacity>
      {/* <Button
        title="جاری رکھیں"
        handlePress={() => route.push('/CommunityScreen')}
      /> */}
    </View>
  );
};

export default UrduProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
//   loginImage: {
//     width: 300,
//     height: 230,
//     marginTop: 50,
//   },
  secondSection: {
    paddingTop: 40,
    marginTop: -25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  //  backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  welcomeStyle: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    color: '#BA55D3',
    fontFamily:'Noto Nastaliq Urdu'
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
    fontFamily:'Noto Nastaliq Urdu'
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
    fontFamily:'Noto Nastaliq Urdu'
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
