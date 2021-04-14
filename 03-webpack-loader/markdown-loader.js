const marked = require('marked')

module.exports = source => {
    const html = marked(source)
    // html => '<h1>About</h1><p>this is a markdown file.</p>'

    // 将 html 字符串拼接为一段导出字符串的 JS 代码
    // const code = `module.exports = ${JSON.stringify(html)}`

    // return `console.log('hello loader')` // 必须是 js 代码的 字符串
    // return code

    return html
}