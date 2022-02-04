const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 아래 3개는 기본 설정
    entry: './src/index.js',
    devtool: 'inline-source-map', // development setting
    devServer: {
        static: './src',
        port: 9000,
        open: true,
        hot: true,
        watchFiles: ["src/","public"],
        liveReload: true,
        compress: true,
        https: true,
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
        new HtmlWebpackPlugin({ template: "public/index.html", title: "KWIX" }),
    ]
};