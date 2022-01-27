const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production', // 아래 3개는 기본 설정
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map', // developement setting
    devServer: {
        static: './dist',
    },
    module: { // css loader for bootstrap
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: 'node_modules/@mediapipe/pose',
                to: 'pose'
            }
        ]
    })],
};