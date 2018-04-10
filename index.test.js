import fs from 'fs'
import test from 'ava'
import chalk from 'chalk'
// eslint-disable-next-line no-unused-vars
import open from 'open'

import ansiToSVG from '.'

const fixtures = {
	chalkBaseStylesANSI: String(fs.readFileSync('./fixtures/fixture.chalk-styles.ansi'))
}

test('Basic example', t => {
	const ansiText = chalk`Your {red $wish}\n is {bgYellow.cyan my} command.`
	const result = ansiToSVG(ansiText)
	t.is(result, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 126.02, 40.45" font-family="SauceCodePro Nerd Font, Source Code Pro, Courier" font-size="14"><g fill="#D3D3D3"><rect x="0" y="0" width="126.02" height="40.45" fill="#000000"/><text x="0" y="14.55">Your </text><text x="42.01" y="14.55" fill="#B22222">$wish</text><text x="8.4" y="33.55"> is </text><rect x="33.61" y="19" width="16.8" height="19" fill="#DAA520" opacity="1"/><text x="33.61" y="33.55" fill="#008B8B">my</text><text x="58.81" y="33.55"> command.</text></g></svg>')

	const outputFile = './examples/basic-example.svg'
	fs.writeFileSync(outputFile, result)
	// // Open
	// open(outputFile)
})

test('iTerm2Colors colors file', t => {
	const ansiText = chalk`Your {red $wish}\n is {bgYellow.cyan my} command.`
	const colorFile = './fixtures/base16-flat-dark-f1lt3r-256.itermcolors'
	const result = ansiToSVG(ansiText, {colors: colorFile})
	t.is(result, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 126.02, 40.45" font-family="SauceCodePro Nerd Font, Source Code Pro, Courier" font-size="14"><g fill="#e0e0e0"><rect x="0" y="0" width="126.02" height="40.45" fill="#2c3e50"/><text x="0" y="14.55">Your </text><text x="42.01" y="14.55" fill="#ce4435">$wish</text><text x="8.4" y="33.55"> is </text><rect x="33.61" y="19" width="16.8" height="19" fill="#e9bd0e" opacity="1"/><text x="33.61" y="33.55" fill="#1abc9c">my</text><text x="58.81" y="33.55"> command.</text></g></svg>')

	const outputFile = './examples/iterm2colors-file.svg'
	fs.writeFileSync(outputFile, result)
	// // Open
	// open(outputFile)})
})

test('emojis', t => {
	const ansiText = chalk.bgRed('🌈') +
		chalk.bgYellow('🦄') +
		chalk.bgGreen('🐘') +
		chalk.bgCyan('🍄') +
		chalk.bgBlue('🎃') +
		chalk.bgMagenta('🐦') +
		chalk.bgRed('🖤') +
		chalk.bgYellow('😳') +
		chalk.bgGreen('😒') +
		chalk.bgCyan('😮') +
		chalk.bgBlue('😐') +
		chalk.bgMagenta('😱') +
		chalk.bgRed('😕') +
		chalk.bgYellow('😕') +
		chalk.bgGreen('😑') +
		chalk.bgCyan('😘')
	const colorFile = './fixtures/base16-flat-dark-f1lt3r-256.itermcolors'
	const result = ansiToSVG(ansiText, {colors: colorFile})
	t.is(result, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 268.84, 22.45" font-family="SauceCodePro Nerd Font, Source Code Pro, Courier" font-size="14"><g fill="#e0e0e0"><rect x="0" y="0" width="268.84" height="22.45" fill="#2c3e50"/><rect x="0" y="0" width="16.8" height="19" fill="#ce4435" opacity="1"/><text x="0" y="14.55">&#x1F308;</text><rect x="16.8" y="0" width="16.8" height="19" fill="#e9bd0e" opacity="1"/><text x="16.8" y="14.55">&#x1F984;</text><rect x="33.61" y="0" width="16.8" height="19" fill="#2ecc71" opacity="1"/><text x="33.61" y="14.55">&#x1F418;</text><rect x="50.41" y="0" width="16.8" height="19" fill="#1abc9c" opacity="1"/><text x="50.41" y="14.55">&#x1F344;</text><rect x="67.21" y="0" width="16.8" height="19" fill="#318fce" opacity="1"/><text x="67.21" y="14.55">&#x1F383;</text><rect x="84.01" y="0" width="16.8" height="19" fill="#9b59b6" opacity="1"/><text x="84.01" y="14.55">&#x1F426;</text><rect x="100.82" y="0" width="16.8" height="19" fill="#ce4435" opacity="1"/><text x="100.82" y="14.55">&#x1F5A4;</text><rect x="117.62" y="0" width="16.8" height="19" fill="#e9bd0e" opacity="1"/><text x="117.62" y="14.55">&#x1F633;</text><rect x="134.42" y="0" width="16.8" height="19" fill="#2ecc71" opacity="1"/><text x="134.42" y="14.55">&#x1F612;</text><rect x="151.22" y="0" width="16.8" height="19" fill="#1abc9c" opacity="1"/><text x="151.22" y="14.55">&#x1F62E;</text><rect x="168.03" y="0" width="16.8" height="19" fill="#318fce" opacity="1"/><text x="168.03" y="14.55">&#x1F610;</text><rect x="184.83" y="0" width="16.8" height="19" fill="#9b59b6" opacity="1"/><text x="184.83" y="14.55">&#x1F631;</text><rect x="201.63" y="0" width="16.8" height="19" fill="#ce4435" opacity="1"/><text x="201.63" y="14.55">&#x1F615;</text><rect x="218.44" y="0" width="16.8" height="19" fill="#e9bd0e" opacity="1"/><text x="218.44" y="14.55">&#x1F615;</text><rect x="235.24" y="0" width="16.8" height="19" fill="#2ecc71" opacity="1"/><text x="235.24" y="14.55">&#x1F611;</text><rect x="252.04" y="0" width="16.8" height="19" fill="#1abc9c" opacity="1"/><text x="252.04" y="14.55">&#x1F618;</text></g></svg>')

	const outputFile = './examples/emojis.svg'
	fs.writeFileSync(outputFile, result)
	// // Open
	// open(outputFile)})
})

test('Chalk base styles', t => {
	const ansiText = fixtures.chalkBaseStylesANSI
	const colorFile = './fixtures/base16-flat-dark-f1lt3r-256.itermcolors'
	const result = ansiToSVG(String(ansiText), {colors: colorFile})
	t.is(result, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 1142.59, 112.45" font-family="SauceCodePro Nerd Font, Source Code Pro, Courier" font-size="14"><g fill="#e0e0e0"><rect x="0" y="0" width="1142.59" height="112.45" fill="#2c3e50"/><text x="0" y="14.55" font-weight="bold">bold            </text><text x="142.82" y="14.55">dim             </text><text x="285.65" y="14.55" font-style="italic">italic          </text><path d="M428.4697265625,16.5146875 L562.8916015625,16.5146875 Z" stroke="#e0e0e0"/><text x="428.47" y="14.55">underline       </text><text x="571.29" y="14.55">inverse         </text><path d="M714.1162109375,10.3546875 L848.5380859375,10.3546875 Z" stroke="#e0e0e0"/><text x="714.12" y="14.55">strikethrough   </text><text x="0" y="33.55" font-weight="bold" fill="#2c3e50">black           </text><text x="142.82" y="33.55" font-weight="bold" fill="#ce4435">red             </text><text x="285.65" y="33.55" font-weight="bold" fill="#2ecc71">green           </text><text x="428.47" y="33.55" font-weight="bold" fill="#e9bd0e">yellow          </text><text x="571.29" y="33.55" font-weight="bold" fill="#318fce">blue            </text><text x="714.12" y="33.55" font-weight="bold" fill="#9b59b6">magenta         </text><text x="856.94" y="33.55" font-weight="bold" fill="#1abc9c">cyan            </text><text x="999.76" y="33.55" font-weight="bold" fill="#e0e0e0">white           </text><text x="0" y="52.55" font-weight="bold" fill="#758283">gray            </text><text x="142.82" y="52.55" fill="#ff5342">redBright       </text><text x="285.65" y="52.55" fill="#ff5342"> </text><text x="285.65" y="52.55" fill="#39ff8d">greenBright     </text><text x="428.47" y="52.55" fill="#39ff8d"> </text><text x="428.47" y="52.55" fill="#fedb00">yellowBright    </text><text x="571.29" y="52.55" fill="#fedb00"> </text><text x="571.29" y="52.55" fill="#0098ff">blueBright      </text><text x="714.12" y="52.55" fill="#0098ff"> </text><text x="714.12" y="52.55" fill="#e500ff">magentaBright   </text><text x="856.94" y="52.55" fill="#e500ff"> </text><text x="856.94" y="52.55" fill="#00ffcc">cyanBright      </text><text x="999.76" y="52.55" fill="#00ffcc"> </text><text x="999.76" y="52.55" fill="#f9fdff">whiteBright     </text><text x="1142.59" y="52.55" fill="#f9fdff"> </text><rect x="0" y="57" width="134.42" height="19" fill="#2c3e50" opacity="1"/><text x="0" y="71.55" font-weight="bold" fill="#e0e0e0">bgBlack         </text><text x="142.82" y="71.55" fill="#f9fdff"> </text><rect x="142.82" y="57" width="134.42" height="19" fill="#ce4435" opacity="1"/><text x="142.82" y="71.55" font-weight="bold" fill="#2c3e50">bgRed           </text><text x="285.65" y="71.55" fill="#f9fdff"> </text><rect x="285.65" y="57" width="134.42" height="19" fill="#2ecc71" opacity="1"/><text x="285.65" y="71.55" font-weight="bold" fill="#2c3e50">bgGreen         </text><text x="428.47" y="71.55" fill="#f9fdff"> </text><rect x="428.47" y="57" width="134.42" height="19" fill="#e9bd0e" opacity="1"/><text x="428.47" y="71.55" font-weight="bold" fill="#2c3e50">bgYellow        </text><text x="571.29" y="71.55" fill="#f9fdff"> </text><rect x="571.29" y="57" width="134.42" height="19" fill="#318fce" opacity="1"/><text x="571.29" y="71.55" font-weight="bold" fill="#2c3e50">bgBlue          </text><text x="714.12" y="71.55" fill="#f9fdff"> </text><rect x="714.12" y="57" width="134.42" height="19" fill="#9b59b6" opacity="1"/><text x="714.12" y="71.55" font-weight="bold" fill="#2c3e50">bgMagenta       </text><text x="856.94" y="71.55" fill="#f9fdff"> </text><rect x="856.94" y="57" width="134.42" height="19" fill="#1abc9c" opacity="1"/><text x="856.94" y="71.55" font-weight="bold" fill="#2c3e50">bgCyan          </text><text x="999.76" y="71.55" fill="#f9fdff"> </text><rect x="999.76" y="57" width="134.42" height="19" fill="#e0e0e0" opacity="1"/><text x="999.76" y="71.55" font-weight="bold" fill="#2c3e50">bgWhite         </text><text x="1142.59" y="71.55" fill="#f9fdff"> </text><rect x="0" y="76" width="134.42" height="19" fill="#758283" opacity="1"/><text x="0" y="90.55" font-style="italic" fill="#e0e0e0">bgBlackBright   </text><text x="142.82" y="90.55" fill="#f9fdff"> </text><rect x="142.82" y="76" width="134.42" height="19" fill="#ff5342" opacity="1"/><text x="142.82" y="90.55" font-style="italic" fill="#2c3e50">bgRedBright     </text><text x="285.65" y="90.55" fill="#f9fdff"> </text><rect x="285.65" y="76" width="134.42" height="19" fill="#39ff8d" opacity="1"/><text x="285.65" y="90.55" font-style="italic" fill="#2c3e50">bgGreenBright   </text><text x="428.47" y="90.55" fill="#f9fdff"> </text><rect x="428.47" y="76" width="134.42" height="19" fill="#fedb00" opacity="1"/><text x="428.47" y="90.55" font-style="italic" fill="#2c3e50">bgYellowBright  </text><text x="571.29" y="90.55" fill="#f9fdff"> </text><rect x="571.29" y="76" width="134.42" height="19" fill="#0098ff" opacity="1"/><text x="571.29" y="90.55" font-style="italic" fill="#2c3e50">bgBlueBright    </text><text x="714.12" y="90.55" fill="#f9fdff"> </text><rect x="714.12" y="76" width="134.42" height="19" fill="#e500ff" opacity="1"/><text x="714.12" y="90.55" font-style="italic" fill="#2c3e50">bgMagentaBright </text><text x="856.94" y="90.55" fill="#f9fdff"> </text><rect x="856.94" y="76" width="134.42" height="19" fill="#00ffcc" opacity="1"/><text x="856.94" y="90.55" font-style="italic" fill="#2c3e50">bgCyanBright    </text><text x="999.76" y="90.55" fill="#f9fdff"> </text><rect x="999.76" y="76" width="134.42" height="19" fill="#f9fdff" opacity="1"/><text x="999.76" y="90.55" font-style="italic" fill="#2c3e50">bgWhiteBright   </text><text x="1142.59" y="90.55" fill="#f9fdff"> </text></g></svg>')

	const outputFile = './examples/chalk-base-styles.svg'
	fs.writeFileSync(outputFile, result)
	// // Open
	// open(outputFile)})
})

test('Powerline font compatibility', t => {
	const ansiText = chalk` {bgGreen.white Testing background colors } butting adjacent lines. \n` +
		chalk` {red ✘ }{bgBlue.black  ~/repos/minkjs/ansi-to }{bgYellow.blue  }{bgYellow.black  svg-image-plugins ● }{yellow } ava powerline-fonts.test.js \n` +
		chalk`  {green 1 passed}`
	const colorFile = './fixtures/base16-flat-dark-f1lt3r-256.itermcolors'
	const result = ansiToSVG(String(ansiText), {
		colors: colorFile,
		fontFamily: 'SauceCodePro Nerd Font'
	})
	t.is(result, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 688.91, 58.45" font-family="SauceCodePro Nerd Font" font-size="14"><g fill="#e0e0e0"><rect x="0" y="0" width="688.91" height="58.45" fill="#2c3e50"/><rect x="8.4" y="0" width="218.44" height="19" fill="#2ecc71" opacity="1"/><text x="8.4" y="14.55" fill="#e0e0e0">Testing background colors </text><text x="235.24" y="14.55"> butting adjacent lines. </text><text x="8.4" y="33.55" fill="#ce4435">&#x2718; </text><rect x="25.2" y="19" width="210.03" height="19" fill="#318fce" opacity="1"/><text x="25.2" y="33.55" fill="#2c3e50">&#xE0B0; ~/repos/minkjs/ansi-to </text><rect x="235.24" y="19" width="16.8" height="19" fill="#e9bd0e" opacity="1"/><text x="235.24" y="33.55" fill="#318fce">&#xE0B0; </text><rect x="252.04" y="19" width="184.83" height="19" fill="#e9bd0e" opacity="1"/><text x="252.04" y="33.55" fill="#2c3e50">&#xE0A0; svg-image-plugins &#x25CF; </text><text x="436.87" y="33.55" fill="#e9bd0e">&#xE0B0;</text><text x="453.67" y="33.55"> ava powerline-fonts.test.js </text><text x="16.8" y="52.55" fill="#2ecc71">1 passed</text></g></svg>')

	const outputFile = './examples/powerline-font.svg'
	fs.writeFileSync(outputFile, result)
	// // Open
	// open(outputFile)})
})

test('Light iTerm2 color scheme', t => {
	const ansiText = fixtures.chalkBaseStylesANSI
	const colorFile = './fixtures/base16-tomorrow-256.itermcolors'
	const result = ansiToSVG(String(ansiText), {colors: colorFile})
	t.is(result, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 1142.59, 112.45" font-family="SauceCodePro Nerd Font, Source Code Pro, Courier" font-size="14"><g fill="#4d4d4c"><rect x="0" y="0" width="1142.59" height="112.45" fill="#ffffff"/><text x="0" y="14.55" font-weight="bold">bold            </text><text x="142.82" y="14.55">dim             </text><text x="285.65" y="14.55" font-style="italic">italic          </text><path d="M428.4697265625,16.5146875 L562.8916015625,16.5146875 Z" stroke="#4d4d4c"/><text x="428.47" y="14.55">underline       </text><text x="571.29" y="14.55">inverse         </text><path d="M714.1162109375,10.3546875 L848.5380859375,10.3546875 Z" stroke="#4d4d4c"/><text x="714.12" y="14.55">strikethrough   </text><text x="0" y="33.55" font-weight="bold" fill="#ffffff">black           </text><text x="142.82" y="33.55" font-weight="bold" fill="#c82829">red             </text><text x="285.65" y="33.55" font-weight="bold" fill="#718c00">green           </text><text x="428.47" y="33.55" font-weight="bold" fill="#eab700">yellow          </text><text x="571.29" y="33.55" font-weight="bold" fill="#4271ae">blue            </text><text x="714.12" y="33.55" font-weight="bold" fill="#8859a8">magenta         </text><text x="856.94" y="33.55" font-weight="bold" fill="#3e999f">cyan            </text><text x="999.76" y="33.55" font-weight="bold" fill="#4d4d4c">white           </text><text x="0" y="52.55" font-weight="bold" fill="#8e908c">gray            </text><text x="142.82" y="52.55" fill="#c82829">redBright       </text><text x="285.65" y="52.55" fill="#c82829"> </text><text x="285.65" y="52.55" fill="#718c00">greenBright     </text><text x="428.47" y="52.55" fill="#718c00"> </text><text x="428.47" y="52.55" fill="#eab700">yellowBright    </text><text x="571.29" y="52.55" fill="#eab700"> </text><text x="571.29" y="52.55" fill="#4271ae">blueBright      </text><text x="714.12" y="52.55" fill="#4271ae"> </text><text x="714.12" y="52.55" fill="#8859a8">magentaBright   </text><text x="856.94" y="52.55" fill="#8859a8"> </text><text x="856.94" y="52.55" fill="#3e999f">cyanBright      </text><text x="999.76" y="52.55" fill="#3e999f"> </text><text x="999.76" y="52.55" fill="#1c1f21">whiteBright     </text><text x="1142.59" y="52.55" fill="#1c1f21"> </text><rect x="0" y="57" width="134.42" height="19" fill="#ffffff" opacity="1"/><text x="0" y="71.55" font-weight="bold" fill="#4d4d4c">bgBlack         </text><text x="142.82" y="71.55" fill="#1c1f21"> </text><rect x="142.82" y="57" width="134.42" height="19" fill="#c82829" opacity="1"/><text x="142.82" y="71.55" font-weight="bold" fill="#ffffff">bgRed           </text><text x="285.65" y="71.55" fill="#1c1f21"> </text><rect x="285.65" y="57" width="134.42" height="19" fill="#718c00" opacity="1"/><text x="285.65" y="71.55" font-weight="bold" fill="#ffffff">bgGreen         </text><text x="428.47" y="71.55" fill="#1c1f21"> </text><rect x="428.47" y="57" width="134.42" height="19" fill="#eab700" opacity="1"/><text x="428.47" y="71.55" font-weight="bold" fill="#ffffff">bgYellow        </text><text x="571.29" y="71.55" fill="#1c1f21"> </text><rect x="571.29" y="57" width="134.42" height="19" fill="#4271ae" opacity="1"/><text x="571.29" y="71.55" font-weight="bold" fill="#ffffff">bgBlue          </text><text x="714.12" y="71.55" fill="#1c1f21"> </text><rect x="714.12" y="57" width="134.42" height="19" fill="#8859a8" opacity="1"/><text x="714.12" y="71.55" font-weight="bold" fill="#ffffff">bgMagenta       </text><text x="856.94" y="71.55" fill="#1c1f21"> </text><rect x="856.94" y="57" width="134.42" height="19" fill="#3e999f" opacity="1"/><text x="856.94" y="71.55" font-weight="bold" fill="#ffffff">bgCyan          </text><text x="999.76" y="71.55" fill="#1c1f21"> </text><rect x="999.76" y="57" width="134.42" height="19" fill="#4d4d4c" opacity="1"/><text x="999.76" y="71.55" font-weight="bold" fill="#ffffff">bgWhite         </text><text x="1142.59" y="71.55" fill="#1c1f21"> </text><rect x="0" y="76" width="134.42" height="19" fill="#8e908c" opacity="1"/><text x="0" y="90.55" font-style="italic" fill="#4d4d4c">bgBlackBright   </text><text x="142.82" y="90.55" fill="#1c1f21"> </text><rect x="142.82" y="76" width="134.42" height="19" fill="#c82829" opacity="1"/><text x="142.82" y="90.55" font-style="italic" fill="#ffffff">bgRedBright     </text><text x="285.65" y="90.55" fill="#1c1f21"> </text><rect x="285.65" y="76" width="134.42" height="19" fill="#718c00" opacity="1"/><text x="285.65" y="90.55" font-style="italic" fill="#ffffff">bgGreenBright   </text><text x="428.47" y="90.55" fill="#1c1f21"> </text><rect x="428.47" y="76" width="134.42" height="19" fill="#eab700" opacity="1"/><text x="428.47" y="90.55" font-style="italic" fill="#ffffff">bgYellowBright  </text><text x="571.29" y="90.55" fill="#1c1f21"> </text><rect x="571.29" y="76" width="134.42" height="19" fill="#4271ae" opacity="1"/><text x="571.29" y="90.55" font-style="italic" fill="#ffffff">bgBlueBright    </text><text x="714.12" y="90.55" fill="#1c1f21"> </text><rect x="714.12" y="76" width="134.42" height="19" fill="#8859a8" opacity="1"/><text x="714.12" y="90.55" font-style="italic" fill="#ffffff">bgMagentaBright </text><text x="856.94" y="90.55" fill="#1c1f21"> </text><rect x="856.94" y="76" width="134.42" height="19" fill="#3e999f" opacity="1"/><text x="856.94" y="90.55" font-style="italic" fill="#ffffff">bgCyanBright    </text><text x="999.76" y="90.55" fill="#1c1f21"> </text><rect x="999.76" y="76" width="134.42" height="19" fill="#1c1f21" opacity="1"/><text x="999.76" y="90.55" font-style="italic" fill="#ffffff">bgWhiteBright   </text><text x="1142.59" y="90.55" fill="#1c1f21"> </text></g></svg>')

	const outputFile = './examples/light-iterm2-color-scheme.svg'
	fs.writeFileSync(outputFile, result)
	// // Open
	// open(outputFile)})
})

test('Padding', t => {
	const ansiText = chalk`{red.bold padding} {green.italic woo!}`
	const colorFile = './fixtures/base16-flat-dark-f1lt3r-256.itermcolors'

	const result = ansiToSVG(String(ansiText), {
		colors: colorFile,
		paddingTop: 14,
		paddingLeft: 14,
		paddingRight: 14,
		paddingBottom: 14
	})

	t.is(result, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, 128.82, 50.45" font-family="SauceCodePro Nerd Font, Source Code Pro, Courier" font-size="14"><g fill="#e0e0e0"><rect x="0" y="0" width="128.82" height="50.45" fill="#2c3e50"/><text x="14" y="28.55" font-weight="bold" fill="#ce4435">padding</text><text x="81.21" y="28.55" font-style="italic" fill="#2ecc71">woo!</text></g></svg>')

	const outputFile = './examples/padding.svg'
	fs.writeFileSync(outputFile, result)
	// Open
	// open(outputFile)
})

