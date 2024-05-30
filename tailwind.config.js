/* eslint-env node */

/**
 * @NOTE keep in sync with constants/Colors.ts
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

const ThemeColors = {
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: ThemeColors,
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        "sans-bold": ["Geist-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}

