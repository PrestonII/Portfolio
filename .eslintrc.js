const RULESTATE = {
  OFF: 0,
  WARN: 1,
  ERROR: 2,
};

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    // 'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  globals: {
    JSX: 'readonly',
    React: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // 'prettier/prettier': 1,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/no-unused-vars': RULESTATE.OFF,
    '@typescript-eslint/explicit-module-boundary-types': RULESTATE.OFF,

    'no-console': RULESTATE.OFF,
    'global-require': 0,
    'no-use-before-define': RULESTATE.WARN,
    'no-unused-vars': RULESTATE.OFF,
    'no-param-reassign': RULESTATE.OFF,
    'lines-between-class-members': RULESTATE.OFF,
    'no-array-constructor': RULESTATE.OFF,
    'quote-props': RULESTATE.OFF,
    'no-shadow': RULESTATE.OFF,

    'jsx-a11y/no-noninteractive-element-interactions': RULESTATE.WARN,
    'jsx-a11y/img-redundant-alt': RULESTATE.OFF,
    'jsx-a11y/anchor-is-valid': RULESTATE.OFF,

    'import/no-dynamic-require': 0,
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/destructuring-assignment': 1,
    'no-return-assign': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 1,
    'react/no-access-state-in-setstate': 1,
    'react/prefer-stateless-function': 1,
    'react/static-property-placement': 0,
    'react/no-array-index-key': 1,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/require-default-props': RULESTATE.OFF,
    'react/no-unused-prop-types': RULESTATE.OFF,
    'react/prop-types': RULESTATE.OFF,
  },
};
