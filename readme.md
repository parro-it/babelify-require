# babelify-require

> Apply babel to a module and then require it.

[![Travis Build Status](https://img.shields.io/travis/parro-it/babelify-require.svg)](http://travis-ci.org/parro-it/babelify-require)
[![NPM module](https://img.shields.io/npm/v/babelify-require.svg)](https://npmjs.org/package/babelify-require)
[![NPM downloads](https://img.shields.io/npm/dt/babelify-require.svg)](https://npmjs.org/package/babelify-require)

## Installation

```bash
npm install --save babelify-require
```

## Usage

```javascript
  const babelifyRequire = require('babelify-require');
  const result = await babelifyRequire('./es6-module.js');
  //result === module exports
```

## License


The MIT License (MIT)

Copyright (c) 2015 parro-it
