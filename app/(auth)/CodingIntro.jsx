import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CodingIntro = () => {
  return (
    <SafeAreaView>
      <Image
        source={require("../assets/programming.png")}
        resizeMethod="contain"
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default CodingIntro;

const styles = StyleSheet.create({});
