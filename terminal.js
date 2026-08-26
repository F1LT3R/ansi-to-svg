const fs = require('fs')
const chalk = require('chalk')
const container = require('@svag/window')
const ansiToSVG = require('.')

const ansiText = chalk`{green 👋 Hello}, {blueBright World} 🌏{redBright !}\n` +
	chalk.bgRed('👋') +
	chalk.bgYellow('🦄') +
	chalk.bgGreen('🐘') + ' ' +
	chalk.strikethrough.italic('13') +
	chalk.bold('3') + chalk.underline('7') + ' ' +
	chalk.bgCyan('🍄') +
	chalk.bgBlue('🎃') +
	chalk.bgMagenta('🐦')

/** @type {import('@svag/window').WindowOptions} */
const containerOptions = {
	title: '⚡️Terminal',
	noStretch: true,
	minWidth: 250,
	minHeight: 100,
	minify: false
	// NoShadow: true
}
const result = ansiToSVG(ansiText, {
	fontFamily: 'Courier',
	container,
	containerOptions
})
const outputFile = 'examples/terminal.svg'
fs.writeFileSync(outputFile, result)
