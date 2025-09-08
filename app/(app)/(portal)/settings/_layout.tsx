import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function Root() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={({
        navigation,
      }: {
        navigation: NavigationProp<ParamListBase>;
      }) => {
        return {
          headerBackTitle: "Back",
          headerBackTitleVisible: true,
          headerShadowVisible: false,
        };
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Settings" }}
      ></Stack.Screen>
      <Stack.Screen
        name="permissions/index"
        options={{ title: "Permissions", headerShown: true }}
      ></Stack.Screen>
    </Stack>
  );
}
