const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.jsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json"],
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack",
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader",
  //         options:
  //       }
  //     }
  //   ]
  // }
};
