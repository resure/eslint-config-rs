"use strict";

const { OFF, WARNING, ERROR } = require("./shared");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["security"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    es6: true,
    "shared-node-browser": true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Possible Errors
    "no-empty": OFF, // eslint:recommended
    "valid-jsdoc": [
      WARNING,
      { requireParamDescription: false, requireReturnDescription: false },
    ],

    // Best Practices
    "array-callback-return": ERROR,
    "block-scoped-var": WARNING,
    complexity: WARNING,
    "consistent-return": WARNING,
    curly: ERROR,
    "dot-location": OFF,
    eqeqeq: [WARNING, "always"],
    "guard-for-in": ERROR,
    "no-caller": ERROR,
    "no-div-regex": WARNING,
    "no-eq-null": ERROR,
    "no-eval": WARNING,
    "no-extend-native": ERROR,
    "no-extra-bind": WARNING,
    "no-extra-label": ERROR,
    "no-floating-decimal": OFF,
    "no-global-assign": WARNING, // eslint:recommended
    "no-implicit-coercion": WARNING,
    "no-implicit-globals": WARNING,
    "no-implied-eval": WARNING,
    "no-iterator": ERROR,
    "no-labels": ERROR,
    "no-loop-func": ERROR,
    "no-multi-spaces": OFF,
    "no-new": ERROR,
    "no-new-func": WARNING,
    "no-new-wrappers": ERROR,
    "no-octal-escape": ERROR,
    "no-param-reassign": WARNING,
    "no-proto": ERROR,
    "no-return-assign": [ERROR, "always"],
    "no-script-url": ERROR,
    "no-self-compare": ERROR,
    "no-sequences": ERROR,
    "no-throw-literal": WARNING,
    "no-unmodified-loop-condition": ERROR,
    "no-unused-expressions": ERROR,
    "no-useless-call": ERROR,
    "no-useless-concat": ERROR,
    "no-void": ERROR,
    "no-with": ERROR,
    radix: WARNING,
    "wrap-iife": OFF,

    // Strict Mode
    strict: WARNING,

    // Variables
    "no-label-var": ERROR,
    "no-shadow": WARNING,
    "no-shadow-restricted-names": ERROR,
    "no-undef-init": ERROR,
    "no-use-before-define": [WARNING, { functions: false }],

    // Node.js and CommonJS
    "callback-return": WARNING,
    "handle-callback-err": WARNING,
    "no-new-require": ERROR,
    "no-path-concat": WARNING,

    // Stylistic Issues
    "array-bracket-spacing": OFF,
    "block-spacing": OFF,
    "brace-style": OFF,
    camelcase: [ERROR, { properties: "never" }],
    "comma-dangle": OFF,
    "comma-spacing": OFF,
    "comma-style": OFF,
    "computed-property-spacing": OFF,
    "eol-last": OFF,
    "func-call-spacing": OFF,
    indent: OFF,
    "key-spacing": OFF,
    "keyword-spacing": OFF,
    "linebreak-style": OFF,
    "max-depth": [WARNING, { maximum: 5 }],
    "max-len": [WARNING, { code: 140, ignoreUrls: true }],
    "new-cap": ERROR,
    "new-parens": OFF,
    "no-array-constructor": WARNING,
    "no-bitwise": ERROR,
    "no-lonely-if": WARNING,
    "no-multiple-empty-lines": OFF,
    "no-negated-condition": WARNING,
    "no-nested-ternary": WARNING,
    "no-new-object": WARNING,
    "no-restricted-syntax": [ERROR, "WithStatement"],
    "no-trailing-spaces": OFF,
    "no-unneeded-ternary": ERROR,
    "no-whitespace-before-property": OFF,
    "object-curly-spacing": OFF,
    quotes: OFF,
    semi: OFF,
    "semi-spacing": OFF,
    "space-before-blocks": OFF,
    "space-before-function-paren": OFF,
    "space-in-parens": OFF,
    "space-infix-ops": OFF,
    "space-unary-ops": OFF,

    // ECMAStrict 6
    "arrow-parens": OFF,
    "arrow-spacing": OFF,
    "generator-star-spacing": OFF,
    "no-duplicate-imports": ERROR,
    "no-useless-constructor": ERROR,
    "no-var": ERROR,
    "prefer-arrow-callback": OFF,
    "prefer-const": ERROR,
    "prefer-rest-params": ERROR,
    "prefer-spread": ERROR,
    "require-atomic-updates": OFF, // eslint:recommended
    "require-yield": WARNING, // eslint:recommended
    "template-curly-spacing": OFF,
    "yield-star-spacing": OFF,

    "global-require": WARNING,
    "security/detect-buffer-noassert": ERROR,
    "security/detect-child-process": ERROR,
    "security/detect-disable-mustache-escape": ERROR,
    "security/detect-eval-with-expression": ERROR,
    "security/detect-new-buffer": ERROR,
    "security/detect-no-csrf-before-method-override": ERROR,
    "security/detect-non-literal-fs-filename": ERROR,
    "security/detect-non-literal-regexp": ERROR,
    "security/detect-non-literal-require": ERROR,
    "security/detect-possible-timing-attacks": ERROR,
    "security/detect-pseudoRandomBytes": ERROR,
    "security/detect-unsafe-regex": ERROR,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // TypeScript compiler handles these on its own
        strict: OFF,
        "no-undef": OFF,
        "no-dupe-class-members": OFF,

        "react/prop-types": OFF,
        "react/sort-comp": [
          WARNING,
          {
            order: [
              "static-methods",
              "instance-variables",
              "lifecycle",
              "render",
              "everything-else",
            ],
          },
        ],

        "valid-jsdoc": [
          WARNING,
          {
            // type annotations are redundant when in TS files
            requireReturnType: false,
            requireParamType: false,
            // same as for JS
            requireParamDescription: false,
            requireReturnDescription: false,
          },
        ],

        // TypeScript-specific general rules
        semi: OFF,
        "@typescript-eslint/semi": ERROR,
        "no-unused-vars": OFF,
        "@typescript-eslint/no-unused-vars": ERROR,
        "no-use-before-define": OFF,
        "@typescript-eslint/no-use-before-define": [
          WARNING,
          { functions: false },
        ],
        "no-useless-constructor": OFF,
        "@typescript-eslint/no-useless-constructor": ERROR,

        "@typescript-eslint/member-delimiter-style": OFF,
        "@typescript-eslint/member-ordering": [
          ERROR,
          {
            default: [
              "public-static-field",
              "protected-static-field",
              "private-static-field",

              "public-static-method",
              "protected-static-method",
              "private-static-method",

              "public-instance-field",
              "protected-instance-field",
              "private-instance-field",

              "constructor",

              "public-instance-method",
              "protected-instance-method",
              "private-instance-method",
            ],
          },
        ],
        "@typescript-eslint/explicit-member-accessibility": [
          ERROR,
          { accessibility: "no-public" },
        ],
        "@typescript-eslint/consistent-type-assertions": ERROR,
        "@typescript-eslint/no-array-constructor": ERROR,
        "@typescript-eslint/no-explicit-any": WARNING,
        "@typescript-eslint/no-inferrable-types": ERROR,
        "@typescript-eslint/no-namespace": ERROR,
        "@typescript-eslint/no-non-null-assertion": WARNING,
        "@typescript-eslint/no-parameter-properties": ERROR,
        "@typescript-eslint/triple-slash-reference": ERROR,
        "@typescript-eslint/prefer-namespace-keyword": ERROR,
        "@typescript-eslint/type-annotation-spacing": OFF,
      },
    },
  ],
};
