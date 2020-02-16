const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  // useEslintRc,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  // antd 按需加载
  // fixBabelImports('import', {
  fixBabelImports('babel-plugin-import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // antd 自定义主题： https://ant.design/docs/react/customize-theme-cn
  addLessLoader({
    javascriptEnabled: true,
    sourceMap: true, // should skip in production
    importLoaders: true,
    modifyVars: {
      '@primary-color': '#1890ff', // 全局颜色
      '@font-size-base': '12px', // 主字号
      '@heading-color': 'rgba(0, 0, 0, 0.95)',
      '@text-color': 'rgba(0, 0, 0, 0.85)',
      '@text-color-secondary': 'rgba(0, 0, 0, .45)',
      '@text-color-secondary-dark': 'rgba(255, 255, 255, 0.85)',
    },
  }),
  // useEslintRc()
  addWebpackAlias({
    src: path.resolve(__dirname, './src'),
    api: path.resolve(__dirname, './src/api/'),
    assets: path.resolve(__dirname, './src/assets/'),
    store: path.resolve(__dirname, './src/store'),
    interface: path.resolve(__dirname, './src/interface/'),
    components: path.resolve(__dirname, './src/components/'),
    pages: path.resolve(__dirname, './src/pages/'),
    utils: path.resolve(__dirname, './src/utils/'),
    configs: path.resolve(__dirname, './src/configs/'),
  }),
);
