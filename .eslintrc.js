const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // ecmaVersion: 2018,
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        // 指定 eslint-plugin-import 解析的后缀名
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      typescript: {
        // 配置 eslint-import-resolver-typescript 读取 tsconfig.json 的路径
        directory: [path.resolve('./tsconfig.json')],
      },
    },
  },
  rules: {
    // eslint-plugin-import 配合 Typescript 导致问题：  import/extensions 不能正确处理文件后缀名
    'import/extensions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx', '.js', '.ts'] }],
    // eslint 配合 Typescript 导致 .d.ts 声明文件中使用 constructor 报错问题
    // 'no-useless-constructor': 'off',
    // '@typescript-eslint/no-useless-constructor': 'error',
    'import/no-unresolved': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 0,
    'operator-assignment': 0,
    'react/no-did-update-set-state': 0,
    'consistent-return': 0,
    'react/sort-comp': 0,
    'no-plusplus': 'off', // i++
    radix: 'off', // parseInt Missing radix parameter
    'no-restricted-properties': 'off', // Math.pow(10, 2) === 10**2
    'import/order': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // 调整
    'react/state-in-constructor': 0,
    'react/destructuring-assignment': [1, 'always', { ignoreClassFields: true }],
  },
  // 规则调整
  // overrides: [
  //   {
  //     files: ['**/*.d.ts'],
  //     rules: {
  //       'import/no-duplicates': 0,
  //       'max-classes-per-file': 0,
  //     },
  //   },
  //   {
  //     files: ['scripts/**/*.ts'],
  //     rules: {
  //       'import/no-extraneous-dependencies': 0,
  //     },
  //   },
  // ],
};
