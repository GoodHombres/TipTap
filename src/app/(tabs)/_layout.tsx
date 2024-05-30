import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "#components/navigation/TabBarIcon";
import { ThemeColors } from "#constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ThemeColors.primary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Calculator",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calculator" : "calculator-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "camera" : "camera-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
