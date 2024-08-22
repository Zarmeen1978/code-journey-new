import React, { useEffect } from 'react';
import {Slot, Stack} from 'expo-router'
const RootLayout=()=> {
  useEffect(()=>{
   // if(error) throw error;
  })
  return (
    
        <Stack>
          <Stack.Screen name='index' 
          options={{headerShown:false}}/>
          {/* <Stack.Screen name='pages' /> */}
          <Stack.Screen name="(auth)" 
          options={{headerShown:false}}  />
           <Stack.Screen name="(pages)" 
          options={{headerShown:false}}  />
          {/* <Stack.Screen name="(tabs)" 
          options={{headerShown:false}}  /> */}
           {/* <Stack.Screen name="/search/[query]" 
          options={{headerShown:false}}  /> */}
        </Stack>
      )
     }

export default RootLayout;