'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      //拦截所有v1开头的xhr请求
      // context: ['/v1'], 
      // target: "https://xiaoce-timeline-api-ms.juejin.im",
      // cookieDomainRewrite: {
      //   // 不用cookie
      // },
      // changeOrigin: true,//重点，此处本地就会虚拟一个服务替我们接受或转发请求
      // secure: false
      // proxy all requests starting with /api to jsonplaceholder,The above example will proxy the request /api/posts/1 to http://jsonplaceholder.typicode.com/posts/1
      '/v1': {
        target: 'https://xiaoce-timeline-api-ms.juejin.im',
        changeOrigin: true,
        pathRewrite: {
          // '^/v1': ''
        }
      },
      '/interfaceApi': {
        target: 'http://60.191.94.122:9331',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/interfaceApi': ''
        }
      },
      '/api': {
        target: 'https://localhost:44345',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          // '^/api': ''
        }
      },
      '/gov': {
        target: 'http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2017',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/gov': ''
        }
      },
      '/mock': {
        target: 'https://easy-mock.com/mock/5b1b49ea496c9b36644e652c/request',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/mock': ''
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8888, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
