const fs = require('fs')

fs.copyFile(__dirname + '/text.txt', __dirname + '/textCopy.txt', function (error) {
  if (error) {
    return console.log('File copy failed\n' + error)
  }
  console.log('File copy successfully')
})

