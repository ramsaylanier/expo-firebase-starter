import { sendPasswordResetEmail } from "@/auth/auth";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet } from "@/types/stylesheet";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

export default function PasswordResetForm() {
  const [email, setEmail] = useState("");
  const { text, primary } = useThemeColors();

  const isDisabled = !email;

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(email);
      Alert.alert(
        "Success",
        "An email with instructions to reset your password will be sent to this email if an account exists for it."
      );
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };
  return (
    <View style={{ width: "100%" }}>
      <View style={styles.form(primary)}>
        <ThemedText type="title">Reset Password</ThemedText>
        <TextInput
          style={[styles.input]}
          id="email"
          value={email}
          placeholder="Email / Username"
          autoComplete="email"
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={text}
          onChange={(e) => setEmail(e.nativeEvent.text)}
          inputMode="email"
          enterKeyHint="send"
          returnKeyType="send"
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={false}
          onSubmitEditing={handleReset}
        />

        <View style={styles.formActions}>
          <Link
            href={{
              pathname: "/login",
              params: { loginForm: "login" },
            }}
            style={[{ color: text }]}
          >
            Login
          </Link>

          <ThemedButton
            color={"primary"}
            onPress={handleReset}
            disabled={isDisabled}
            style={styles.button}
          >
            <Text style={[styles.buttonText, { color: text }]}>Send Email</Text>
          </ThemedButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: (backgroundColor) => ({
    width: "100%",
    backgroundColor: backgroundColor,
    padding: 20,
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  }),
  input: {
    color: "white",
    fontSize: 20,
    width: "100%",
    padding: 5,
    borderRadius: 3,
    borderColor: "white",
    borderWidth: 1,
  },
  formActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    borderRadius: 2,
    paddingVertical: 12,
    paddingHorizontal: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
