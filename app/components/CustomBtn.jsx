import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomBtn = ({title,handlePress,
    isLoading
}) => {
  return (
    <TouchableOpacity style={styles.btn} 
    onPress={handlePress}
    activeOpacity={0.7}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn:{
        width:'85%',
        marginTop:20,
        marginLeft:20,
        alignItems:'center',
        backgroundColor:'#C36FDE',
        fontSize:20,
        borderRadius:'20px',
         color:'#F2F0F4',
           paddingTop:25,
          paddingBottom:25,
          paddingLeft:44,
          paddingRight:44,
      }
})