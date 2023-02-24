const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
  rules: [
    {
       test: /\.txt/,
       type: 'asset',
      },
    {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
  ]
 
},
 plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
    }),
    new FileManagerPlugin({
      events: {
       onStart: {
         delete: ['dist'],
       },
       onEnd: {
           copy: [
             {
               source: path.join('src', 'assets', 'sounds'),
               destination: 'dist',
             },
           ],
         },
      },
    }),
  ],
};