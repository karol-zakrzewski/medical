module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  ignorePatterns: [".eslintrc.js", ".next"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: false,
    },
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["functional", "deprecation"],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    "no-shadow": "off",
    "import/no-deprecated": "warn",
    "deprecation/deprecation": "warn",
    "import/no-duplicates": "error",
    "import/no-unresolved": "error",
    "functional/no-let": "error",
    "no-nested-ternary": "error",
    complexity: ["error", 6],
    curly: "error",
  },
  settings: {
    react: {
      version: "18.0.0",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: __dirname,
      },
    },
  },
};
