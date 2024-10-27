const { defineConfig } = require('@vue/cli-service');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        fs: require.resolve('browserify-fs'),
        https: require.resolve('https-browserify'),
        stream: require.resolve('stream-browserify'),
        http: require.resolve('stream-http'),
        process: require.resolve('process/browser'),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'preload.js'), to: path.resolve(__dirname, 'dist_electron') }
        ],
      }),
    ],
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/background.js',
      preload: 'preload.js',
    },
  },
});