const path = require('path');

module.exports = {
  entry: './src',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'components.js',
    library: 'components',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
