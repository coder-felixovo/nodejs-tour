const { Buffer } = require("node:buffer")

/*
  Buffer.isEncoding(encoding)
  Returns true if encoding is the name of a supported character encoding, or false otherwise.
*/

console.log(Buffer.isEncoding("utf8"))
// true

console.log(Buffer.isEncoding("utf-8"))
// true

console.log(Buffer.isEncoding("UTF-8"))
// true

console.log(Buffer.isEncoding("hex"))
// true

console.log(Buffer.isEncoding(""))
// false

console.log(Buffer.isEncoding("utf/8"))
// false