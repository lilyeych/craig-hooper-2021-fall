const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PostHtmlHintPlugin = require('posthtml-hint');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/assets/js/app.js',
  output: {
		filename: 'assets/js/[name].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '',
  },
	devServer: {
		port: 9000,
		static: {
				directory: path.resolve(__dirname, './dist'),
		},
		devMiddleware: {
				index: 'index.html',
				writeToDisk: true
		},
		open: true,
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
					type: 'asset/resource',
					generator: {
						filename: 'assets/img/[name][ext]',
					}
				},
				{
					test: /\.css$/,
					use: [
						'style-loader', 'css-loader'
					],
					generator: {
						filename: 'assets/css/[name][ext]',
					}
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'
					],
					generator: {
						filename: 'assets/scss/[name][ext]',
					}
				},
				{
					test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
					type: 'asset/resource',
					generator: {
							filename: 'assets/fonts/[name][ext]',
					}
				},
				{
					test: require.resolve("jquery"),
					loader: "expose-loader",
					options: {
						exposes: ["$", "jQuery"],
					},
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
			filename: 'assets/css/[name].css' 
		}),
		new StylelintPlugin({
      files: ['**/*.{css,scss,sass}'],
    }),
		new PostHtmlHintPlugin()
	]
};

