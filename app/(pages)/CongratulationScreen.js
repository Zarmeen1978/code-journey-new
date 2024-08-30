import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
const CongratulationScreen = () => {
  
  const navigation = useNavigation();
  return (
    <>
    <View style={styles.container}>
      <View style={{ right:150, bottom:34
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </TouchableOpacity>
      </View>
      <Text style={styles.congratulationText}>Congratulations!</Text>
      <Image
        source={require('../assets/win.jpg')} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.messageText}>You have successfully completed the task!</Text>
    </View>
    </>
  );
};

export default CongratulationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#fff'
    //backgroundColor: '#f8f9fa',
  },
  congratulationText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for congratulation
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 330,
    height: 330,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  messageText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});
