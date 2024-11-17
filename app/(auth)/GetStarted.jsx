import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/start.png")}
        style={{
          marginTop: 30,
          width: 400,
          height: 190,
          resizeMode: "contain",
        }}
      />
      <Text style={styles.welcomeStyle}>Welcome to Code Journey!</Text>
      <Text style={styles.textie}>
        Let's get started with the basics first for a better understanding of
        coding.
      </Text>
      <TouchableOpacity>
        <Link href="/CourseItem" style={styles.button}>
          <Text>Start Now</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  welcomeStyle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "500", // Fixed
    fontFamily: "sans-serif",
    color: "#000000",
  },
  textie: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500", // Fixed
    color: "#454545",
    marginHorizontal: 5, // Replaces marginLeft and marginRight
  },
  button: {
    color: "#fff",
    borderRadius: 20, // Fixed
    backgroundColor: "#C36FDE",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 80, // Fixed
  },
});
