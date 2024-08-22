import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CourseContent = ({course}) => {
  return (
    <View>
      <Text
      style={{fontWeight:'bold',
        fontSize:16
      }}
      >Course Content</Text>
      <FlatList
      data={course?.Topic}
      renderItem={({item})=>(
        <View>
          <Text>{index+1}</Text>
          <Text>{item.Topic}</Text>
          </View>
      )}
      />
    </View>
  )
}

export default CourseContent

const styles = StyleSheet.create({})