const ansiTo = require('ansi-to')
const he = require('he')

// Round: Make number values smaller in output
// Eg: 14.23734 becomes 14.24
// Credit @Chris Martin: https://stackoverflow.com/a/43012696/2816869
const round = x => {
	const rounded = Number(Math.round(x + 'e2') + 'e-2')
	return rounded
}

const decorators = {
	text: ({value, x, y, attrStr}) => {
		x = round(x)
		y = round(y)

		let space = ''
		if (attrStr) {
			space = ' '
		}

		return `<text x="${x}" y="${y}"${space}${attrStr}>${value}</text>`
	},

	rect: ({x, y, width, height, color, opacity}) => {
		x = round(x)
		y = round(y)
		height = round(height)
		width = round(width)

		let attrStr = ''
		if (opacity) {
			attrStr += `opacity="${opacity}"`
		}

		let space = ''
		if (attrStr) {
			space = ' '
		}

		return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${color}"${space}${attrStr}/>`
	},

	path: ({d, color}) => {
		return `<path d="${d}" stroke="${color}"/>`
	},

	container: ({foregroundColor, content, width, height, font}) => {
		const attrs = []
		if (font) {
			attrs.push(`font-family="${font.family}"`)
			attrs.push(`font-size="${font.size}"`)
		}
		const attrStr = attrs.join(' ')

		let space = ''
		if (attrStr) {
			space = ' '
		}

		height = round(height)
		width = round(width)

		const containerTemplate = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, ${width}, ${height}"${space}${attrStr}><g fill="${foregroundColor}">${content}</g></svg>`
		return containerTemplate
	}
}

// Some SVG Implementations drop whitespaces
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xml:space
const adjustXforWhitespace = (text, x) => {
	const leadingSpace = text.match(/^\s*/g)
  	return x + leadingSpace[0].length
}

const handler = (ansi, opts) => {
	let content = ''

	const baseForegroundColor = opts.colors.foregroundColor

	const font = {
		size: 14,
		width: 8.4013671875,
		height: 14,
		face: opts.fontFace,
		family: opts.fontFamily,
		lineHeight: opts.lineHeight,
		emHeightAscent: 10.5546875,
		emHeightDescent: 3.4453125
	}

	const textArea = ansi.textArea
	const textAreaWidth = textArea.columns * font.width
	const textAreaHeight = (textArea.rows * (font.lineHeight + 1)) + font.emHeightDescent

	const width = opts.paddingLeft + textAreaWidth + opts.paddingRight
	const height = opts.paddingTop + textAreaHeight + opts.paddingBottom

	const offsetTop = opts.paddingTop + font.lineHeight - font.emHeightDescent
	const offsetLeft = opts.paddingLeft

	content += decorators.rect({
		x: 0,
		y: 0,
		width,
		height,
		color: opts.colors.backgroundColor
	})

	ansi.chunks.forEach(chunk => {
		const {
			type,
			value,
			position,
			style
		} = chunk

		if (type !== 'text') {
			return
		}

		const x = offsetLeft + (adjustXforWhitespace(value, position.x) * font.width)
		const y = offsetTop + (position.y + (font.lineHeight * position.y))
		const w = font.width * value.length

		const fontStyle = {}
		const attrs = []

		if (style.bold) {
			attrs.push(`font-weight="bold"`)
		}

		if (style.italic) {
			attrs.push(`font-style="italic"`)
		}

		let opacity = 1

		if (style.dim) {
			opacity = 0.5
		}

		if (style.backgroundColor) {
			const backgroundColor = opts.colors[style.backgroundColor]

			const rectStyles = {
				x,
				y: ((y - font.lineHeight) + font.emHeightDescent),
				width: w,
				height: font.lineHeight + 1,
				color: backgroundColor
			}

			if (opacity) {
				rectStyles.opacity = opacity
			}

			content += decorators.rect(rectStyles)
		}

		let foregroundColor
		if (style.foregroundColor) {
			foregroundColor = opts.colors[style.foregroundColor]
			attrs.push(`fill="${foregroundColor}"`)
		}

		// Underline & Strikethrough:
		// Some SVG implmentations do not support underline and
		// strikethrough for <text> elements (see Sketch 49.2)

		if (style.underline) {
			const yOffset = font.height * 0.14
			const ys = y - -yOffset
			const xw = x + w
			const d = `M${x},${ys} L${xw},${ys} Z`
			const color = foregroundColor || baseForegroundColor
			content += decorators.path({d, color})
		}

		if (style.strikethrough) {
			const yOffset = font.height * 0.3
			const ys = y - yOffset
			const xw = x + w
			const d = `M${x},${ys} L${xw},${ys} Z`
			const color = foregroundColor || baseForegroundColor
			content += decorators.path({d, color})
		}

		const attrStr = attrs.join(' ')

		// Do not output elements containing whitespace with no style
		if (value.replace(/ /g, '').length === 0 && attrStr.length === 0) {
			return
		}

		const entified = he.encode(value, {decimal: false})
		content += decorators.text({
			value: entified,
			x, y, fontStyle, attrStr
		})
	})

	const baseStyles = {
		foregroundColor: baseForegroundColor,
		backgroundColor: opts.colors.backgroundColor,
		content,
		width,
		height,
		font
	}
	return decorators.container(baseStyles)
}

const SVG = {
	name: 'svg',
	handler,
	opts: {
		// Pixel Values:
		fontSize: 14,
		lineHeight: 18,
		paddingTop: 0,
		paddingLeft: 0,
		paddingBottom: 0,
		paddingRight: 0,

		// Font: (use monospace fonts for best results)
		fontFamily: 'SauceCodePro Nerd Font, Source Code Pro, Courier',

		// Assume we would like a Retina-ready image
		scale: 1
	}
}

module.exports = ansiTo.plugin(SVG)
