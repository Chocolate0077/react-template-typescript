/**
 * "lint-staged" 也可以配置在 package.json 文件中的 lint-staged 字段
 * */

module.exports = {
  '*.{js,jsxts,tsx}': ['eslint -c .eslintrc.js', 'prettier --write'],
  '*.{md,html,json}': ['prettier --write'],
  '*.{css,scss,less}': ["stylelint './src/**/*.css' --config ./.stylelintrc-css.js", 'prettier --write'],
};
