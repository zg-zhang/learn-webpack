module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,    // 根据打包过程中所遇到文件路径匹配是否使用这个 loader
                use: [
                    'style-loader',
                    'css-loader'
                ]  // 指定具体的 loader 按从后往前的顺序执行
            },
            {
                test: /\.md$/,
                use: [
                    'html-loader',
                    './markdown-loader'
                ]
            }
        ]
    }
}