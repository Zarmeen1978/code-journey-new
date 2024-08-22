import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
const _layout = () => {
  return (
    <>
    <Stack>
    <Stack.Screen name='InfoOneScreen'
      options={{
        headerShown:false
      }} />
      <Stack.Screen name='InfoTwoScreen'
      options={{
        headerShown:false
      }} /><Stack.Screen name='InfoThreeScreen'
      options={{
        headerShown:false
      }} /><Stack.Screen name='InfoCommunityScreen'
      options={{
        headerShown:false
      }} /><Stack.Screen name='GetStarted'
      options={{
        headerShown:false
      }} />
      <Stack.Screen name='Sign-in'
      options={{
        headerShown:false
      }} />
      <Stack.Screen name='Sign-up'
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