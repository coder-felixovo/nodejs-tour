const cron = require("node-cron")
const assert = require("assert")

// e.g.1 using multiple values
const expression = "2,4,6,8,10 * * * * *" // is the same as "1-10/2 * * * * *"
const isValidExpression = cron.validate(expression)
assert(isValidExpression, new Error("invalid expression"))

const task = cron.schedule(expression, () => {
  console.log("e.g.1: running every seconds 2,4,6,8,10")
},{
  scheduled: false,
  timezone: "Asia/Shanghai"
})

task.start()

// e.g.2 using range
cron.schedule("1-3 * * * * * ", () => {
  console.log("e.g.2: running every second from 1 to 3")
})

// e.g.3 using step values
cron.schedule("*/5 * * * * *", () => {
  console.log("e.g.3 running every 5 seconds")
})