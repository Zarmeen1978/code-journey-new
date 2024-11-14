import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AppContext from "../context/AppContext";
import { useRouter, usePathname } from "expo-router"; // import usePathname

const _layout = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const excludeRoutes = ["/", "/Sign-in", "/Sign-up"]; // Routes to skip
    if (isMounted && !user && !excludeRoutes.includes(pathname)) {
      router.replace("/"); // Only navigate if route is not in exclude list
    }
  }, [user, isMounted, pathname]);

  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InfoOneScreen" />
        <Stack.Screen name="InfoTwoScreen" />
        <Stack.Screen name="InfoThreeScreen" />
        <Stack.Screen name="InfoCommunityScreen" />
        <Stack.Screen name="GetStarted" />
        <Stack.Screen name="Sign-in" />
        <Stack.Screen name="Sign-up" />
      </Stack>
      <StatusBar backgroundColor="#4B0082" style="light" />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
