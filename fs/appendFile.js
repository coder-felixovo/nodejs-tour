const fs = require('fs')

const content = '\napple banana cherry'

fs.appendFile(__dirname + '/text.txt', content, 'utf8', function (error) {
  if (error) {
    return console.log('Append content failed\n' + error)
  }
  console.log('Append content successfully')
})