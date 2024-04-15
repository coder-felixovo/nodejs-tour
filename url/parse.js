const nodeUrl = require("node:url")

const testUrl = "https://www.localhost:8080/a/b/c?page=1&pageSize=10#a1"

const resParseUrl = nodeUrl.parse(testUrl, false)
console.log(resParseUrl)
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.localhost:8080',
  port: '8080',
  hostname: 'www.localhost',
  hash: '#a1',
  search: '?page=1&pageSize=10',
  query: 'page=1&pageSize=10',
  pathname: '/a/b/c',
  path: '/a/b/c?page=1&pageSize=10',
  href: 'https://www.localhost:8080/a/b/c?page=1&pageSize=10#a1'
}
*/