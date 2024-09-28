# React Native + Expo + Firebase + Mobx Starter 👋

This repo is the starting point for creating a React Native application using
Expo with Firebase services like Authentication and Cloud Functions. This starter
assumes that you have an Apple Developer Account / Google Play Developer Account
setup and have created bundle identifiers for your app. [Here's how you can
Register an iOS APP ID](https://developer.apple.com/help/account/manage-identifiers/register-an-app-id/.)

It features:
-  [Expo](https://docs.expo.dev/) + Expo Router for navigation
-  [Firebase](https://rnfirebase.io/) authentication using react-native-firebase 
-  Login / Register / Forgot Password Screens with support for Google and Apple Login
-  Theming for Dark and Light modes
-  [MobX](https://mobx.js.org/README.html) for reactive client-side state management 

## Get started

1. Install dependencies

   ```bash
   npm install
   ```
2. Review the `app.json` file and update the following:
   - name
   - slug
   - scheme
   - package

3. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

### If Using Expo Application Services (EAS)

1. Create a new project in EAS and run the `eas init --id <your-app-id>`
   command that it tells you to. This will update `app.json` with your project
   id.
2. Review the `eas.json` file and make any additional updates needed.
3. Download the `google-services.json`(Android) and
   `GoogleService-Info.plist`(iOS) from your Firebase project settings page in
   the Apps section of the Firebase console. If you haven't created any Apps,
   see the Firebase Authentication section below for Firebase configuration instructions.
4. Run the `eas build` command for whichever platform(s) you're developing for.
5. Install the development build on your testing device.

6. Start the app

   ```bash
    npx expo start
   ```


## Firebase Configuration

Before being able to user Firebase in your Application, you need to Register
your app with Firebase(you'll have to create an ). Refer to [Adding Firebase To An
App](https://firebase.google.com/docs/ios/setup) for assistance. 

After adding your iOS and/or Android apps to Firebase, you'll see a section in
the Project settings for your apps. Here is where you can download the
`google-services.json` and `GoogleService-Info.plist` files. These files contain
the necessary configuration information to connect your app to the Firebase SDK
that is already provided in this starter. 


## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
