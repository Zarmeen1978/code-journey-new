import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name='search' size={24} color='#979191' 
      style={{marginRight:10}}
      />
    <TextInput placeholder='Search' />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10,
        elevation:2,
        marginTop:10,
        alignItems:'center'
    }
})
