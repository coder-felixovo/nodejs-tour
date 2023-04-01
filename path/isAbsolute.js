const path = require('path')

let index = '/a/b/c/index.html'
console.log(path.isAbsolute(index)) // true

let home = '../../home.html'
console.log(path.isAbsolute(home)) // false

/* 
  path.isAbsolute() 判断参数是否是绝对路径
 */