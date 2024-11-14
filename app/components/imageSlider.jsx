import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 
const handleImagePress = () => {
    console.log('This is the image');
  };
  const handleOneImagePress = () => {
    console.log('This is one the image');
  };const handleTwoImagePress = () => {
    console.log('This is  second the image');
  };const handleThreeImagePress = () => {
    console.log('This is the  image');
  };
function ImageSlider() {
  return (
    <>
    <Text
      style={{textAlign:'left',
        marginTop:25,color: "#C36FDE",
        fontSize:29,fontWeight:'bold'}}
      >Select a Course</Text>
      {/* C Course */}
    <View style={styles.container}>
       <View>
          <Link href='/UrduCourse'>
          <Image
           source={require('../assets/C.png')}
          style={{width:240,height:120,marginTop:12,
            borderRadius:7
          }}
          />
          </Link>
          </View>
    </View>
      {/* React Course */}
      <View style={styles.container}>
       <View>
          <Link href='/UrduCourse'>
          <Image
           source={require('../assets/react.png')}
          style={{width:240,height:120,marginTop:12,
            borderRadius:7
          }}
          />
          </Link>
          </View>
    </View>  {/* Python Course */}
    <View style={styles.container}>
       <View>
          <Link href='/UrduCourse'>
          <Image
           source={require('../assets/python.png')}
          style={{width:240,height:120,marginTop:12,
            borderRadius:7
          }}
          />
          </Link>
          </View>
    </View>  {/* JS Course */}
    <View style={styles.container}>
       <View>
          <Link href='/UrduCourse'>
          <Image
           source={require('../assets/js.png')}
          style={{width:240,height:120,marginTop:12,
            borderRadius:7
          }}
          />
          </Link>
          </View>
    </View>
    </>
  );
}

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    gap:9,
  },
  image: {
    borderRadius:12,
    width: 260,
    height: 120,
    marginBottom: 10,
  },
});


// import React from 'react';
// import { View, Image, StyleSheet, TouchableOpacity, Alert, Text } from 'react-native';

// export default function ImageSlider() {
//   const handleImagePress = (imageNumber) => {
//     console.log(`I am in - Image ${imageNumber}`);
//     Alert.alert(`I am in - Image ${imageNumber}`);
//   };

//   return (
//     <View style={styles.container}>
//       {/* {[1, 2, 3, 4].map((num) => (
//         <TouchableOpacity key={num} onPress={() => handleImagePress(num)}>
//           <Image
//             source={{ }}
//             style={styles.image}
//           />
//         </TouchableOpacity>
//       ))} */}
//       <Text>Hello this is the text</Text>
//       <TouchableOpacity>
//         <Image   src={require("../assets/C.png")}  />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   image: {
//     width: 300,
//     height: 200,
//     marginBottom: 10,
//   },
// });
