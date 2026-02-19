const js = require("@eslint/js");
const { defineConfig, globalIgnores } = require("eslint/config");

module.exports = defineConfig([
  globalIgnores(["dist", "node_modules"]),
  {
    files: ["**/*.{js,ts}"], // كل ملفات backend
    languageOptions: {
      globals: {
        // Node + Browser globals
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        Event: "readonly",
        console: "readonly",
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },

    extends: [js.configs.recommended],
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
]);
