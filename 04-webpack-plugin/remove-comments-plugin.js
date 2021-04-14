class RemoveCommentsPlugin {
    apply(compiler) {
        // compiler => 包含了我们此次构建的所有配置信息
        compiler.hooks.emit.tap('RemoveCommentPlugin', compilation => {
            // compilation => 可以理解为此次打包的上下文
            for (const name in compilation.assets) {
                if (name.endsWith('.js')) {
                    const contents = compilation.assets[name].source()
                    const noComments = contents.toString().replace(/\/\*{2,}\/\s?/g, '')
                    compilation.assets[name] = {
                        source: () => noComments,
                        size: () => noComments.length
                    }
                }
            }
        })
    }
}

module.exports = RemoveCommentsPlugin