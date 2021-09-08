// https://eslint.org/docs/user-guide/configuring/
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:jest/recommended',
    'prettier'
  ],
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: 'return'
      }
    }
  },
  plugins: ['prettier', 'jsdoc'],
  rules: {
    '@next/next/no-img-element': 'off',
    'func-style': ['error', 'declaration'],
    'jsdoc/check-indentation': 'warn',
    'jsdoc/check-line-alignment': [
      'warn',
      'always',
      {
        tags: ['param', 'return']
      }
    ],
    'jsdoc/require-param': [
      'warn',
      {
        checkRestProperty: true,
        unnamedRootBase: ['props']
      }
    ],
    'jsdoc/check-values': [
      'warn',
      {
        allowedAuthors: ['WebDevStudios']
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': ['error', {allow: ['warn', 'error']}],
    'prettier/prettier': 'error'
  }
}
