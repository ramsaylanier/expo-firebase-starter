import { Stack, useGlobalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native";
import useAppSetup from "@/hooks/useAppSetup";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function RootLayout() {
  useAppSetup();
  const { primary, secondary } = useThemeColors();
  const global = useGlobalSearchParams();

  const background = global.loginForm === "register" ? secondary : primary;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(main)" />
      </Stack>
    </SafeAreaView>
  );
}
