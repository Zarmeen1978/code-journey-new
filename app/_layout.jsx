import React, { useContext, useEffect } from "react";
import { Slot, Stack } from "expo-router";
import { UserProvider } from "./shared/UserContext";
import AppProvider from "./context/AppProvider";

const RootLayout = () => {  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* <Stack.Screen name='pages' /> */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)" 
          options={{headerShown:false}}  /> */}
        {/* <Stack.Screen name="/search/[query]" 
          options={{headerShown:false}}  /> */}
      </Stack>
    </AppProvider>
  );
};

export default RootLayout;
