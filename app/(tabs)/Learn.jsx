import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import UrduCourse from '../components/UrduCourse'
import EnglishCourse from '../components/EnglishCourse'
import { Link } from 'expo-router'
import { Button } from 'react-native'
import WelcomeHeader from '../components/WelcomeHeader'
import SearchBar from '../components/SearchBar'
import GlobalApi from '../shared/GlobalApi'
import Slider from '../components/Slider'

import CourseList from '../components/CourseList'
import Paragraph from '../components/Paragraph'
const Learn = () => {
  
  return (
    <>
    <SafeAreaView style={{padding:30}}>
      <WelcomeHeader/>
      <SearchBar/>
      <Slider/>
   <Paragraph/>
   <CourseList/>
    </SafeAreaView>
    </>
  )
}

export default Learn




