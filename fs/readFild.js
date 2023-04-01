const fs = require('fs')

fs.readFile(__dirname + "/text.txt", "utf8", function (error, data) {
  if (error) {
    return console.log("File read failed", error.message)
  }
  console.log("File read successfully\n" + data)
})
