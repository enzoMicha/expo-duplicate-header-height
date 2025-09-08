import { Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function PortalTabLayout() {
  return (
    <Tabs
      initialRouteName="dashboard/index"
      screenOptions={{
        tabBarActiveTintColor: "#5196EB",
        headerShown: false,
        popToTopOnBlur: true,
        tabBarButton: (props: any) => (
          <TouchableOpacity {...props} activeOpacity={1} />
        ),
        tabBarStyle: {
          paddingTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard/index"
        options={{
          title: "Dashboard",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Tabs>
  );
}
