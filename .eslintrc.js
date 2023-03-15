module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-plusplus': 'off',
    'unicode-bom': 'off',
    'linebreak-style': 0,

  },
};
