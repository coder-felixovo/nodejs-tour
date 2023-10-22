const CryptoJs = require("crypto-js")

const key = CryptoJs.enc.Utf8.parse("0123456789abcdef")

/**
 * AES加密
 * @param {string} text 需要加密的文本
 * @param {string | CryptoJs.lib.WordArray} key 
 * @returns 
 */
function encrypt(text, key) {
  return CryptoJs.AES.encrypt(text, key, {
    iv: CryptoJs.enc.Utf8.parse("0123456789012345"),
    mode: CryptoJs.mode.CBC, // ECB可以不加iv，CBC需要加iv
    padding: CryptoJs.pad.Pkcs7
  }).ciphertext.toString(CryptoJs.enc.Base64)
}

const plainText = "hello"
const encryptedText = encrypt(plainText, key)
console.log(encryptedText)
// "q1SC38bADodouQgCGbofLQ=="

/**
 * AES解密
 * @param {string} encryptedText 需要解密的文本
 * @param {*} key 
 * @returns 
 */
function decrypt(encryptedText, key) {
  return CryptoJs.AES.decrypt(encryptedText, key, {
    iv: CryptoJs.enc.Utf8.parse("0123456789012345"),
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7
  }).toString(CryptoJs.enc.Utf8)
}

const originalText = decrypt(encryptedText, key)
console.log(originalText)
// "hello"