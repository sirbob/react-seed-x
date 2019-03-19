const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'babel'],
  rules: {
    quotes: [error, 'single'],
    'babel/quotes': [error, 'single'],
    'function-paren-newline': [error, 'consistent'],
    'no-multiple-empty-lines': [error, { max: error, maxEOF: error }],
    'no-implicit-coercion': error,
    'react/prop-types': off,
    'no-unused-vars': [
      error,
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: 'createElement|Fragment',
      },
    ],
    'react/destructuring-assignment': off,
    'no-case-declarations': off,
    'no-debugger': off,
    'no-console': off,
    'import/named': off,
    'import/prefer-default-export': off,
    'react/jsx-filename-extension': [error, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-target-blank': error,
    'react/jsx-closing-tag-location': off,
    'react/no-did-mount-set-state': off,
    'react/no-typos': error,
    'react/no-unescaped-entities': off,
    'react/react-in-jsx-scope': off,
    'react/sort-comp': [
      error,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
  },
};
