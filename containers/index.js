const defaultContainer = ({
	foregroundColor, content, width, height, backgroundColor, attributes
}) => {
	const attrs = Object.keys(attributes).reduce((acc, key) => {
		const val = attributes[key]
		return `${acc} ${key}="${val}"`
	}, '')
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0, 0, ${width}, ${height}"${attrs}><g fill="${foregroundColor}"><rect x="0" y="0" width="${width}" height="${height}" fill="${backgroundColor}"/>${content}</g></svg>`
}

module.exports = defaultContainer
