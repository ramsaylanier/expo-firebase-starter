import { useLocalSearchParams } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import LoginForm from "../../components/forms/loginForm";
import RegisterForm from "../../components/forms/registerForm";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useEffect, useMemo } from "react";

export default function Login() {
  const progress = useSharedValue(0);
  const { loginForm } = useLocalSearchParams();
  const { primary, secondary } = useThemeColors();
  const isLogin = loginForm === "login";

  useEffect(() => {
    if (isLogin) {
      progress.value = withTiming(0, { duration: 300 });
    } else {
      progress.value = withTiming(1, { duration: 300 });
    }
  }, [isLogin]);

  const forms = useMemo(() => {
    return [isLogin ? LoginForm : RegisterForm];
  }, [loginForm]);

  const animatedStyles = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [primary, secondary]
    );

    return {
      backgroundColor: color,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <Animated.View style={[{ width: "100%", maxWidth: 500 }]}>
          {forms.map((Form, index) => (
            <Form key={index} />
          ))}
        </Animated.View>
      </KeyboardAvoidingView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    height: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
