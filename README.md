# JsDoc Exclude Member Plugin

![npm](https://img.shields.io/npm/v/exclude-member?logo=npm)
![npm](https://img.shields.io/npm/dt/exclude-member?logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fexclude-member)
![NPM](https://img.shields.io/npm/l/exclude-member)

이 플러그인은 JsDoc에서 External을 제외하기 위한 플러그인입니다.

## How to install

### NPM

```
npm install exclude-member --save-dev
```

### Yarn

```
yarn add --dev exclude-member
```

## Usage

Next you need to tell [JsDoc](http://usejsdoc.org/) to enable the plugin.

**Example jsdoc.json**

```json
{
  "plugins": ["exclude-member/exclude"]
}
```
