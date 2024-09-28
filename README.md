# React Native + Expo + Firebase + Mobx Starter 👋

This repo is the starting point for creating a React Native application using
Expo with Firebase Authentication.

It features:
-  [Expo](https://docs.expo.dev/) + Expo Router for navigation
-  [MobX](https://mobx.js.org/README.html) for reactive client-side state management 
-  [Firebase](https://rnfirebase.io/) authentication using react-native-firebase 
-  Login / Register / Forgot Password Screens with support for Google and Apple Login
-  Theming for Dark and Light modes


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Review the `eas.json` file and make any updates needed.

3. Review the `app.json` file and update the following:
   - name
   - slug
   - scheme
   - package

4. Create a new project in Expo and run the `eas init --id <your-app-id>`
   command that it tells you to. This will update `app.json` with your project id

5. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- 

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
