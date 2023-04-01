let buf = Buffer.alloc(10)

buf.write("abcdefghijkl")

console.log(buf)
// <Buffer 61 62 63 64 65 66 67 68 69 6a>

console.log(buf.toString())
// "abcdefghij"