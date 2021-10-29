const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/assets/js/app.js',
  output: {
		filename: 'assets/js/[name].[chunkhash].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '',
		assetModuleFilename: '[name].[chunkhash][ext]'
  },
	optimization: {
		minimizer: [
      new CssMinimizerPlugin(),
			new TerserPlugin()
    ]
	},
	module: {
		rules: [
				{
					test: /\.html$/,
					use: [
						'html-loader'
					]
				},
				{
						test: /\.(svg|png|jpg|gif|ico)$/,
						type: 'asset/resource'
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader, 'css-loader'
					]
				},
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'
					]
				},
				{
					test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
					type: 'asset/resource',
					generator: {
							filename: 'assets/fonts/[name][ext]',
					}
				},
				{
						test: /\.js$/,
						exclude: /node_modules/,
						use: {
								loader: 'babel-loader',
								options: {
										presets: [ '@babel/env' ],
										plugins: [ '@babel/plugin-proposal-class-properties' ]
								}
						}
				}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new MiniCssExtractPlugin({ 
			filename: 'assets/css/[name].[chunkhash].css' 
		}),
		new CopyWebpackPlugin({
      patterns: [
				{ from: 'src/.htaccess', to: '' },
        { from: 'src/favicon.gif', to: '[name].[chunkhash][ext]' },
        { from: 'src/favicon.ico', to: '[name].[chunkhash][ext]' },
      ],
    }), 
	]
};
