import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';

const FormField = ({ title, value, placeholder, handleChangeText, style, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {title}
      </Text>

      <View style={styles.field} >
        <TextInput 
          value={value}
          placeholder={placeholder}
        //  placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
         style={style} 
          {...props}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {/* <Ionicons 
              name={showPassword ? "eye-off-outline" : "eye-outline"} 
              size={24} 
              color="black"
              style={{ width: 24, height: 24,marginRight:9 }} 
              resizeMode='contain' 
            /> */}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft:32,
    marginTop:30,
  },
  textStyle: {
    color: '#C36FDE',
    fontWeight: '500', // 'medium' is not a valid fontWeight in React Native
    fontSize:20,
    marginRight:35,
    marginBottom:12
},
  field: {
    borderRadius: 12,
    height: 39,
     width: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'space-between',
    flexDirection: 'row',
  },
  
  textInput: {
    flex: 1,
    color: 'black',
    fontWeight: '600', // 'semibold' is not a valid fontWeight in React Native
  }
})
