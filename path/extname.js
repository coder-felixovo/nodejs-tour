const path = require('path')

let ext1 = path.extname('/a/b/c/index.html')
console.log(ext1) // ".html"

let ext2 = path.extname('.index')
console.log(ext2) // ""

let ext3 = path.extname('index.node.md')
console.log(ext3) // ".md"

let ext4 = path.extname('index')
console.log(ext4) // ""

/* 
  path.extname()返回结果如下
  1. 路径包含`.xxx`的后缀名，则返回`.xxx`
  2. 如果路径中没有`.`或者包含`.`但是以`.`开头的字符串，返回空字符串
 */
