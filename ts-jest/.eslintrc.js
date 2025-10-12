module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,  
  }
  extends: [
    'estint: recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly",
  }
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecaVersion: 11,
    sourceType: "module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};