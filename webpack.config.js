const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    assetModuleFilename: "[hash][ext][query]",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        title: "Make what you want",
        lang: "en",
      },
    }),
    new MiniCssExtractPlugin(),
  ],
  devtool: "source-map",
  devServer: {
    devMiddleware: {
      publicPath: "/",
    },
    client: {
      logging: "none",
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    port: "auto",
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    ignored: /node_modules/,
    poll: 1000,
  },
};
