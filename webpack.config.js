const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
  },
  entry: './src/index.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[file]',
  },
  module: {
  rules: [
    {
      test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(?:json)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(?:mp3|wav|ogg|mp4)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
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
    new CopyPlugin({
      patterns: [
        {
          from: '**/*',
          context: path.resolve(__dirname, './src'),
          globOptions: {
              ignore: ['**/*.js', '**/*.ts', '**/*.scss', '**/*.sass', '**/*.html'],
          },
          noErrorOnMissing: true,
          force: true,
        },
      ],
    }),
    new MiniCssExtractPlugin({
       filename: '[name].[contenthash].css',
     }),
  ],
};