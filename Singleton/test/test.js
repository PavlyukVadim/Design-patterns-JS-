const assert = require('assert');
// import Singleton from './../singleton'; ES6
const { Singleton } = require('./../singleton') // CommonJS

describe('Singleton', function() {
  it('instances a and b should be equal', function() {
    const a = new Singleton();
    const b = new Singleton();
    assert.equal(a, b);
  });
});
