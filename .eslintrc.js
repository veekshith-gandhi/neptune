module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
		"node":true

    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
	"rules": {
		// "camelcase": "error",
		"curly": "error",
		"default-case": "error",
		"eqeqeq": "error",
		//Max length lines cannot be followed with 200 lines
		// "max-lines": [
		// 	"error",
		// 	200
		// ],
		// "max-lines-per-function": [
		// 	"error",
		// 	200
		// ],
		// "max-len": ["warn", 200],
		// "max-params": [
		// 	"error",
		// 	6
		// ],
		"no-alert": "error",
		// "no-console": "warn",
		// "no-empty-function": [
		// 	"error",
		// 	{
		// 		"allow": [
		// 			"constructors"
		// 		]
		// 	}
		// ],
		"no-lonely-if": "error",
		"no-nested-ternary": "error",
		"no-var": "error",
		"operator-assignment": "error",
		"prefer-const": "error",
		"vars-on-top": "warn",
		"object-curly-spacing": [
			"error",
			"always"
		],
		"arrow-spacing": "error",
		"comma-dangle": [
			"error",
			"never"
		],
		"comma-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
		"comma-style": [
			"error",
			"last"
		],
		"func-call-spacing": [
			"error",
			"never"
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"key-spacing": "error",
		"semi": [
			"error",
			"always"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi-style": [
			"error",
			"last"
		],
        // "no-unused-vars": "off",
        // "@typescript-eslint/no-unused-vars": ["error"],
        "no-undef": "error",
        "react/react-in-jsx-scope": "off",
        "import/no-named-as-default": "off",
        "import/no-anonymous-default-export": 0,
        "react-hooks/exhaustive-deps": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "react/prop-types": 0,
        "space-infix-ops": "error",
        "keyword-spacing": "error",
        "space-before-blocks": "error",
        "react/display-name": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
	}
}
