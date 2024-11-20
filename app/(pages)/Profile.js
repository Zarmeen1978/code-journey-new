import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";
import { useRouter } from "expo-router";
import GlobalApi from "../shared/GlobalApi";

const Profile = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { user, jwt, setUser } = useContext(AppContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user.jwt) {
        try {
          const response = await GlobalApi.getUserDetails(user.jwt);
          if (response.ok) {
            setUserData(response.data);
          } else {
            console.log("Failed to fetch user details:", response.problem);
          }
        } catch (error) {
          console.log("Error fetching user details:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUserDetails();
  }, [jwt]);

  const handleLogout = () => {
    setUser(null);
    router.replace("/"); // Navigate to the "Login" screen
  };
  console.log(userData, "dataa==>");
  if (loading) return <Text>Loading...</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Image source={require("../assets/coding.jpg")} style={styles.avatar} />
        <Text style={styles.name}>{userData.username}</Text>
      </View>

      <Text style={styles.sectionTitle}>About</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Name:</Text>
          <Text style={styles.infoText}>{userData.username}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>{userData.email}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Rank:</Text>
          <Text style={styles.infoText}>{userData.rank}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Experience:</Text>
          <Text style={styles.infoText}>{userData.experience} exp</Text>
        </View>
      </View>

      <Button title="Log Out" color="#d9534f" onPress={handleLogout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 15,
  },
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 19,
    marginTop: 18,
  },
  header: {
    padding: 20,
    alignItems: "center",
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C36FDE",
  },
  sectionTitle: {
    fontSize: 25,
    marginVertical: 12,
    fontWeight: "bold",
    marginLeft: 12,
    color: "#333",
  },
  infoContainer: {
    marginBottom: 25,
  },
  infoBox: {
    backgroundColor: "#c7c7c7",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    margin: 12,
  },
  infoLabel: {
    fontWeight: "bold",
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Profile;
