import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState, useEffect } from "react";
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

  // useEffect(() => {
  //   const excludeRoutes = ["/", "/Sign-in", "/Sign-up"]; // Routes to skip
  //   if (isMounted && !user && !excludeRoutes.includes(pathname)) {
  //     router.replace("/"); // Only navigate if route is not in exclude list
  //   }
  // }, [user, isMounted, pathname]);
  return (
    <>
      <Stack>
        <Stack.Screen
          name="CourseItem"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CourseDetails"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CourseChapter"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CongratulationScreen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CourseListEnglish"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CourseLists"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CourseList"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UrduCourse"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#4B0082" style="light" />
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
