/**
 * @author felixovo
 * @date 2023-10-26
 * @description 示例: 使用node-xlsx包将数据构建到xlsx文件中
 */

const xlsx = require("node-xlsx")
const fs = require("fs")

const data = [
  ["name", "age"], // 标题
  ["Amy", 18],
  ["Brown", 19],
  ["Cindy", 18],
  ["Danie", 19]
]

const buffer = xlsx.build([{name: 'student', data}])
fs.writeFileSync(`${__dirname}/student.xlsx`, buffer)