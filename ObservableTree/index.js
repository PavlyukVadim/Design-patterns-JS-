const { Observable } = require('./Observable');

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

setInterval(() => (
  a.state = {
    value: Math.floor(Math.random() * 10),
  }
), 5000);

setInterval(() => (
  b.state = {
    value: Math.floor(Math.random() * 10),
  }
), 5000);
