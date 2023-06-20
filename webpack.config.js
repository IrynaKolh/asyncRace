const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.[tj]s$/i,
                use: ['ts-loader'],
                include: path.resolve(__dirname, 'src'),
                exclude: /node-modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
              },                                    
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    experiments: {
        topLevelAwait: true
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'img/[hash][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',            
        }),
        new CleanWebpackPlugin(),
        new ESLintPlugin({ extensions: ['ts', 'js'] }),       
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/img'),
                    to: path.resolve(__dirname, './dist/img'),
                },
            ],
        }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};