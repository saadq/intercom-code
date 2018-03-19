const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill', './src'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/manifest.json', to: './' },
      { from: './src/assets', to: './', ignore: 'content/**/*.*' }
    ])
  ]
}
