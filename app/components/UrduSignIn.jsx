import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../components/FormField'
import Button from '../components/Button'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const UrduSignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {
    // Your submit logic here
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.firstSection}>
        <View style={styles.imageContainer}>
            <Image 
              source={require('../assets/mimo.png')}
              resizeMode='contain' 
              style={styles.sizeImage} 
            />
          </View>
          <Text style={styles.textStyle}>  لاگ ان کریں </Text>
          {/* Form Field One */}
          <FormField 
          style={styles.mmr}
            title='ای میل'
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form,
              email: e
            })} 
            keyboardType='email-address' 
          />
          {/* Form Field Two */}
          <FormField 
          style={styles.mmr}
            title="پاس ورڈ"
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form,
              password: e
            })} 
          />
          <TouchableOpacity 
            style={styles.btn}
            onPress={submit}  
            disabled={isSubmitting}
          >
            <Text style={styles.btnText}>سائن ان</Text>
          </TouchableOpacity>
          <View style={styles.secondSection}>
            <Text style={{color:'#ccc', fontSize:16}}>اکاؤنٹ نہیں ہے؟</Text>
            <Link 
              href='/Sign-up'
              style={{
                marginLeft:3,
                color:'#C36FDE',
                textDecorationLine: 'underline',
                fontSize: 16,
              }}
            >
              سائن اپ کریں
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default UrduSignIn

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B0082',
    height: '100%',
      paddingTop:12
  },
  firstSection: {
    width: '100%',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: 4,
    marginBottom: 6,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center', // Center the image horizontally within its container
    justifyContent: 'center', // Center the image vertically within its container
  },
  mmr:{
    //marginLeft:20,
    backgroundColor:'#fff',
    borderRadius:12,
    height: 39,
     width: '100%',
     paddingLeft:13
  },
  sizeImage: {
    width: 350,
    height: 200,
  },
  textStyle: {
    color: '#fff',
    fontSize: 35,
    marginTop: 10,
    textAlign: 'center',
  },
  btn: {
    width: '78%',
    marginTop: 35,
    marginLeft: 20,
    alignItems: 'center',
    backgroundColor: '#C36FDE',
    fontSize: 20,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 44,
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
    marginTop: 18
  }
})

//export default UrduSignIn
