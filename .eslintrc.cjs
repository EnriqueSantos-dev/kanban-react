module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	root: true,
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'airbnb-typescript',
		'prettier',
		'plugin:tailwindcss/recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: '<tsconfigRootDir>/tsconfig.json'
	},
	ignorePatterns: ['.eslintrc.json', 'vite.config.ts'],
	parser: '@typescript-eslint/parser',
	plugins: ['tailwindcss'],
	rules: {
		'tailwindcss/no-custom-classname': 'off',
		'tailwindcss/classnames-order': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-no-bind': 'off',
		'import/prefer-default-export': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'react/jsx-no-useless-fragment': 'warn',
		'import/no-cycle': 'off',
		'react/require-default-props': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		]
	},
	settings: {
		tailwindcss: {
			calles: ['cn']
		},
		'import/resolver': {
			alias: {
				map: [['~', './src']],
				extensions: ['.tsx', '.ts', '.js', '.json']
			}
		}
	}
};
