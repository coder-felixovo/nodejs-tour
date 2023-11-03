const { loadTomlConfig, getTomlConfig } = require("./index")

const tomlFilePath = `${__dirname}/base.toml`
loadTomlConfig(tomlFilePath)
const config = getTomlConfig()
console.log(config)