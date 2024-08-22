// import React from 'react';
// import { View, Text, Image, Button, StyleSheet, Alert , TouchableOpacity} from 'react-native';
// import { Link } from 'expo-router';
// const GetStarted = () => {
  
//   return (
//     <View style={styles.container}>
//       <Image
//        // source={{ uri: 'https://example.com/your-image.png' }} // Replace with your image URL or local image path
//         source={require('./../assets/start.png')} 
//         style={styles.image}
//       />
//       <Text style={styles.heading}>Welcome to C++ Learning!</Text>
//       <Text style={styles.info}>
//         C++ is a powerful programming language that is widely used for system/software development and game programming. 
//         It is known for its efficiency and control over system resources.
//       </Text>
//               <TouchableOpacity > 
//        <Link href='/CourseItem' 
//              style={styles.button}
//              color="#841584"
//              >Let's Start to Deep Dive</Link>
//        </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//     borderRadius: 100,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   info: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#555555',
//   },
//   buttonContainer: {
//     width: '80%',
//   },
//   button:{
//               color:'#fff',
//                borderRadius:'20px',
//                 backgroundColor:'#C36FDE',
//                 paddingTop:20,
//                 paddingBottom:20,
//                 paddingLeft:'5rem',
//                 paddingRight:'5rem',
//                 marginTop:62
//              },
// });

// export default GetStarted;

import {StyleSheet,View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
export default function GetStarted(){
    return(
        <View style={styles.container}>
            <Image  source={require('./../assets/start.png')}  
            style={{ marginTop:30,
              width:400,height:190,
              resizeMode:'contain'
            }}
            />
       <Text style={styles.welcomeStyle}>Welcome to Code Journey!</Text>
       <Text style={styles.textie}>
        Let's get started with the basic first for the better 
        understanding of coding
       </Text>
      <TouchableOpacity> 
      {/* <Link href='/Reward' 
            // style={{
            //   display:'flex',
            //   color:'#fff',
            //   fontSize: 16, 
            //   marginTop: 35,
            //   marginLeft: 20,
            //   alignItems: 'center',
            //   backgroundColor: '#C36FDE',
            //   fontSize: 20,
            //   borderRadius: 20,
            //   paddingVertical: 20,
            //   paddingHorizontal: 44,}}
            style={styles.button}
            >Start Now</Link> */}
      <Link href='/CourseItem' 
            // style={{
            //   display:'flex',
            //   color:'#fff',
            //   fontSize: 16, 
            //   marginTop: 35,
            //   marginLeft: 20,
            //   alignItems: 'center',
            //   backgroundColor: '#C36FDE',
            //   fontSize: 20,
            //   borderRadius: 20,
            //   paddingVertical: 20,
            //   paddingHorizontal: 44,}}
            style={styles.button}
            >Start Now</Link>
      </TouchableOpacity>
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
      marginLeft:5,
      marginRight:5
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
  });

