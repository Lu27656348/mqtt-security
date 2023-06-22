const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  target: 'node',
  externals: [nodeExternals()]
};