import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const courseContent = [
  { id: '01', title: 'Introduction' },
  { id: '02', title: 'Variables' },
  { id: '03', title: 'Data Type' },
  { id: '04', title: 'Numbers' },
  { id: '05', title: 'Casting' }
];

const CourseItem = ({ id, title }) => (
  <View style={styles.courseItem}>
    <Text style={styles.courseNumber}>{id}</Text>
    <Text>{title}</Text>
    <Text style={styles.asterisk}>*</Text>
  </View>
);

const EnglishCourse = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => console.log("I am pressed")}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Basic of C++</Text>
      <Text style={styles.subtitle}>By CODE JOURNEY</Text>
      <Image
        source={require('../assets/Cplus.png')}
        resizeMethod='contain'
        style={styles.image}
      />
      <Text style={styles.headingStyle}>About Course</Text>
      <Text style={styles.description}>
        C++ is a general-purpose programming language that is used for a wide range of tasks including web development, data analysis, and game development.
      </Text>
      <Text style={styles.headingStyle}>Course Content</Text>
      {courseContent.map(item => (
        <CourseItem key={item.id} id={item.id} title={item.title} />
      ))}
    </ScrollView>
  );
};

export default EnglishCourse;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#454545',
  },
  image: {
    height: 150,
    width: 340,
    marginTop: 10,
    borderRadius: 10,
  },
  headingStyle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'justify',
    marginRight: 20,
  },
  courseItem: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 12,
    backgroundColor:'#FFFFF7',
    //backgroundColor: 'lightblue',
    borderRadius: 9,
    padding: 6,
    width: '93%',
  },
  courseNumber: {
    color: '#454545',
    fontSize: 20,
  },
  asterisk: {
    color: 'blues',
    width: 25,
    height:20,
    backgroundColor:'lightblue',
    borderRadius:10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
