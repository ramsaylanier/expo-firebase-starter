import { Colors } from "@/constants/Colors";

declare global {
  type ThemeColor =
    | (keyof typeof Colors.light & keyof typeof Colors.dark)
    | "transparent";
}

type StyleFunction = (props: any) => ViewStyle | TextStyle | ImageStyle;
