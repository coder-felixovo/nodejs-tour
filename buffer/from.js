const { Buffer } = require("node:buffer")

/*
  Buffer.from(array)
  使用范围0-255的字节数组分配一个新buffer, 超出该范围的数组将被截断.
*/
let buf1 = Buffer.from([0x61, 0x62, 0x63]) 

console.log(buf1) // 以16进制存在buffer对象中 
// <Buffer 61 62 63> 

console.log(buf1.toString()) //转换成相应字符
// "abc"

/*
  Buffer.from(string[, encoding])
  1. 根据一个字符串创建 Buffer 对象
  2. encoding默认值"utf8"
*/
let buf2 = Buffer.from("buffer")
console.log(buf2)
// <Buffer 62 75 66 66 65 72>
console.log(buf2.toString())
// "buffer"

let hexStr3 = Buffer.from("buffer").toString("hex")
console.log(hexStr3)
// 627566666572
let buf3 = Buffer.from(hexStr3, "hex")
console.log(buf3.toString())
// "buffer"