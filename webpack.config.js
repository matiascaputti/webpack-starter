var { resolve } = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'eval-source-map';
    }

    return 'source-map';
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
    rules: [
      // JavaScript modules
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'react', 'es2015' ]
          }
        },
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },

      // Styles
      {
        use: ExtractTextPlugin.extract({
          loader: ['css-loader', 'sass-loader']
        }),
        test: /\.(scss|css)$/
      },

      // Images
      {
        use: [
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
        use: [
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
    })
  ],
  devServer: {
    open: true,
    contentBase: 'dist/',
    inline: true,
    hot: true,
    port: 8000
  },
  devtool: getDevTool(),
}
