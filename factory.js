function CarMaker() {}
  
CarMaker.prototype.drive = function () {
  console.log("Vroom, I have " + this.doors + " doors");
};
  
CarMaker.factory = function(type) {
  var constr = type,
      newcar;

  if (typeof CarMaker[constr] !== "function") {
    throw Error(constr + " doesn't exist");
  }

  if (typeof CarMaker[constr].prototype.drive !== "function") {
    CarMaker[constr].prototype = new CarMaker();
  }

  newcar = new CarMaker[constr]();
  return newcar;
}


CarMaker.Compact = function () {
  this.doors = 4;
};

CarMaker.Convertible = function () {
  this.doors = 2;
};

var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');

corolla.drive();
solstice.drive();