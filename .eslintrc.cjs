module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['xo'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		// Sobreescribir las reglas
		// Espacios en los objetos
		'object-curly-spacing': ['error', 'always'],
		// Sin puntos y comas
		semi: ['error', 'never'],
		'no-await-in-loop': ['off'],
		'no-return-await': ['off'],
		curly: ['off'],
		camelcase: ['off'],
	},
}
