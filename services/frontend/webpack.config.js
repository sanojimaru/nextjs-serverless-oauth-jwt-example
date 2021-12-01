const path = require("path");
module.exports = {
  entry: {
    bundle: "./src/app.ts",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].min.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
