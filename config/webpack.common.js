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
            title: 'Steven de Graaf',
            template: paths.src + '/pages/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'SdG - Over Mij',
            template: paths.src + '/pages/over_mij.html',
            filename: 'over_mij.html'
        }),
        new HtmlWebpackPlugin({
            title: 'SdG - Sales',
            template: paths.src + '/pages/sales.html',
            filename: 'sales.html'
        }),
        new HtmlWebpackPlugin({
            title: 'SdG - Projecten',
            template: paths.src + '/pages/projecten.html',
            filename: 'projecten.html'
        }),
        new HtmlWebpackPlugin({
            title: 'SdG - Extra',
            template: paths.src + '/pages/extra.html',
            filename: 'extra.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.xml$/i,
                use: 'raw-loader',
            },
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
