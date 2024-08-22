import { FlatList, Image, StyleSheet, Text, TurboModuleRegistry, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../shared/GlobalApi'
import {Link} from 'expo-router'
const VideoCourse = () => {
  const [videoList,setVideoList]=useState([])
  useEffect(()=>{
    getVideoCourse();
  })
  const getVideoCourse = async () => {
    try {
      const resp = (await GlobalApi.getVideoCourse()).data;
      if (resp && resp.data) {  // Check if resp.data is not null or undefined
        const result = resp.data.map((item) => ({
          
          id: item.id,
          name: item.attributes.name,
          des: item.attributes.description,
          image: item.attributes.videoUrl.data.attributes.url
        }));
        setVideoList(result);
      } else {
        console.error("No data found in response:", resp);
      }
    } catch (error) {
      console.error("Error fetching video courses:", error);
    }
  };
  
  return (
    <View style={{marginTop:15}}>
      <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>Video Course</Text>
      <FlatList
      data={videoList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <View>
          <Link href='/UrduCourse'>
          <Image
          source={{uri:item.image}}
          style={{width:180,height:100, marginRight:10,
            borderRadius:7
          }}
          
          /></Link>
          </View>
      )}
      />
    </View>
  )
}

export default VideoCourse

const styles = StyleSheet.create({})