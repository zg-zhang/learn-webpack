const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugin')

module.exports = {
    mode: 'none',
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack Plugin Sample",
            template: "./src/index.html"
        }),
        new CopyWebpackPlugin({
            patterns: ['public'] // 需要拷贝的目录或者路径通配符
        }),
        new RemoveCommentsPlugin()
    ]
}