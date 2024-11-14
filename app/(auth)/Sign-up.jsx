import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React, { useState, useContext, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import GlobalApi from "../shared/GlobalApi";

const SignUp = () => {
  const navigation = useNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { setUser } = useContext(AppContext);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const submit = async () => {
    if (!form.email || !form.password || !form.username) {
      Alert.alert("Error", "Please fill in all the fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await GlobalApi.registerUser({
        username: form.username,
        email: form.email,
        password: form.password,
      });

      if (response.ok) {
        Alert.alert("Success", "User registered successfully");
        const { jwt, user } = response.data;
        setUser({ jwt, username: user.username });
        navigation.navigate("InfoOneScreen");
      } else {
        Alert.alert("Error", response.data?.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      Alert.alert("Error", "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/mimo.png")}
            resizeMode="contain"
            style={styles.sizeImage}
          />
        </View>
        <Text style={styles.title}>SIGN UP</Text>

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <Pressable
              onPress={() => emailInputRef.current.focus()}
              style={styles.inputView}
            >
              <TextInput
                ref={emailInputRef}
                style={styles.inputText}
                placeholder="Enter your email"
                placeholderTextColor="#003f5c"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(e) => setForm({ ...form, email: e })}
              />
            </Pressable>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Enter your username"
              placeholderTextColor="#003f5c"
              value={form.username}
              onChangeText={(e) => setForm({ ...form, username: e })}
            />
          </View>
        </View>

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <Pressable
              onPress={() => passwordInputRef.current.focus()}
              style={styles.inputView}
            >
              <TextInput
                ref={passwordInputRef}
                style={styles.inputText}
                placeholder="Enter your password"
                placeholderTextColor="#003f5c"
                secureTextEntry
                value={form.password}
                onChangeText={(e) => setForm({ ...form, password: e })}
              />
            </Pressable>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity
          onPress={submit}
          style={styles.signUpBtn}
          disabled={isSubmitting}
        >
          <Text style={styles.signUpText}>
            {isSubmitting ? "Signing Up..." : "SIGN UP"}
          </Text>
        </TouchableOpacity>

        <View style={styles.signInPrompt}>
          <Text style={styles.promptText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Sign-in")}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B0082",
    alignItems: "center",
    width: "100%",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  sizeImage: {
    width: 250,
    height: 150,
  },
  title: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "medium",
    marginBottom: 40,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    paddingLeft: 5,
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
  inputText: {
    backgroundColor: "transparent",
    borderWidth: 0,
    outlineStyle: "none", // Attempt to disable outline directly
    outlineWidth: 0,
    outlineColor: "transparent",
  },
  signUpBtn: {
    width: "90%",
    backgroundColor: "#C36FDE",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  signUpText: {
    color: "#F2F0F4",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInPrompt: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  promptText: {
    color: "#fff",
    fontSize: 14,
  },
  signInText: {
    color: "#C36FDE",
    fontSize: 14,
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});
