let instance = null;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this.time = new Date();
    return instance; 
  }
}

var a = new Singleton();
var b = new Singleton();

console.log(a == b);
