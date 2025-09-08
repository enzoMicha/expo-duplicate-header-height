import { useAuth } from "@/contexts/AuthContext";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <>
      <View>
        <Text>Settings</Text>
      </View>
      <Button
        title="Permissions"
        onPress={() => router.push("/settings/permissions")}
      />
      <Button title="Logout" onPress={() => logout()} />
    </>
  );
}
