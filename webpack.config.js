var { resolve } = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map';
    }

    return false;
}

module.exports = {
  entry: {
    bundle: [
      resolve(__dirname, 'src/index.js'),
      resolve(__dirname, 'src/assets/scss/index.scss')
    ],
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      // JavaScript modules
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        query: {
          presets: [ 'react', 'es2015' ]
        }
      },

      // Styles
      {
        loader: ExtractTextPlugin.extract({
          loader: ['css-loader', 'sass-loader']
        }),
        test: /\.(scss|css)$/
      },

      // Images
      {
        loader: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: 'assets/images/[name].[ext]'
            }
          },
          'image-webpack-loader'
        ],
        test: /\.(jpe?g|png|gif|svg)$/
      },

      // Fonts
      {
        loader: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              name: 'assets/fonts/[name].[ext]'
            }
          }
        ],
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'assets/styles/[name].css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
  ],
  devServer: {
    open: true,
    contentBase: 'dist/',
    compress: true,
    inline: true,
    hot: true,
    port: 8000
  },
  devtool: getDevTool(),
}
