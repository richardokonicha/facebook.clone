const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const proxyRules = require('../proxy/rules')
const env = require('../env')
const { DefinePlugin } = require('webpack');


module.exports = {
   context: __dirname,
   entry: '../src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
      publicPath: '/',
   },
   devServer: {
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|jpeg|svg|gif|jpg)?$/,
            use: 'file-loader'
         },
         {
            test: /\.(woff|woff2|ttf|otf)$/,
            loader: 'file-loader',
            include: [/fonts/],
      
            options: {
              name: '[hash].[ext]',
              outputPath: 'css/',
              publicPath: url => 'css/' + url
            }
          },
]
   },
   plugins: [
      new DefinePlugin ({
         'process.env': {
            NODE_ENV: JSON.stringify("development"),
         }
      }),
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, '../public/index.html' ),
         filename: 'index.html',
         // favicon: path.resolve(__dirname, '../static/favicon.png')c
      })
   ],

   devServer: {
      host: env.devServer.host || 'localhost',
      port: env.devServer.port || 3000,
      contentBase: path.resolve(__dirname, '../static'),
      watchContentBase: true,
      compress: true,
      hot: true,
      historyApiFallback: {
         disableDotRule: true
      },
      watchOptions: {
         ignored: /node_modules/
      },
      overlay: {
         warnings: true,
         errors: true
      },
      proxy: proxyRules
   }
};
