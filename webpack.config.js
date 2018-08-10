const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'presentation-models.js',
    publicPath: '/dist/',
    library: "presentation-models",
    globalObject: 'this',
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    'presentation-request': {
      commonjs: 'presentation-request',
      commonjs2: 'presentation-request',
      amd: 'presentation-request',
      root: 'presentation-request'
    },
    'presentation-storage': {
      commonjs: 'presentation-storage',
      commonjs2: 'presentation-storage',
      amd: 'presentation-storage',
      root: 'presentation-storage'
    },
    'augmented-next': {
      commonjs: 'Augmented',
      commonjs2: 'Augmented',
      amd: 'Augmented',
      root: 'Augmented'
    },
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
