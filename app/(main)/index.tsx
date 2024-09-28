import { useThemeColors } from "@/hooks/useThemeColors";
import Flex from "@/components/Flex";
import { StyleSheet } from "@/types/stylesheet";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

export default function GameChest() {
  const { background, primary } = useThemeColors();

  return (
    <Flex style={[styles.container, { backgroundColor: background }]}>
      <View style={styles.listContainer(primary)}>
        <ThemedText>MAIN PAGE</ThemedText>
      </View>
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  listContainer: (backgroundColor) => ({
    flex: 1,
    zIndex: 1,
    backgroundColor: backgroundColor,
  }),
  listWrapper: {
    flex: 1,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { height: 3, width: 0 },
    paddingVertical: 5,
  },
});
