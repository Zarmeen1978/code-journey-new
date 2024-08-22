import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
const WelcomeHeader = () => {
  const navigation=useNavigation();
  const onPress=()=>{
    navigation.navigate('Profile')
  }
    //const {userData,setUserData} = useContext(AuthenticatorResponse)
  return (
    <View style
    ={styles.container}>
      <View>
        <Text>Hello</Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#C36FDE'}}>Ahmad</Text>
        {/* <Text>{userData?.name}</Text> */}
      </View>
      <View>
    
      <FontAwesome6 name="user" size={24} color="white" style={
        {width:'fit-to-content',borderRadius:100, 
        backgroundColor:'#C36FDE',
        marginLeft:'auto',padding:9
      }}/>
      {/* <Image source={require('../assets/profile.png')}
      style={{width:40,height:40,borderRadius:100, 
        backgroundColor:'#C36FDE',
        marginLeft:20,paddingBottom:12
      }}
      /> */}
      {/* <TouchableOpacity>
        <Link href='/ProfilePgae'>
        <Text style={{color:'#C36FDE'}}>Create Profile!</Text>
        </Link>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={()=>onPress()}>
      <Text style={{color:'#C36FDE'}}
      
      >Create Profile!</Text>
      </TouchableOpacity>
     
      </View>
    </View>
  )
}

export default WelcomeHeader

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
})