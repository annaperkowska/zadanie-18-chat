const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');
var env = process.env.NODE_ENV || 'development';
var plugins = [
new HtmlWebpackPlugin({
		template: 'client/index.html',
		filename: 'index.html',
		inject: 'body',
	})
];

console.log('NODE_ENV:', env);

if (env === 'production') {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new OptimizeJsPlugin({
			sourceMap: false
		})
	);
}


module.exports = {
	entry:
		'./client/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	devServer: {
  		proxy: {
      		'/socket.io': {
          		target: 'http://localhost:3000',
          		ws: true
      		}
  		}
	},
	plugins: plugins
};