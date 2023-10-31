const { Buffer } = require("node:buffer")

// e.g.1
let buf = Buffer.alloc(3)
console.log(buf)
// <Buffer 00 00 00>

// e.g.2
let buf1 = Buffer.alloc(3, "a")
console.log(buf1)
// <Buffer 61 61 61>
console.log(buf1.toString())
// "aaa"

// e.g.3
let buf2 = Buffer.alloc(3, "123", "base64")
console.log(buf2)
// <Buffer d7 6d d7>
console.log(buf2.toString("base64"))
// "123X"