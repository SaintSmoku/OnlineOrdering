const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
//   optimization: {
//     runtimeChunk: 'single',
//   },
  devServer: {
    static: './dist',
  },
  module: {
  rules: [
    {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          targets: "defaults",
          presets: [
            ['@babel/preset-env']
          ],
          // plugins: ['@babel/plugin-proposal-decorators', { version: "2023-11" }]
        }
      }
    }
  ]
},
stats: {
    loggingDebug: ["babel-loader"]
  }
};