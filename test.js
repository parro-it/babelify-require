const test = require('tape');
const babelifyRequire = require('./');

test('it work!', t => {
  const result = babelifyRequire();
  t.equal(result, 42);
  t.end();
});
