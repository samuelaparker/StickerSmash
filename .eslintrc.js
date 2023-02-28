module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "prettier",
    "@react-native-community",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["react", "react-native", "prettier"],
  rules: {
    "prettier/prettier": {
      singleQuote: true,
      parser: "flow",
    },
  },
};
