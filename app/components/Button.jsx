import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ title, handlePress, style, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={{
        alignItems: "center",
        backgroundColor: "#C36FDE",
        fontSize: 12,
        borderRadius: 20,
        color: "#F2F0F4",
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 44,
        paddingRight: 44,
        opacity: isLoading ? 0.5 : 1,
      }}
      disabled={isLoading}
    >
      <Text style={[{ color: "#fff", fontWeight: "semibold" }, textStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
