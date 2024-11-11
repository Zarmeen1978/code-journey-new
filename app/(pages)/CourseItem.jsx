

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
import VideoCourse from '../components/VideoCourse'
import CourseList from '../components/CourseList'
import Paragraph from '../components/Paragraph'
import ArticleList from '../components/ArticleList'
import OtherCourse from '../components/OtherCourse'
const CourseItem = () => {
  
  return (
    <>
    <ScrollView style={{padding:30,backgroundColor:'#121212'}}>
   <WelcomeHeader/>
   <Slider/>
   {/* <Paragraph/> */}
   <VideoCourse/>
   <OtherCourse/>
   {/* <CourseList/> */}
    </ScrollView>
    </>
  )
}

export default CourseItem

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 340,
    marginTop: 10,
    borderRadius: 10,
  },
  container:{
   // backgroundColor:'#000000',
    display:'flex', alignItems:'center',
    color:'#454545', 
    fontSize: 78,
    fontWeight: 'bold',
    marginBottom: 10,
  }
})



