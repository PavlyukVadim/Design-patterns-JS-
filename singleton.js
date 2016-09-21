function Universe() {
  var instance = this;
  
  this.start_time = 0;
  this.bang = "Big";
  
  // redefining constructor
  Universe = function () {
    return instance;
  };
}

var uni = new Universe();
var uni2 = new Universe();

console.log(uni == uni2);