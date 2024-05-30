// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["eslint-plugin-react-compiler", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react-compiler/react-compiler": "error",
  },
};
