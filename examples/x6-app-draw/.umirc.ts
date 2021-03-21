import { defineConfig } from 'umi'

export default defineConfig({
  publicPath: './',
  devtool: 'eval-cheap-module-source-map',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/apps/draw', component: '@/pages/index' },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@antv/x6-react-components',
        libraryDirectory: 'es',
        transformToDefaultImport: false,
        style: true,
      },
    ],
  ],
})
