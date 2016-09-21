function Sale(price) {
  this.price = price || 100;
  this.decorators_list = [];
}

Sale.prototype.getPrice = function () {
  var price = this.price,
  i,
  max = this.decorators_list.length,
  name;
  for (i = 0; i < max; i++) {
    name = this.decorators_list[i];
    price = Sale.decorators[name].getPrice(price);
  }
  return price;
};

Sale.prototype.decorate = function (decorator) {
  this.decorators_list.push(decorator);
};

Sale.decorators = {};

Sale.decorators.fedtax = {
  getPrice: function (price) {
    return price + price * 5 / 100;
  }
};

Sale.decorators.quebec = {
  getPrice: function (price) {
    return price + price * 7.5 / 100;
  }
};

Sale.decorators.money = {
  getPrice: function (price) {
    return "$" + price.toFixed(2);
  }
};

var sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('quebec');
sale.decorate('money');
console.log( sale.getPrice() ); // $112.88