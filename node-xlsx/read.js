/**
 * @author felixovo
 * @date 2023-10-26
 * @description 示例: 使用node-xlsx包读取excel表
 */

/*
  Excel: index.xlsx
  工作表: user
  name    age
  Amy     18
  Brown   19
  Cindy   18
  Danie   19
*/

const xlsx = require("node-xlsx")

const workSheetFromFile = xlsx.parse(`${__dirname}/index.xlsx`)

console.log(workSheetFromFile[0])

console.log("The name of the worksheet: " + workSheetFromFile[0].name)
// "The name of the worksheet: user"

workSheetFromFile[0].data.forEach((item, i) => {
  if (i === 1) {
    console.log(`${item[0]} --- ${item[1]}`)
  } else {
    console.log(`${item[0]} --- ${item[1]}`)
  }
})
// name --- age
// Amy --- 18
// Brown --- 19
// Cindy --- 18
// Danie --- 19