module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
  },
};
