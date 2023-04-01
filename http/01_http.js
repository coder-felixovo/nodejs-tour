// 导入http模块
const http = require('http')

// 创建web服务器实例
const server = http.createServer()

// 为服务器实例绑定request事件
server.on('request', (req, res) => {
  // 客户端请求服务器，触发request事件，调用事件处理函数
  console.log('Someone visit our web server.')
  // req是请求对象，它包含了与客户端相关的属性
  const str = `你请求的url地址是${req.url}，请求的method类型是${req.method}`
  // 设置响应，解决中文乱码问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 向客户端发送指定内容
  res.end(str)
})

// 启动服务器
// server.listen(端口号, 回调)
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1')
})