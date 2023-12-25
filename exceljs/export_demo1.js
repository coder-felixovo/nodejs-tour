const { Workbook } = require("exceljs");
const fs = require("fs");

async function main() {
  // create a excel workbook
  const workbook = new Workbook();

  workbook.creator = "felixovo";
  workbook.created = new Date();

  // create a worksheet
  const worksheet = workbook.addWorksheet("Sheet1");

  // set column head
  worksheet.columns = [
    { header: "排序", key: "id", width: 30 },
    { header: "姓名", key: "name", width: 30 },
    { header: "年龄", key: "age", width: 30 },
  ];

  worksheet.addRows([
    { id: "1", name: "Amy", age: 18 },
    { id: "2", name: "Brown", age: 19 },
    { id: "3", name: "Cindy", age: 20 },
  ])
  
  const xlsxBuffer = await workbook.xlsx.writeBuffer();
  fs.writeFileSync(`${__dirname}/export_demo1.xlsx`, xlsxBuffer);
}

main();