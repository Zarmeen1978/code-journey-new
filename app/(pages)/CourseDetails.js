import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
//import Colors from '../Shared/Colors';
import { Image } from 'react-native';
import CourseInformation from '../components/CourseInformation';
import { TouchableOpacity } from 'react-native';
import GlobalApi from '../shared/GlobalApi';
//import { AuthContext } from '../Context/AuthContext';
export default function CourseDetails() {
    const param=useRoute().params;
    const [course,setCourse]=useState([])
    const navigation=useNavigation();
    const [userProgress,setUserProgress]=useState([]);
    //const {userData,setUserData}=useContext(AuthContext);
    useEffect(()=>{
      
        setCourse(param?.courseData);
        param.courseData.id?getCourseProgress():null;
    },[param.courseContentId])

    const getCourseProgress = () => {
        GlobalApi.getCourseList(param?.courseData.id)
            .then(resp => {
                if (resp.data.data) {
                    const result = resp.data.data.map(item => ({
                        id: item.id,
                        //courseId: item.attributes.example,
                        courseContentId: item.attributes.example,
                    }));
                    
                    setUserProgress(result);
                }
            });
    };
    
   

 
  return (
    <View style={{padding:20,paddingTop:50}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <View>
            <Text style={{fontSize:20,
            fontWeight:'bold'}}>{course.name}</Text>
            <Text style={{color:'gray'}}>By Code Journey</Text>
            <Image source={{uri:course.image}} 
            style={{height:150,marginTop:10,borderRadius:10}} />
            <Text style={{marginTop:10,
               fontSize:16, fontWeight:'bold'}}>About Course</Text>
            <Text numberOfLines={4} 
            style={{color:'gray'}}>{course.description}</Text>
        </View>
        <CourseInformation course={course} 
         userProgress={userProgress}
         courseType={param.courseType} />
    </View>
  )
}
