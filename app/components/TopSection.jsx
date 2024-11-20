import React, { useRef, useEffect } from "react";
import { StyleSheet, Text, View, Animated, Image, TouchableOpacity } from "react-native";
import { useContext } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";

function TopSection() {
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const { user } = useContext(AppContext); // access userData from context

  const onPress = () => {
    navigation.navigate("Profile");
  };
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnimation, {
          toValue: -10, // Move up
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnimation, {
          toValue: 10, // Move down
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [moveAnimation]);

  return (
    <>
    <View style={styles.container}>
      <View style={styles.halfScreen}>
              {/* Adding profile component */}
              <View 
      style={{display:'flex',  alignItems:'center', justifyContent:'space-between',flexDirection:'row'}}>
      <View>
        <Text style={{ color: "#80FFDB" }}>Hello</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#80FFDB" }}>
          {user?.username || "User"} {/* Display username from context */}
        </Text>
      </View>
      <View>
        <FontAwesome6
          name="user"
          size={24}
          color="white"
          style={{
            width: "fit-to-content",
            borderRadius: 100,
            backgroundColor: "#80FFDB",
            padding: 5,
            marginRight:12
          }}
        />
        <TouchableOpacity onPress={onPress}>
          {/* <Text style={{color:'#80FFDB'}}
          >Go to Profile</Text> */}
        </TouchableOpacity>
      </View>
      </View>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Courses</Text>
          <Animated.Image
            style={[styles.image, { transform: [{ translateY: moveAnimation }] }]}
            source={require("../assets/start.png")}
          />
        </View>
        
      </View>
    </View>
    </>
  );
}

export default TopSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfScreen: {
    width: "110%",
    height: "120%",
    padding: 25,
    backgroundColor: "#C36FDE",
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  innerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 35,
    fontStyle:'bold',
    paddingRight:29
  },
  image: {
    width: 120,
    height: 89,
  },
});
