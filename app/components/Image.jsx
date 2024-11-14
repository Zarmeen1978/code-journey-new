// BoxedImagePage.js
import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const BoxedImagePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <View style={styles.imageBox}>
        <Image
          style={{ width: "250px", height: "120px" }}
          source={require("../assets/C.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    // backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    display: "flex",
    alignItems: "flex-start",
    //  textAlign:'left'
  },
  // imageBox: {
  //   width: 200,
  //   height: 200,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: "#ddd",
  //   backgroundColor: "#fff",
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 5,
  //   elevation: 5, // Android shadow effect
  //   padding: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  image: {
    // width: "100%",
    //height: "100%",
    borderRadius: 18,
    resizeMode: "cover",
  },
});

export default BoxedImagePage;
