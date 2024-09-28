import { Platform } from "react-native";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { useThemeColors } from "@/hooks/useThemeColors";
import PasswordResetForm from "../../components/forms/passwordResetForm";
import Flex from "@/components/Flex";

export default function ResetPassword() {
  const { primary } = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: primary }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ width: "100%", height: "100%" }}
      >
        <Flex
          justify="center"
          align="center"
          direction="column"
          style={{ height: "100%" }}
        >
          <PasswordResetForm />
        </Flex>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
