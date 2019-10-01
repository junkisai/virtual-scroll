const path = require('path');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  entry: `${path.resolve(__dirname)}/src/app/index.jsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /dist/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/react"
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: 'file-loader?name=[name].[ext]'
      }
    ]
  }
};

if (!IS_PRODUCTION) {
  module.exports.devtool = 'source-map';
  module.exports.devServer = {
    contentBase: `${__dirname}/dist`,
    compress: true,
    port: 8000,
    historyApiFallback: true
  };
}
