module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    semi: ["error", "always"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"]
  }
};
