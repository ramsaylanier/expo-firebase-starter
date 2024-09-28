/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#ffffff";

//         ["light",     "dark"]
const colors = {
  primary: ["#ef6e5d", "#8b2012"],
  secondary: ["#58b9ee", "#094f76"],
  text: ["#062e3e", "#f0efef"],
  background: ["#ffffff", "#0e0401"],
  tint: [tintColorLight, tintColorDark],
  icon: ["#1f4868", "#f0efef"],
  tabIconDefault: ["#687076", "#9BA1A6"],
  tabIconSelected: [tintColorLight, tintColorDark],
};

export const Colors = {
  light: Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [key, value[0]])
  ),

  dark: Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [key, value[1]])
  ),
};
