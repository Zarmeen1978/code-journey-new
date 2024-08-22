import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({title,handlePress,style,
    textStyles,isLoading}) => {
  return (
    <TouchableOpacity onPress={handlePress}
    activeOpacity={0.7} 
    // style={{backgroundColor:'#ccc',
    //     borderRadius:'20px',justifyContent:'center',
    //     alignItems:'center'
    // }}  
    style={{
      alignItems:'center',
        backgroundColor:'#C36FDE',
        fontSize:12,
        borderRadius:'20px',
         color:'#F2F0F4',
          paddingTop:25,
          paddingBottom:25,
          paddingLeft:44,
          paddingRight:44,}}
    className ={`${isLoading ? 'opacity-50':''}`}
    disabled={isLoading}>

        <Text className={`${textStyles}`} 
        style={{color:'#fff',
            fontWeight:'semibold'
        }} >
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default Button