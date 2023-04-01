const fs = require('fs')

let content = 'abcdefg'

fs.writeFile(__dirname + '/text.txt', content, 'utf8', function (error) {
  if (error) {
    return console.log('File write failed\n' + error)
  }
  console.log('File write successfully')
})