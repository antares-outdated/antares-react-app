const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

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
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
    },
  },
  devServer: {
    port: 3000,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack",
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
