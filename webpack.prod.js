const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

// const CCPRelativePath = '../../java/CCP';

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src/patch.js'],
  output: {
    // publicPath: '../js/patch/',
    // path: path.resolve(__dirname, `${CCPRelativePath}/web/js/patch/`),

    filename: 'app.prod.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js(\?.*)?$/i,
      threshold: 8192
    })
  ]
};
