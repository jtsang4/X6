import { IConfig } from 'umi-types'

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  disableCSSModules: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'x6 Features',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
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
}

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'eval'
}

export default config
