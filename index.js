module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "filename-rules",
    "cypress",
    "import",
    "jsx-a11y",
  ],
  extends: [
    "react-app",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  ignorePatterns: [".eslintrc.js", "src/react-app-env.d.ts"],
  rules: {
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
      },
    ],
    "no-use-before-define": "off",
    "import/no-named-as-default": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "filename-rules/match": ["error", /^([a-z0-9]+-)*[a-z0-9]+(?:\..*)?$/],
    "cypress/no-async-tests": "error",
  },
  env: {
    "cypress/globals": true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: "latest",
    },
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
