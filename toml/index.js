const fs = require("fs")
const toml = require("toml")

let data = null

function loadTomlConfig(filepath) {
  if (!fs.existsSync) {
    throw new Error("No file found")
  }

  const file = fs.readFileSync(filepath, "utf8")

  data = toml.parse(file)
}

function getTomlConfig() {
  if (!data) {
    throw new Error("The configuration file is not loaded")
  }
  return data
}

module.exports.loadTomlConfig = loadTomlConfig
module.exports.getTomlConfig = getTomlConfig