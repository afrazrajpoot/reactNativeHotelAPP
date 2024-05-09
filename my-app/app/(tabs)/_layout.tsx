import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Button } from "react-native";
import { Stack, useRouter } from "expo-router";
export default function TabLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen name="details/[item]" options={{ title: "Details" }} />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          headerTitle: "Create account",
          headerRight: () => (
            <Button title="Open" onPress={() => router.push("/modal")} />
          ),
        }}
      />
    </Tabs>
  );
}
