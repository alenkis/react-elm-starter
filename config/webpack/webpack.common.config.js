const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: ['@babel/preset-react', '@babel/preset-env'],
  },
}

module.exports = {
  entry: {
    index: './src/js/index.tsx',
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.html', '.txt', '.elm'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          babelLoader,
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: [babelLoader],
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: 'elm-webpack-loader',
          options: {
            // optimize: true,
          },
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/../../build'),
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '/../../public/index.html'),
      filename: 'index.html',
    }),
  ],
}
