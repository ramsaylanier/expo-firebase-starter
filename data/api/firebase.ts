import { FirebaseAuthTypes } from "@react-native-firebase/auth";

// Update .env files to include the API Endpoint for your Firebase Cloud Functions
const url = new URL(process.env.EXPO_PUBLIC_API_URL || "");

//
export const exampleCloudFunctionCall = async (
  currentUser: FirebaseAuthTypes.User
) => {
  if (!url) {
    throw Error("No API URL found.");
  }

  const token = await currentUser.getIdToken();

  if (!token) {
    throw Error("No token found.");
  }

  const payload = {
    value: "some value",
  };

  return await fetch(`${url}/someEndpoint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
};
