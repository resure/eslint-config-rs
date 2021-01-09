"use strict";

const { OFF, WARNING, ERROR } = require("./shared");

module.exports = {
  extends: ["plugin:react/recommended", "rs"],
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "jsx-quotes": OFF,

    "react/jsx-closing-bracket-location": OFF,
    "react/jsx-closing-tag-location": OFF,
    "react/jsx-tag-spacing": OFF,
    "react/prop-types": OFF,
    "react/sort-comp": WARNING,

    "react-hooks/rules-of-hooks": ERROR,
    "react-hooks/exhaustive-deps": WARNING,
  },
};
