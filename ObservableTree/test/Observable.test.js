const assert = require('assert');
const { Observable } = require('./../Observable');

describe('Observable', function() {
  it('should set value in constructor', function() {
    const a = new Observable('a', {value: 1});
    assert.equal(a.state, 1);
  });

  describe('Observable2', function() {
    const f2 = function() {
      return this.state = {
        value: this.parents.a.state + this.parents.b.state,
      };
    };

    const f3 = function() {
      return this.state = {
        value: this.parents.c.state * 2,
      };
    };

    const a = new Observable('a', {value: 1}, []);
    const b = new Observable('b', {value: 1}, []);
    const c = new Observable('c', {value: 0}, [f2]);
    const d = new Observable('d', {value: 0}, [f3]);

    a.subscribe(c);
    b.subscribe(c);
    c.subscribe(d);

    // c = a + b
    // d = c * 2
    it('c = a + b', function() {
      a.state = {
        value: 5,
      };
      b.state = {
        value: 10,
      };
      assert.equal(c.state, 15);
    });
    it('d = c * 2', function() {
      a.state = {
        value: 5,
      };
      b.state = {
        value: 10,
      };
      assert.equal(c.state * 2, d.state);
    });
  });
});
