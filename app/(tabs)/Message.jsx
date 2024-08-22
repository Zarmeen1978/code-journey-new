import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = () => {
  return (
    <View style={{flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Text
      style={{fontSize:23}}
      >All the message and 
        notification is shown here
      </Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})