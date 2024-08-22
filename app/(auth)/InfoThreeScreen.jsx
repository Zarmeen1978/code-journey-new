import {StyleSheet,View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
export default function InfoThreeScreen(){
    return(
        <View style={styles.container}>
            <Image  source={require('./../assets/team.png')}  
            style={{ marginTop:30,
              width:400,height:190,
              resizeMode:'contain'
            }}
            />
       <Text style={styles.welcomeStyle}>Level up and get hired</Text>
       <Text style={styles.textie}>
      Once you are comfortable with the basics, you will 
      be able to understand Object Oriented Programming 
       </Text>
      <TouchableOpacity> 
       <Link href="/InfoCommunityScreen" style={styles.button}>
       Next
      </Link>
      </TouchableOpacity>
      {/* <View style={styles.lastPart}>
        <Text>I ALREADY HAVE AN ACCOUNT</Text>
      </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
      //backgroundColor: '#FE979C',
    //  backgroundColor:'#F6E8DF',
      alignItems: 'center',
     justifyContent:'space-evenly',
      flexDirection:'column'
    },
    welcomeStyle:{
        fontSize:24,
        textAlign:'center',
        fontWeight:'mediums',
        fontFamily:'sans-serif',
        color:'#000000'
    },
    textie:{
      fontSize:20,
      textAlign:'center',
      fontWeight:'mediums',
      color:'#454545',
    },
    button:{
          color:'#fff',
           borderRadius:'20px',
            backgroundColor:'#C36FDE',
            paddingTop:20,
            paddingBottom:20,
            paddingLeft:'8rem',
            paddingRight:'8rem',
         },
         lastPart:{
          alignItems:'center',
          textAlign:'center',
          color:"D3D3D3"
         }
  });


