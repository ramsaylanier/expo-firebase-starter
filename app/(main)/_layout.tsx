import { StoreContext, Store } from "@/state/store";
import { Stack } from "expo-router";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { useThemeColors } from "@/hooks/useThemeColors";

export default observer(function MainLayout() {
  const store = useMemo(() => new Store(), []);

  const { primary, text } = useThemeColors();

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
