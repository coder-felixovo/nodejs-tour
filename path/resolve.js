const path = require('path')

let result1 = path.resolve(__dirname, './baz')
console.log(result1) // __dirname\baz

let result2 = path.resolve(__dirname, 'foo/a.jpg', '../bar/b.jpg')
console.log(result2) // __dirname\foo\bar\b.jpg

/* 
  path.resolve() 将参数解析为绝对路径
 */