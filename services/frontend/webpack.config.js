const path = require('path');
module.exports = {
  entry: {
    bundle: './src/app.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8001,
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
    ],
  },
};
