const js = require("@eslint/js");
const { defineConfig, globalIgnores } = require("eslint/config");

module.exports = defineConfig([
  globalIgnores(["dist", "node_modules"]),
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: 2021,
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        process: "readonly",
        console: "readonly",
        Buffer: "readonly",
        exports: "writable", // لو بتستخدم CommonJS
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
