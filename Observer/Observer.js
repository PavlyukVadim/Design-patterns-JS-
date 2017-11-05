class Observer {
  constructor(value) {
    this.value = value;    
  }

  update() {
    console.log(this.value)
  }
};

exports.Observer = Observer; // CommonJS
