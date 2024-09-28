import { login, loginWithApple, loginWithGoogle } from "@/auth/auth";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Link, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Alert, Text, TextInput, Pressable, View } from "react-native";
import Animated from "react-native-reanimated";
import Flex from "../Flex";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "@/types/stylesheet";
import * as AppleButton from "expo-apple-authentication";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const passwordField = useRef<TextInput>(null);

  const isDisabled = !email && !password;

  const { text, primary } = useThemeColors();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      if (res) {
        router.navigate("/");
      }
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await loginWithGoogle();
      if (res) {
        router.navigate("/");
      }
    } catch (err: any) {
      console.error({ err });
      Alert.alert("Error", err.message);
    }
  };

  const handleAppleLogin = async () => {
    try {
      const res = await loginWithApple();
      if (res) {
        router.navigate("/");
      }
    } catch (err: any) {
      console.error({ err });
      Alert.alert("Error", err.message);
    }
  };

  return (
    <Animated.View style={{ width: "100%" }}>
      <Flex gap={10}>
        <View style={styles.form(primary)}>
          <ThemedText type="title">Login</ThemedText>
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
            blurOnSubmit={false}
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
            onSubmitEditing={() => {
              handleLogin();
            }}
          />

          <Flex style={styles.formActions} gap={20}>
            <Flex
              direction="row"
              align="center"
              justify="space-between"
              gap={20}
              style={{ width: "100%" }}
            >
              <Link
                href={{
                  pathname: "/login",
                  params: { loginForm: "register" },
                }}
                style={[{ color: text }]}
              >
                Register
              </Link>

              <Link
                href={{
                  pathname: "/reset-password",
                  params: { loginForm: "register" },
                }}
                style={[{ color: text }]}
              >
                Reset Password
              </Link>

              <ThemedButton
                color="primary"
                onPress={handleLogin}
                disabled={isDisabled}
                style={styles.button("transparent")}
              >
                <Text style={[styles.buttonText, { color: text }]}>
                  Sign In
                </Text>
              </ThemedButton>
            </Flex>
          </Flex>
        </View>
        <AppleButton.AppleAuthenticationButton
          onPress={handleAppleLogin}
          buttonStyle={AppleButton.AppleAuthenticationButtonStyle.WHITE_OUTLINE}
          buttonType={AppleButton.AppleAuthenticationButtonType.SIGN_IN}
          style={{
            width: "100%", // You must specify a width
            height: 45, // You must specify a height
          }}
          cornerRadius={3}
        />

        <Pressable onPress={handleGoogleLogin} style={styles.button("black")}>
          <Ionicons name="logo-google" size={12} color="white" />
          <Text style={[styles.buttonText, { color: "white" }]}>
            Sign in with Google
          </Text>
        </Pressable>
      </Flex>
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
    fontSize: 16,
    fontWeight: "bold",
  },
});
