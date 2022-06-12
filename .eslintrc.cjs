module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  _extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:vue/essential",
    "prettier"
  ],
};