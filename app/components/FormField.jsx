import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";

const FormField = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  error,
}) => {
  return (
    <View style={styles.fieldContainer}>
      <TextInput
        style={styles.inputField}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 10,
  },
  inputField: {
    paddingVertical: 15,
    paddingLeft: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});
