/**
 * @author felixovo
 * @date 2023-10-26
 * @description 示例: 使用node-rsa包完成RSA加解密
 */

const NodeRSA = require('node-rsa');

let key = new NodeRSA({ b: 512 })
key.setOptions({ encryptionScheme: "pkcs1" })

let pubKey = key.exportKey("pkcs8-public-pem")
let priKey = key.exportKey("pkcs8-private-pem")

console.log("公钥----------")
console.log(pubKey)

console.log()

console.log("私钥----------")
console.log(priKey)

const data = {
  username: "admin",
  password: "admin"
}

console.log()

const jsonStr = JSON.stringify(data)
console.log("json数据: " + jsonStr)

const encryption = key.encrypt(jsonStr, "base64", "utf8").toString()
console.log("encryption: " + encryption)

const decryption = key.decrypt(encryption, "utf8").toString()
console.log("decryption: " + decryption)