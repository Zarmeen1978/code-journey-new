import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import GlobalApi from "../shared/GlobalApi";
import { createUser } from "../../lib/appwrite";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const [isSubmitting, setIsSubmitting] = useState(false)

  // Update submit function to handle API call
  const submit = async () => {
    setIsSubmitting(true); // Disable the form while submitting
    try {
      const response = await GlobalApi.registerUser({
        username: form.username,
        email: form.email,
        password: form.password,
      });

      if (response.ok) {
        Alert.alert("Success", "User registered successfully");
        navigation.navigate("InfoOneScreen"); // Navigate to InfoScreen
      } else {
        Alert.alert("Error", response.data?.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      Alert.alert("Error", "An unexpected error occurred");
    } finally {
      setIsSubmitting(false); // Re-enable the form after submission
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.firstSection}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/mimo.png")}
              resizeMode="contain"
              style={styles.sizeImage}
            />
          </View>
          <Text style={styles.textStyle}>Sign up</Text>
          {/* Form Field One */}
          <FormField
            style={styles.mmr}
            title="Email"
            value={form.email}
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            keyboardType="email-address"
          />
          {/* Form Field Two */}
          <FormField
            style={styles.mmr}
            title="Username"
            value={form.username}
            handleChangeText={(e) =>
              setForm({
                ...form,
                username: e,
              })
            }
          />
          <FormField
            style={styles.mmr}
            title="Email"
            value={form.email}
            handleChangeText={(e) =>
              setForm({
                ...form,
                email: e,
              })
            }
            keyboardType="email-address"
          />
          <FormField
            style={styles.mmr}
            title="Password"
            value={form.password}
            handleChangeText={(e) =>
              setForm({
                ...form,
                password: e,
              })
            }
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={submit} // Use the submit function
            disabled={isSubmitting} // Disable button while submitting
          >
            <Text style={styles.btnText}>
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

          <View style={styles.secondSection}>
            <Text style={{ color: "#ccc", fontSize: 16 }}>
              Have an account already?
            </Text>
            <Link
              href="/Sign-in"
              style={{
                marginLeft: 3,
                color: "#C36FDE",
                textDecorationLine: "underline",
                fontSize: 16,
              }}
            >
              <Text style={styles.btnText}>Sign In</Text>
              {/* </TouchableOpacity> */}
            </Link>
            {/* <TouchableOpacity 
            style={styles.btn}
            onPress={submit}  
            disabled={isSubmitting}
          >
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity> */}
            <View style={styles.secondSection}>
              <Text style={{ color: "#ccc", fontSize: 16 }}>
                Don't have an account
              </Text>
              <Text>Sign up</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4B0082",
    height: "100%",
    paddingTop: 12,
  },
  firstSection: {
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
    paddingTop: 4,
    marginBottom: 6,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center", // Center the image horizontally within its container
    justifyContent: "center", // Center the image vertically within its container
  },
  mmr: {
    //marginLeft:20,
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 39,
    width: "100%",
    paddingLeft: 13,
  },
  sizeImage: {
    width: 350,
    height: 200,
  },
  textStyle: {
    color: "#fff",
    fontSize: 35,
    marginTop: 10,
    textAlign: "center",
  },
  btn: {
    width: "78%",
    marginTop: 35,
    marginLeft: 20,
    alignItems: "center",
    backgroundColor: "#C36FDE",
    fontSize: 20,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 44,
  },
  btnText: {
    color: "#F2F0F4",
    fontSize: 20,
  },
  secondSection: {
    justifyContent: "center",
    flexDirection: "row",
    fontWeight: "300",
    color: "#ccc",
    marginTop: 18,
  },
});

// import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import FormField from '../components/FormField';
// import Button from '../components/Button';
// import { Link } from 'expo-router';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { createUser } from '../../lib/appwrite';
// import { useNavigation } from '@react-navigation/native';

// const SignUp = () => {
//   const navigation = useNavigation();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//    // username: ''
//   });

//   const submit = async () => {
//     console.log('hello');
//     navigation.navigate('InfoScreen'); // Navigate to InfoScreen
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.firstSection}>
//         <View style={styles.imageContainer}>
//           <Image
//             source={require('../assets/mimo.png')}
//             resizeMode='contain'
//             style={styles.sizeImage}
//           />
//         </View>
//         <Text style={styles.textStyle}>Sign up</Text>
//         {/* <FormField
//           style={styles.mmr}
//           title='Username'
//           value={form.username}
//           handleChangeText={(e) => setForm({
//             ...form,
//             username: e
//           })}
//         /> */}
//         <FormField
//           style={styles.mmr}
//           title='Email'
//           value={form.email}
//           handleChangeText={(e) => setForm({
//             ...form,
//             email: e
//           })}
//           keyboardType='email-address'
//         />
//         <FormField
//           style={styles.mmr}
//           title='Password'
//           value={form.password}
//           handleChangeText={(e) => setForm({
//             ...form,
//             password: e
//           })}
//         />
//         {/* <TouchableOpacity
//           style={styles.btn}
//           onPress={submit}
//         >
//           <Text style={styles.btnText}>Sign Up</Text>
//         </TouchableOpacity> */}
//         <Link href='/InfoOneScreen' style={styles.btn}>
//         <Text style={styles.btnText}>Sign up</Text>
//         </Link>

//         <View style={styles.secondSection}>
//           <Text style={{color:'#ccc', fontSize:16}}>
//             Have an account already?
//           </Text>
//           <Link
//             href='/Sign-in'
//             style={{
//               marginLeft:3,
//               color:'#C36FDE',
//               textDecorationLine: 'underline',
//               fontSize: 16,
//             }}
//           >
//             Sign in
//           </Link>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default SignUp;

// // Styles unchanged
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#4B0082',
//     height: '100%',
//       paddingTop:12
//   },
//   firstSection: {
//     width: '100%',
//     justifyContent: 'space-between',
//     height: '100%',
//     paddingTop: 4,
//     marginBottom: 6,
//   },
//   imageContainer: {
//     width: '100%',
//     alignItems: 'center', // Center the image horizontally within its container
//     justifyContent: 'center', // Center the image vertically within its container
//   },
//   mmr:{
//     //marginLeft:20,
//     backgroundColor:'#fff',
//     borderRadius:12,
//     height: 39,
//      width: '100%',
//      paddingLeft:13
//   },
//   sizeImage: {
//     width: 350,
//     height: 200,
//   },
//   textStyle: {
//     color: '#fff',
//     fontSize: 35,
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   btn: {
//     width: '78%',
//     marginTop: 35,
//     marginLeft: 20,
//     alignItems: 'center',
//     backgroundColor: '#C36FDE',
//     fontSize: 20,
//     borderRadius: 20,
//     paddingVertical: 20,
//     paddingHorizontal: 44,
//   },
//   btnText: {
//     color: '#F2F0F4',
//     fontSize: 20,
//     display:'flex',
//     justifyContent:'center'
//   },
//   secondSection: {
//     justifyContent: 'center',
//     flexDirection: 'row',
//     fontWeight: '300',
//     color: '#ccc',
//     marginTop: 18
//   }
// })
