const crypto = require("crypto")

// 生成一个uuid
let uuid = crypto.randomUUID()

console.log(uuid)
// e.g.: 1c5a6488-1f2f-464c-b2bf-28c3c6af2cbd

console.log(uuid.length)
// 36

// 在实际使用中，通常会移除短横线
uuid = uuid.split('-').join('')

console.log(uuid)
// e.g.: 1c5a64881f2f464cb2bf28c3c6af2cbd

console.log(uuid.length)
// 32