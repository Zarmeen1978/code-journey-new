// import React from 'react';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';
// import HomeScreen from './HomeScreen';

// const App = () => {
//   return (
//     <I18nextProvider i18n={i18n}>
//       <HomeScreen />
//     </I18nextProvider>
//   );
// };

// export default App;
    
import {  StyleSheet, Image, Text,View,TouchableOpacity} from "react-native";
import React from "react";
import { Link} from "expo-router";
import {Redirect,router} from 'expo-router'
import Button from "./components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
//import { UseGlobalContext } from "../app/context/GlobalProvider";
export default function App(){
  // const {isLoading,isLoggedIn} = UseGlobalContext();
  // if(!isLoading && isLoggedIn) return <Redirect
  // href='/Learn'/>
  return (
    <SafeAreaView style={styles.container}>
      <Image  style={{width:'240px',height:'160px'}} source={require('../app/assets/mimo.png')}/>
      <Text style={styles.heading}> <p>CODE JOURNEY</p></Text>
     {/* <Text style={styles.heading}><p>خوش آمدید</p></Text>  */}
    <Button
      title="Start Your Journey"
      handlePress={()=>router.push('/Sign-in')}
       />
       {/* <Button
      title="کوڈنگ سیکھیں"
      handlePress={()=>router.push('/Sign-in')}
       /> */}
       {/*  "welcome": "خوش آمدید",
    "learnCoding": "کوڈنگ سیکھیں"
   */}
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#4B0082'
  },
  heading:{
    fontSize:40,
    color:'#ccc',
   // color:'#6495ED',
    fontWeight:'semibold'
   // color:'#454545',
  },
  button:{
    backgroundColor:'#C36FDE',
    fontSize:12,
    borderRadius:'20px',
     color:'#F2F0F4',
      paddingTop:25,
      paddingBottom:25,
      paddingLeft:44,
      paddingRight:44,
  }
 })
   
       
   