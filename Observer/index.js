const { Observable } = require('./Observable');
const { Observer } = require('./Observer');


const observable = new Observable();

const observer1 = new Observer(1);
const observer2 = new Observer('a');
const observer3 = new Observer(true);

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);

observable.notifySubscribers();
