const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const utils = require('./utils')
const env = require('../config/dev.env')

module.exports = merge(baseWebpackConfig, {
  devtool: 'eval-source-map',
  devServer: {
    contentBase: utils.resolve('dist'),
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: '8000',
    open: true, // autoOpenBrowser
    overlay: {
      warnings: true,
      errors: true
    },
    quiet: true // necessary for FriendlyErrorsPlugin
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running...`],
      },
      onErrors: undefined
    }),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
