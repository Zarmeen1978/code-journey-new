import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
const _layout = () => {
  return (
    <>
    <Stack>
    <Stack.Screen name='CourseItem'
      options={{
        headerShown:false
      }} />
      <Stack.Screen name='CourseDetails'
      options={{
        headerShown:false
      }} />
       <Stack.Screen name='CourseChapter'
      options={{
        headerShown:false
      }} />
       <Stack.Screen name='Profile'
      options={{
        headerShown:false
      }} />
       <Stack.Screen name='CongratulationScreen'
      options={{
        headerShown:false
      }} />
      <Stack.Screen name='UrduCourse'
      options={{
        headerShown:false
      }} />
    </Stack>
    <StatusBar  backgroundColor='#4B0082' style='light'/>
    </>
  )
}

export default _layout

const styles = StyleSheet.create({})