const crypto = require("crypto")

/**
 * AES加密
 * @param {string} text 需要加密的文本
 * @param {crypto.CipherKey} key 
 * @param {crypto.BinaryLike} iv 
 * @returns 
 */
function encrypt(text, key, iv) {
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv)
  return cipher.update(text, "utf-8", "base64") + cipher.final("base64")
}

const key = "0123456789abcdef"
const iv = "0123456789012345"

let plainText = "hello"
let encryptedText = encrypt(plainText, key, iv)
console.log(encryptedText)
// "q1SC38bADodouQgCGbofLQ=="

/**
 * AES解密
 * @param {string} encryptedText 需要解密的文本
 * @param {crypto.CipherKey} key 
 * @param {crypto.BinaryLike} iv 
 * @returns 
 */
function decrypt(encryptedText, key, iv) {
  const decipher = crypto.createDecipheriv("aes-128-cbc", key, iv)
  return decipher.update(encryptedText, "base64", "utf-8") + decipher.final("utf-8")
}

const originalText = decrypt(encryptedText, key, iv)
console.log(originalText)
// "hello"