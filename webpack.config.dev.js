const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@img': path.resolve(__dirname, 'src/assets/img'),
			'@styles': path.resolve(__dirname, 'src/assets/styles'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
		}
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.html$/,
				use: [
					{ loader: 'html-loader' }
				]
			},
			{
				test: /\.(sass|css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				type: 'asset'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 8001,
		open: true,
	}
}
