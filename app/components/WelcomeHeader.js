import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";

const WelcomeHeader = () => {
  const navigation = useNavigation();
  const { user } = useContext(AppContext); // access userData from context

  const onPress = () => {
    navigation.navigate("Profile");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "#C36FDE" }}>Hello</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#C36FDE" }}>
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
            backgroundColor: "#C36FDE",
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={onPress}>
          <Text>Go to Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAF0F6",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 90,
    padding: 10,
    marginTop: 30,
  },
});
