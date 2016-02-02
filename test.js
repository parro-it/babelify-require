const test = require('tape');
const babelifyRequire = require('./');

test('return module exports', t => {
  babelifyRequire(__dirname + '/fixtures/simple.js')
    .then(result => {
      t.equal(result.default.answer, 42);
      t.end();
    })
    .catch(t.end);
});


test('sub module are not babelified but could be required', t => {
  babelifyRequire(__dirname + '/fixtures/with-deps.js')
    .then(result => {
      t.equal(result.default.sense, 'what\'s the sense?');
      t.end();
    })
    .catch(t.end);
});
