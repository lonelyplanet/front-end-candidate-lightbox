import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const resolve = dir => path.join(__dirname, dir);

export default {
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    extensions: ['.js', '.jsx'],
  },
};
