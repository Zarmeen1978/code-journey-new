import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const courseContent = [
  { id: '01', title: 'تعارف' },
  { id: '02', title: 'متغیرات' },
  { id: '03', title: 'ڈیٹا کی اقسام' },
  { id: '04', title: 'نمبرز' },
  { id: '05', title: 'کاسٹنگ' },
];

const CourseItem = ({ id, title }) => (
  <View style={styles.courseItem}>
    <Text style={styles.courseNumber}>{id}</Text>
    <Text style={styles.fontUrdu}>{title}</Text>
    <Text style={styles.asterisk}>*</Text>
  </View>
);

const UrduCourse = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => console.log("میں دبایا گیا ہوں")}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={[styles.title,styles.fontUrdu]}>سی پلس پلس کی بنیادی باتیں</Text>
      {/* <Text style={[styles.title, styles.fontUrdu]}>C++ کی بنیادیات</Text> */}
      <Text style={[styles.subtitle,styles.fontUrdu]}>کوڈ جرنی کے ذریعے</Text>

      {/* <Text style={[styles.subtitle, styles.fontUrdu]}>بذریعہ TubeCoder</Text> */}
      <Image
        source={require('../assets/Cplus.png')}
        resizeMethod='contain'
        style={styles.image}
      />
      <Text style={[styles.headingStyle, styles.fontUrdu]}>کورس کے بارے میں</Text>
      <Text style={[styles.description,styles.fontUrdu]}>
        سی پلس پلس ایک عام مقصد کے لیے استعمال ہونے والی پروگرامنگ زبان ہے جو ویب ڈویلپمنٹ، ڈیٹا تجزیہ، اور گیم ڈویلپمنٹ سمیت کئی مختلف کاموں کے لیے استعمال ہوتی ہے۔
      </Text>

      {/* <Text style={[styles.content, styles.fontUrdu]}>
        C++ ایک عمومی مقصد کی پروگرامنگ زبان ہے جو ویب ترقی، ڈیٹا تجزیہ، اور گیم ترقی سمیت کئی کاموں کے لئے استعمال ہوتی ہے۔
      </Text> */}
      <Text style={[styles.headingStyle, styles.fontUrdu]}>کورس کا مواد</Text>
      {courseContent.map(item => (
        <CourseItem key={item.id} id={item.id} title={item.title} />
      ))}
    </ScrollView>
  );
};

export default UrduCourse;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight:20
  },
  subtitle: {
    color: '#454545',
    marginRight: 12,
    marginRight:20
  },
  description: {
    textAlign: 'justify',
    marginRight: 20,
  },
  headingStyle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    marginBottom: 10,
  },
  content: {
    textAlign: 'justify',
   // marginRight: 30,
  },
  courseItem: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 12,
    backgroundColor: 'lightblue',
    borderRadius: 9,
    padding: 6,
    width: '93%',
  },
  image: {
    height: 150,
    width: 340,
    marginTop: 10,
    borderRadius: 10,
  },
  courseNumber: {
    color: 'white',
    fontSize: 20,
  },
  asterisk: {
    color: 'blue',
    width: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontUrdu: {
    fontFamily: 'Noto Nastaliq Urdu', // Replace with your desired Urdu font
  },
});
