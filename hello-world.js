'use strict'

const fs = require('fs')
const chalk = require('chalk')
const ansiToSVG = require('.')

const colorFile = './fixtures/base16-flat-dark-f1lt3r-256.itermcolors'
const ansiText = chalk`{green 👋 Hello}, {blueBright World} 🌏{redBright !}\n` +
	chalk.bgRed('👋') +
	chalk.bgYellow('🦄') +
	chalk.bgGreen('🐘') + ' ' +
	chalk.strikethrough.italic('13') +
	chalk.bold('3') + chalk.underline('7') + ' ' +
	chalk.bgCyan('🍄') +
	chalk.bgBlue('🎃') +
	chalk.bgMagenta('🐦')

const result = ansiToSVG(ansiText, {
	fontFamily: 'Courier',
	colors: colorFile
})
const outputFile = './examples/hello-world.svg'
fs.writeFileSync(outputFile, result)
