ESLint-plugin-Hsl
===================

[![Maintenance Status][status-image]][status-url] [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url] [![Coverage Status][coverage-image]][coverage-url] [![Code Climate][climate-image]][climate-url] [![Tidelift][tidelift-image]][tidelift-url]

> 自定义的一套 ESlint 规则，包括 Vue, React，完善中...

# 🔨 Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally. (Note that locally, per project, is strongly preferred)

```sh
$ npm install eslint --save-dev
```

If you installed `ESLint` globally, you have to install React plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-hsl --save-dev
```

# ⚙️ Configuration

Configure in the Vue project:

```json
  "extends": [
    "eslint:recommended",
    "plugin:hsl/vue"
  ]
```

Configure in the React project:

```json
  "extends": [
    "eslint:recommended",
    "plugin:hsl/react"
  ]
```

If you do not use a preset you will need to specify individual rules and add extra configuration.

Add "`hsl`" to the plugins section.

```json
{
  "plugins": [
    "hsl"
  ]
}
```

# ❓ FAQ

### What is the "Use the latest vue-eslint-parser" error?

The most rules of `eslint-plugin-vue` require `vue-eslint-parser` to check `<template>` ASTs.

Make sure you have one of the following settings in your **.eslintrc**:

*   `"extends": ["plugin:vue/recommended"]`
*   `"extends": ["plugin:vue/base"]`

If you already use other parser (e.g. `"parser": "babel-eslint"`), please move it into `parserOptions`, so it doesn't collide with the `vue-eslint-parser` used by this plugin's configuration:

```
- "parser": "babel-eslint",
  "parserOptions": {
+     "parser": "babel-eslint",
      "ecmaVersion": 2017,
      "sourceType": "module"
  }
```

# 🔑 License

ESLint-plugin-Hsl is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).


[npm-url]: https://npmjs.org/package/eslint-plugin-react
[npm-image]: https://img.shields.io/npm/v/eslint-plugin-react.svg

[travis-url]: https://travis-ci.org/yannickcr/eslint-plugin-react
[travis-image]: https://img.shields.io/travis/yannickcr/eslint-plugin-react/master.svg

[deps-url]: https://david-dm.org/yannickcr/eslint-plugin-react
[deps-image]: https://img.shields.io/david/dev/yannickcr/eslint-plugin-react.svg

[coverage-url]: https://coveralls.io/r/yannickcr/eslint-plugin-react?branch=master
[coverage-image]: https://img.shields.io/coveralls/yannickcr/eslint-plugin-react/master.svg

[climate-url]: https://codeclimate.com/github/yannickcr/eslint-plugin-react
[climate-image]: https://img.shields.io/codeclimate/maintainability/yannickcr/eslint-plugin-react.svg

[status-url]: https://github.com/yannickcr/eslint-plugin-react/pulse
[status-image]: https://img.shields.io/github/last-commit/yannickcr/eslint-plugin-react.svg

[tidelift-url]: https://tidelift.com/subscription/pkg/npm-eslint-plugin-react?utm_source=npm-eslint-plugin-react&utm_medium=referral&utm_campaign=readme
[tidelift-image]: https://tidelift.com/badges/github/yannickcr/eslint-plugin-react?style=flat
