# parcel-plugin-stringify-anything
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/LeetCode-OpenSource/parcel-plugin-stringify-anything/blob/master/LICENSE) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) [![npm version](https://img.shields.io/npm/v/parcel-plugin-stringify-anything.svg?style=flat)](https://www.npmjs.com/package/parcel-plugin-stringify-anything)

Parcel plugin for importing any file types as string.

## Installation
Using [yarn](https://yarnpkg.com/):
```bash
yarn add parcel-plugin-stringify-anything --dev
```

Or via [npm](https://docs.npmjs.com):
```bash
npm install parcel-plugin-stringify-anything --save-dev
```

Then, specify the file types to import as string. (e.g., the Markdown file):

```diff
{
+ "assetTypesToStringify": ["md"],
  "devDependencies": {
    "parcel-bundler": "^1.10.3",
    "parcel-plugin-stringify-anything": "^1.0.0"
  }
}

```
