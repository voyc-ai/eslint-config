# @voyc-ai/eslint-config

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> ESLint config for Voyc

## About

Shareable configs are designed to work with the `extends` feature of `eslint` files.
You can learn more about
[shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

Install the configuration as well as `eslint` and `prettier`

```sh
$ npm install --save-dev @voyc-ai/eslint-config eslint prettier
```

## Usage

Add this to your `.eslintrc` file in the root of your project:

```json
{
  "extends": "@voyc-ai"
}
```

Then add the scripts to your `package.json`:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

### Add Badge [![voyc-eslint](https://img.shields.io/badge/ESLint-Voyc-%2343297B)](https://www.voyc.ai/)

```
[![voyc-eslint](https://img.shields.io/badge/ESLint-Voyc-%2343297B)](https://www.voyc.ai/)
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request
