const fs = require('fs')

/*
  创建目录
  path：创建目录的路径
  options
    -- recursive  默认值为false，当要创建的目录已经存在，抛出异常
    -- mode  创建目录的权限，默认为0o777
*/
fs.mkdir(__dirname + '/newDirectory', { recursive: true }, function (error) {
  if (error) {
    return console.log('Create new directory failed\n' + error)
  }
  console.log('Create new directory successfully')
})
