'use strict';

const babel = require('babel-core');
const co = require('co');
const thenify = require('thenify');
const transformFile = thenify(babel.transformFile);
const preset2015 = require('babel-preset-es2015');
const requireFromString = require('require-from-string');

function * babelifyRequire(modulePath) {
  const result = yield transformFile(modulePath, {
    presets: [preset2015]
  });
  return requireFromString(result.code, modulePath);
}

module.exports = co.wrap(babelifyRequire);

