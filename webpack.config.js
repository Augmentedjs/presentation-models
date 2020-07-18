const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "presentation-models.js",
    publicPath: "/dist/",
    library: "presentation-models",
    globalObject: "this",
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
    "next-core-model": {
      commonjs: "next-core-model",
      commonjs2: "next-core-model",
      amd: "next-core-model",
      root: "next-core-model"
    },
    "presentation-request": {
      commonjs: "presentation-request",
      commonjs2: "presentation-request",
      amd: "presentation-request",
      root: "presentation-request"
    },
    "presentation-storage": {
      commonjs: "presentation-storage",
      commonjs2: "presentation-storage",
      amd: "presentation-storage",
      root: "presentation-storage"
    }
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
