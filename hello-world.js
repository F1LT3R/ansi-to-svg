const fs = require('fs')
const chalk = require('chalk')
const ansiToSVG = require('.')

const ansiText = chalk`{green 👋 Hello}, {blueBright World} 🌏{redBright !}`
const result = ansiToSVG(ansiText, {
	fontFamily: 'Courier'
})
const outputFile = './examples/hello-world.svg'
fs.writeFileSync(outputFile, result)
