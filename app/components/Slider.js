import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../shared/GlobalApi';
import { FlatList, Image, Dimensions } from 'react-native';

export default function Slider() {
    const [slider, setSlider] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSlider();
    }, []);

    const getSlider = async () => {
        try {
            const response = await GlobalApi.getSlider();
            if (!response || !response.data) {
                throw new Error('Invalid response structure');
            }

            const result = response.data;
            const resp = result.data.map((item) => ({
                id: item.id,
                name: item.attributes.name,
                image: item.attributes.image.data.attributes.url
         }));

            setSlider(resp);
        } catch (err) {
            console.error('Error fetching slider data:', err);
            setError('Failed to fetch slider data');
        }
    };

    return (
        <View style={{ marginTop: 20 }}>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Image 
                            source={{ uri: item.image }} 
                            style={{ 
                                width: Dimensions.get('screen').width * 0.87, 
                                height: 150, 
                                borderRadius: 10, 
                                marginRight: 15 
                            }} 
                        />
                    </View>
                )}
            />
        </View>
    );
}

// import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
// import React,{useState,useEffect} from 'react'
// import GlobalApi from '../shared/GlobalApi'

// const Slider = () => {
//     const [slider,setSlider]= useState([])
//     useEffect(()=>{
//         getSlider();
//       })
//       const getSlider=async()=>{
//         const result=(await GlobalApi.getSlider()).data;
//         console.log(result);
//         const resp=result.data.map((item)=>({
//           id:item.id,
//           name:item.attributes.name,
//           image:item.attributes.image.data.attributes.url
//         }))
//         setSlider(resp)
//       }

//   return (
//     <View style={{marginTop:10}}>
//       <FlatList
//       data={slider}
//       horizontal={true}
//       showsHorizontalScrollIndicator={false}
//       renderItem={({item})=>(
//         <View>
//             <Image  source={{uri:item.image}}
//             style={{width:Dimensions.get('screen').width*0.87,
//                 height:150,borderRadius:10,marginRight:15
//             }} />
//             </View>
//       )}
//       />
//     </View>
//   )
// }

// export default Slider

// const styles = StyleSheet.create({})