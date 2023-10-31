const { Buffer } = require("node:buffer")

/*
  Buffer.isBuffer(obj)
  Returns true if obj is a Buffer, false otherwise.
*/

console.log(Buffer.isBuffer(Buffer.alloc(10)))
// true

console.log(Buffer.isBuffer(Buffer.from("foo")))
// true

console.log(Buffer.isBuffer("bar"))
// false

console.log(Buffer.isBuffer([]))
// false

console.log(Buffer.isBuffer({}))
// false

console.log(Buffer.isBuffer(new Uint8Array(128)))
// false