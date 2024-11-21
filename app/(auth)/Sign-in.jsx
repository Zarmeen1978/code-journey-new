import React, { useState, useContext, useRef } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import GlobalApi from "../shared/GlobalApi";
import AppContext from "../context/AppContext";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { setUser } = useContext(AppContext);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await GlobalApi.loginUser(form.email, form.password);
      if (response.ok && response.data) {
        const { jwt, user } = response.data;
        setUser({
          jwt,
          username: user.username,
          id: user.id,
          experience: user.experience,
          rank: user.rank,
        });
        Alert.alert("Success", "User signed in successfully");
        router.replace("/CourseItem"); // Replace with actual route
      } else {
        Alert.alert("Error", response.data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", error.message || "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onPressSignUp = () => {
    router.push("/Sign-up");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/mimo.png")}
                resizeMode="contain"
                style={styles.sizeImage}
              />
            </View>
            <Text style={styles.title}>LOG IN</Text>

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

            <TouchableOpacity
              onPress={submit}
              style={styles.loginBtn}
              disabled={isSubmitting}
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressSignUp}>
              <Text style={styles.forgotAndSignUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B0082",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  imageContainer: {
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
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  inputText: {
    width: "100%",
    color: "#000",
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#C36FDE",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#F2F0F4",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotAndSignUpText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
});
