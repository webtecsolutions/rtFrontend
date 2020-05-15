module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: [
    'vuetify'
  ],
  rules: {
    'vue/no-unused-vars': 1,
    'vue/return-in-computed-property': 0,
    'vue/no-async-in-computed-properties': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'prefer-template': 0,
    'func-names': 0,
    'camelcase': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'consistent-return': 0,
    'max-len': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'prefer-destructuring': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
    'no-alert': 0,
    'no-restricted-globals': 0
  }
};
