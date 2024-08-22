import {View,Text, Image} from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

const TabIcon =({icon,color,name,focused})=>{
    return(
        <View 
        style={{
            alignItems:'center',justifyContent:'center',
            gap:2
        }}
        >
            <Image
            source={icon}
            resizeMode='contain'
         //  tintColor={color}
            style={{width:50,height:50,
            }}
            />
              <Text
        style={{
        color: '#000000',
         fontWeight: focused ? 'bold' : 'normal',         }}
       >
         {name}
      </Text>
        </View>
    )
}

const TabsLayout=()=>{
    return (
    <Tabs  
    screenOptions={{
       tabBarShowLabel:false,
       tabBarActiveTintColor:"#ADD8E6",
       tabBarInactiveTintColor:"#CDCDEO",
        tabBarStyle:{
            borderTopWidth:1,
            borderTopColor:'#232533',
           height:84,
        }
    }}
    >
        <Tabs.Screen name='Learn'
        options={{
            title:'Learn',
            headerShown:false,
            tabBarIcon : ({color,focused})=>(
                <TabIcon 
                icon={require('./../assets/lluu.png') 
                }
                color={color}

                name="Learn"
                focused={focused}
                />
            )
        }}
        />
        <Tabs.Screen name='Reward'
        options={{
            title:'Reward',
            headerShown:false,
            tabBarIcon : ({color,focused})=>(
                <TabIcon 
                icon={require('./../assets/pp3.jpg')}
                color={color}
                name="Reward"
                focused={focused}
                />
            )
        }}
        />
        <Tabs.Screen name='Message'
        options={{
            title:'Message',
            headerShown:false,
            tabBarIcon : ({color,focused})=>(
                <TabIcon 
                icon={require('./../assets/ii.png')}
                color={color}
                name="Message"
                focused={focused}
                />
            )
        }}
        />
        <Tabs.Screen name='Profile'
        options={{
            title:'Profile',
            headerShown:false,
            tabBarIcon : ({color,focused})=>(
                <TabIcon 
                icon={require('./../assets/profile.png')}
                color={color}
                name="Profile"
                focused={focused}
                />
            )
        }}
        />
    </Tabs>
    )
}
export default TabsLayout