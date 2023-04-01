const path = require('path')

let pathStr1 = path.join('/a', '/b/c', '../', './d', 'e')
console.log(pathStr1) // "\a\b\d\e"

let pathStr2 = path.join(__dirname, './files/1.txt')
console.log(pathStr2) // 当前文件所处父目录\files\1.txt

/* 
  path.join()用于拼接路径
 */
