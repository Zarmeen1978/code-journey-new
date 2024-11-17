import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function InfoThreeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("./../assets/team.png")} style={styles.image} />
      <Text style={styles.welcomeStyle}>Level up and get hired</Text>
      <Text style={styles.textie}>
        Once you are comfortable with the basics, you will be able to understand
        Object-Oriented Programming
      </Text>
      <Link href="/InfoCommunityScreen" style={styles.button}>
        <Text style={{ color: "#fff" }}>Next</Text>
      </Link>
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
  image: {
    marginTop: 30,
    width: 400,
    height: 190,
    resizeMode: "contain",
  },
  welcomeStyle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "500",
    fontFamily: "sans-serif",
    color: "#000000",
  },
  textie: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    color: "#454545",
  },
  button: {
    backgroundColor: "#C36FDE",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 80,
    alignItems: "center",
  },
});
