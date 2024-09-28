import { registerUser } from "@/auth/auth";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Link, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Alert, View, Text, TextInput, Pressable } from "react-native";
import { StyleSheet } from "@/types/stylesheet";
import Animated from "react-native-reanimated";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordField = useRef<TextInput>(null);
  const router = useRouter();

  const { text, background, secondary } = useThemeColors();

  const isDisabled = !email && !password;

  const handleRegister = async () => {
    try {
      const res = await registerUser(email, password);

      if (res) {
        router.navigate("/");
      }
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <Animated.View style={{ width: "100%" }}>
      <View style={styles.form(secondary)}>
        <ThemedText type="title">Register</ThemedText>
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
          enterKeyHint="next"
          returnKeyType="next"
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={() => passwordField?.current?.focus()}
        />
        <TextInput
          ref={passwordField}
          style={[styles.input]}
          id="password"
          value={password}
          placeholder="Password"
          autoComplete="current-password"
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={text}
          onChange={(e) => setPassword(e.nativeEvent.text)}
          returnKeyType="done"
          enterKeyHint="done"
          enablesReturnKeyAutomatically={true}
          secureTextEntry={true}
          onSubmitEditing={handleRegister}
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
          <View
            style={[
              styles.button("transparent"),
              { backgroundColor: background },
            ]}
          >
            <Pressable onPress={handleRegister} disabled={isDisabled}>
              <Text style={[styles.buttonText, { color: text }]}>Register</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Animated.View>
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
  button: (backgroundColor) => ({
    borderRadius: 3,
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  }),
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
