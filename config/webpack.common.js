const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [paths.src + '/index.js'],
    output: {
        path: paths.build,
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: paths.static,
                to: 'assets',
                ignore: ['*.DS_Store'],
            },
        ]),
        new HtmlWebpackPlugin({
            title: 'Index Page',
            favicon: paths.src + '/images/favicon.png',
            template: paths.src + '/pages/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'About Page',
            favicon: paths.src + '/images/favicon.png',
            template: paths.src + '/pages/about.html',
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Sales Page',
            favicon: paths.src + '/images/favicon.png',
            template: paths.src + '/pages/sales.html',
            filename: 'sales.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Cooperation Page',
            favicon: paths.src + '/images/favicon.png',
            template: paths.src + '/pages/cooperation.html',
            filename: 'cooperation.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Extras Page',
            favicon: paths.src + '/images/favicon.png',
            template: paths.src + '/pages/extras.html',
            filename: 'extras.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: 'src', // prevent display of src/ in filename
                },
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[path][name].[ext]',
                    context: 'src', // prevent display of src/ in filename
                },
            },
        ],
    },
};
