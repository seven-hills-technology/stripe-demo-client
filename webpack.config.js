const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'cheap-module-source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|jpg|cur|svg)$/i,
                loader: 'url-loader', options: { limit: 8192 }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL || 'http://localhost:3020'),
            STRIPE_PUBLISHABLE_KEY: JSON.stringify(process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_aL0zFdGbkldJ5KqpSc2gvOOu')
        })
    ]
};
