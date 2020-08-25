const path = require('path');
const webpack = require('webpack');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  module: {
    rules: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: `worker.${mode}.js`,
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
};
