const webpack = require('webpack');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.LoaderOptionsPlugin({
         options: {
           publicPath: '../dist/steps'
         }
       })
    ]
  }
}
