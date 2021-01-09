# eslint-config-rs

Shared eslint config for my projects. TypeScript, node.js & react oriented. Compatible with [prettier](https://prettier.io).

## Installation

Add package and eslint itself to dependencies:

```bash
npm install --save-dev eslint eslint-config-rs
```

Add `.eslintrc` configuration files to corresponding directories. Project root:

```json
{
  "extends": "rs"
}
```

Server-side sources:

```json
{
  "extends": "rs/server"
}
```

Client-side sources:

```json
{
  "extends": "rs/ui"
}
```
