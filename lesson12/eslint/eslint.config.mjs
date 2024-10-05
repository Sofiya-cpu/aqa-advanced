import globals from "globals";
import pluginJs from "@eslint/js";
import stylisticJs from "eslint-plugin-stylistic-js";

export default [
  {
    files: ["**/*.js", "**/*.mjs"],
    rules: {
      indent: "off",
    },
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      "@stylistic/js": stylisticJs,
    },
  },
  {
    // https://eslint.org/docs/latest/rules/
    rules: {
      "no-unused-vars": "error",
      "no-console": "off",
      "no-prototype-builtins": 0,
      // "@stylistic/js/indent": ["error", 2, { SwitchCase: 0 }],
      "space-in-parens": ["error", "never"],
    },
  },
  {
    ignores: ["data/**"],
  },
];
