import COLORS from "@/constants/colors2";
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="BookNow"
        options={{
          headerShown: true,
          title: "Book Now",
          headerStyle: {
            backgroundColor: COLORS.primary, // Set the background color of the header
          },
          headerTitleStyle: {
            color: "white", // Set the text color of the header title
            fontWeight: "bold", // Set the font weight of the header title
          },
          headerTintColor: "white", // Set the color of the back button and header title
        }}
      />
      <Stack.Screen
        name="details/[item]"
        options={{
          headerShown: true,
          title: "Detail",
          headerStyle: {
            backgroundColor: COLORS.primary, // Set the background color of the header
          },
          headerTitleStyle: {
            color: "white", // Set the text color of the header title
            fontWeight: "bold", // Set the font weight of the header title
          },
          headerTintColor: "white", // Set the color of the back button and header title
        }}
      />
    </Stack>
  );
};

export default _layout;
