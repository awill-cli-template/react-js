module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": ["off", { allowConstantExport: true }],
    camelcase: 1,
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-unused-vars": "warn",
  },
};
