import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../shared/GlobalApi';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
//import Colors from '../Shared/Colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CourseList() { 
    const [courseList,setCourseList]=useState([])
    const navigation=useNavigation();
    
   const green = '#00FF00'; // Define your color here or use Colors.green
  const white = '#FFFFFF'; // Define your color here or use Colors.white
  const gray='#454545';
    useEffect(()=>{
         
        getCourseList();
    },[])

    const getCourseList=async()=>{
        const resp=(await GlobalApi.getCourseList()).data;
        const result=resp.data.map((item)=>({
            id:item.id,
            name:item.attributes.name,
            description:item.attributes.description,
            image:item.attributes.image.data.attributes.url,
            Topic:item.attributes.example,
            

        }
      ))
        setCourseList(result); 
    }

    const onPressCourse=(course)=>{
        
        navigation.navigate('CourseDetails',{courseData:course,
          courseType:'text'}
        )
    }
  return (
    <View style={{marginTop:10}}>
    <Text style={{fontSize:20,fontWeight:'bold' ,
    textTransform:'capitalize',
    marginBottom:3}}>
         Course</Text>

      <FlatList
      data={courseList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <TouchableOpacity style={{backgroundColor:white,marginRight:10,
        borderRadius:10}} onPress={()=>onPressCourse(item)}>
            <Image source={{uri:item.image}}  
            style={{width:180,height:100,  
            borderTopLeftRadius:10,borderTopRightRadius:10,
            resizeMode:'cover'}} />
            <View style={{padding:10}}>
            <Text style={{fontWeight:'bold',fontSize:15}}>{item.name}</Text>
            <Text style={{color:gray,fontWeight:'300'}}>{item.Topic?.length} Lessons</Text>

            </View>
           
        </TouchableOpacity> 
      )}
      />
    </View>
  )
}
