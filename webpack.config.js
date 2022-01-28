const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
    mode: 'production', // 아래 3개는 기본 설정
    entry: { index: './src/index.js', mediapipe: './src/mediapipe.js', ws: './src/ws.js' },
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
        new HtmlWebpackPlugin({ template: "./src/index.html", title: "KWIX" }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),
        new WebpackPwaManifest({
            name: 'KWIX',
            short_name: 'KWIX',
            description: 'KWIX Progressive Web App!',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
                {
                    src: path.resolve('src/assets/icon-1.png'),
                    sizes: [512], // multiple sizes
                    ios: true
                },
                {
                    src: path.resolve('src/assets/icon-2.png'),
                    size: '192x192', // you can also use the specifications pattern
                    ios: true
                },
            ],
            ios: true,
            publicPath: '.'
        })
    ],
    optimization: {
        splitChunks: { chunks: 'all' },
    },
};