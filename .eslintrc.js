module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint-config-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': 'off',
  },
};
