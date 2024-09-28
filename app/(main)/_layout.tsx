import { StoreContext, Store } from "@/data/state/store";
import { Stack } from "expo-router";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useThemeColors } from "@/hooks/useThemeColors";

export default observer(function MainLayout() {
  const store = useMemo(() => new Store(), []);
  const { user } = useCurrentUser();

  const { primary, text } = useThemeColors();

  if (!user) {
    return null;
  }

  return (
    <StoreContext.Provider value={store}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: primary,
          },

          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign: "left",
          headerShadowVisible: true,
          headerTintColor: text,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "",
          }}
        />
      </Stack>
    </StoreContext.Provider>
  );
});
