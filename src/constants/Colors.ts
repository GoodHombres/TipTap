/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 *
 * @NOTE keep in sync with tailwind.config.js
 */

const Colors = {
  black: "#020202",
  gray: "#8e8e93",
  whiteGray: "#f6f7f9",
  white: "#ffffff",
  green: "#4cd964",
  yellow: "#f2c94c",
  red: "#ff3b30",
};

export const ThemeColors = {
  background: Colors.black,
  foreground: Colors.white,
  border: Colors.gray,

  primary: Colors.green,
  "primary-foreground": Colors.black,

  destructive: Colors.red,
  "destructive-foreground": Colors.white,

  card: Colors.whiteGray,
  "card-foreground": Colors.white,

  success: Colors.green,
  "success-foreground": Colors.black,

  warning: Colors.yellow,
  "warning-foreground": Colors.black,

  error: Colors.red,
  "error-foreground": Colors.white,
};
