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

// export default Singleton; ES6
exports.Singleton = Singleton; // CommonJS
