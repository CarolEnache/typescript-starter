const path = require('path');
module.exports = {
  entry: './index.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'ts-loader',
    }]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "./"),
    compress: true,
    port: 9000
  }
};