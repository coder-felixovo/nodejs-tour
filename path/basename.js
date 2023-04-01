const path = require('path')

let savePath = '/a/b/c/index.html'

let result1 = path.basename(savePath)
console.log(result1) // "index.html"

let result2 = path.basename(savePath, '.html')
console.log(result2) // "index"

let result3 = path.basename(savePath, '.jpg')
console.log(result3) // "index.html"

/* 
  path.basename() 返回路径中最后一部分
  1. 没有提供第二个参数，返回结果包含扩展名
  2. 提供了第二个参数，返回结果移除了扩展名
  3. 提供了第二个参数，但与路径不符，返回结果包含扩展名
 */