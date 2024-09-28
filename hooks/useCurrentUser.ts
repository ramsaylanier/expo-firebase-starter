import { useState, useEffect } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { router } from "expo-router";

const Auth = auth();

export default function useCurrentUser() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    if (Auth.currentUser) {
      setUser(Auth.currentUser);
    } else {
      const subscriber = Auth.onAuthStateChanged((userState) => {
        if (userState) {
          setUser(userState);
        } else {
          router.replace({
            pathname: "/login",
            params: { loginForm: "login" },
          });
        }

        if (initializing) setInitializing(false);
      });

      return () => {
        subscriber(); // unsubscribe on unmount
      };
    }
  }, []);

  return { user, initializing };
}
