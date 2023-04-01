const url = require('url')
const http = require('http')
const server = http.createServer((req, res) => {
  // 获取本次请求的资源路径
  console.log(req.url)
  // 获取本次请求的方式
  console.log(req.method)

  let obj = url.parse(req.url, true)
  // 获取get请求的查询字符串
  console.log(obj.query)

  // 当存在post提交数据，data事件立马执行，postData就是提交过来的数据对象
  req.on('data',(postData) => {
    console.log(postData.toString())
  })

  res.write('hello node.js')
  res.end()
})

server.listen(7990, () => {
  console.log('http server running...')
})