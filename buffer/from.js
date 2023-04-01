let buf1 = Buffer.from([97, 98, 99]) // 根据一个数组创建 Buffer 对象 

console.log(buf1) // 以16进制存在buffer对象中 
//<Buffer 61 62 63> 

console.log(buf1.toString()) //转换成相应字符
// abc

let buf2 = Buffer.from("node.js") // 根据一个字符串创建 Buffer 对象 

console.log(buf2)
// <Buffer 6e 6f 64 65 2e 6a 73>

console.log(buf2.toString())
// node.js