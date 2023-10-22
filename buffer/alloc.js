let buf = Buffer.alloc(10)

let str = "abcdefghijkl"
buf.write(str)

console.log(buf)
// <Buffer 61 62 63 64 65 66 67 68 69 6a>

console.log(buf.length)
// 10

console.log(buf.toString())
// "abcdefghij"