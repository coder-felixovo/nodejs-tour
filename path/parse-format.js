const path = require('path')

let savePath = '/a/b/c'

let result1 = path.parse(savePath)
console.log(result1)
// { root: '/', dir: '/a/b', base: 'c', ext: '', name: 'c' }

let result2 = path.format(result1)
console.log(result2)
// "/a/b\c"

/* 
  path.parse() 返回路径字符串的对象
  path.format() 从路径对象中返回字符串
 */