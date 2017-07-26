# eslint-config-npmpty

[![version](https://img.shields.io/npm/v/eslint-config-npmpty.svg)](https://www.npmjs.com/package/eslint-config-npmpty)
[![liscense](https://img.shields.io/npm/l/eslint-config-npmpty.svg)](https://www.npmjs.com/package/eslint-config-npmpty)
[![Build Status](https://travis-ci.org/thegitm8/eslint-config-npmpty.svg?branch=master)](https://travis-ci.org/thegitm8/eslint-config-npmpty)
[![Code Climate](https://codeclimate.com/github/thegitm8/eslint-config-npmpty/badges/gpa.svg)](https://codeclimate.com/github/thegitm8/eslint-config-npmpty)
[![Known Vulnerabilities](https://snyk.io/test/github/thegitm8/eslint-config-npmpty/badge.svg)](https://snyk.io/test/github/thegitm8/eslint-config-npmpty)
[![npm downloads](https://img.shields.io/npm/dt/eslint-config-npmpty.svg)](https://www.npmjs.com/package/eslint-config-npmpty)


An [ESLint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for npmpty. The goal of this configuration is to put code reuse and code readability first. This is an ongoing research centered around [npmpty](https://www.npmjs.com/package/npmpty).

## Install

```
npm install --save-dev eslint-config-npmpty
```

## Usage

Create an `.eslintrc` file in you package root and reference this package (ESlint will fill in the `eslint-config-` part for you).

```js
{
    "extends": "npmpty"
}
```
