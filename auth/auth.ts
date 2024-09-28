import Constants from "expo-constants";
import auth, { connectAuthEmulator } from "@react-native-firebase/auth"; // FirebaseAuthTypes, // connectAuthEmulator, // connectAuthEmulator, // getAuth,

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as AppleAuthentication from "expo-apple-authentication";

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
});

if (__DEV__) {
  const host = Constants.expoConfig?.hostUri?.split(":")[0];
  connectAuthEmulator(auth(), `http://${host}:9099`);
}

const registerUser = async (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

const login = async (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

const loginWithGoogle = async () => {
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  const { data: user } = await GoogleSignin.signIn();
  const idToken = await user?.idToken;

  if (!idToken) {
    throw Error("No id token found");
  }

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};

const loginWithApple = async () => {
  const response = await AppleAuthentication.signInAsync({
    requestedScopes: [
      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
      AppleAuthentication.AppleAuthenticationScope.EMAIL,
    ],
  });
  const credential = auth.AppleAuthProvider.credential(response.identityToken);
  return auth().signInWithCredential(credential);
};

const logout = async () => {
  return auth().signOut();
};

const sendPasswordResetEmail = async (email: string) => {
  return auth().sendPasswordResetEmail(email);
};

export {
  registerUser,
  login,
  loginWithGoogle,
  loginWithApple,
  logout,
  sendPasswordResetEmail,
};
