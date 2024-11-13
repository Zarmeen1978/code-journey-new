import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../shared/GlobalApi';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
//import Colors from '../Shared/Colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';

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
        const resp=(await GlobalApi.getCourseEnglishList()).data;
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
    <ScrollView style={{marginTop:10}}>
    <Text style={{fontSize:30,fontWeight:'bold' ,
    textTransform:'capitalize', fontFamily:'sans-serif',
    marginTop:25,
    marginLeft:12,
    marginBottom:8}}>
         Course English Detail</Text>
      <FlatList style={{marginLeft:25}}
      data={courseList}
    //   horizontal={true}
    //   showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <TouchableOpacity style={{backgroundColor:white,marginRight:10,
            marginTop:25,
            display:'flex',alignItems:'center',justifyContent:'space-evenly',
        borderRadius:10}} onPress={()=>onPressCourse(item)}>
            <Image source={{uri:item.image}}  
            style={{width:280,height:120,  
            borderTopLeftRadius:10,borderTopRightRadius:10,
            resizeMode:'cover'}} />
            <View style={{padding:10}}>
            <Text style={{fontWeight:'bold',fontSize:15}}>{item.name}</Text>
            <Text style={{color:gray,fontWeight:'300'}}>{item.Topic?.length} Lessons</Text>

            </View>
           
        </TouchableOpacity> 
      
      )
      
    }
      />
    </ScrollView>
  )
}
