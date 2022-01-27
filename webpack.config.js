const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none', // 아래 3개는 기본 설정
    entry: { index: './src/index.js', mediapipe: './src/mediapipe.js' },
    output: {
        filename: '[name].bundle.js',
        // filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map', // development setting
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
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
    ],
    optimization: {
        splitChunks: { chunks: 'all' },
    },
};