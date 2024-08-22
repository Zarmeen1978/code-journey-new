import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../components/FormField';
import Button from '../components/Button';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createUser } from '../../lib/appwrite';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: ''
  });

  const submit = async () => {
    console.log('hello');
    navigation.navigate('InfoScreen'); // Navigate to InfoScreen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstSection}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/mimo.png')}
            resizeMode='contain' 
            style={styles.sizeImage} 
          />
        </View>
        <Text style={styles.textStyle}>Sign up</Text>
        <FormField 
          style={styles.mmr}
          title='Username'
          value={form.username}
          handleChangeText={(e) => setForm({
            ...form,
            username: e
          })} 
        />
        <FormField 
          style={styles.mmr}
          title='Email'
          value={form.email}
          handleChangeText={(e) => setForm({
            ...form,
            email: e
          })} 
          keyboardType='email-address' 
        />
        <FormField 
          style={styles.mmr}
          title='Password'
          value={form.password}
          handleChangeText={(e) => setForm({
            ...form,
            password: e
          })} 
        />
        {/* <TouchableOpacity 
          style={styles.btn}
          onPress={submit}
        >
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity> */}
        <Link href='/InfoOneScreen' style={styles.btn}>
        <Text style={styles.btnText}>Sign up</Text>  
        </Link>
      
        <View style={styles.secondSection}>
          <Text style={{color:'#ccc', fontSize:16}}>
            Have an account already?
          </Text>
          <Link 
            href='/Sign-in'
            style={{
              marginLeft:3,
              color:'#C36FDE',
              textDecorationLine: 'underline',
              fontSize: 16,
            }}
          >
            Sign in
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

// Styles unchanged
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B0082',
    height: '100%',
  },
  firstSection: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeImage: {
    width: 350,
    height: 200,
  },
  mmr:{
    borderRadius:12,
    height: 39,
    width: '100%',
    paddingLeft:13
  },
  textStyle: {
    color: '#fff',
    fontSize: 35,
    marginTop: 5,
    textAlign: 'center',
  },
  btn: {
    width: '78%',
    marginTop: 35,
    display:'flex',
    backgroundColor: '#C36FDE',
    fontSize: 20, marginLeft:20,borderRadius:12,alignItems:'center',
    justifyContent:'center',
    padding:14,borderRadius:12
  },
  btnText: {
    color: '#F2F0F4',
    fontSize: 20,
  },
  secondSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    fontWeight: '300',
    color: '#ccc',
    marginTop: 18,
    marginBottom:12
  }
});
