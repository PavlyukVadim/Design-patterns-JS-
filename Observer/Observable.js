class Observable {
  constructor(name, initialMainState, updateFunctions) {
    this.name = name;
    this.mainState = initialMainState;
    this.subscribers = [];
    this.parents = [];
    this.updateFunctions = updateFunctions;
  }

  get state() {
    return this.mainState.value;
  }

  set state(newValue) {
    this.mainState = Object.assign({}, this.state, newValue);
    this.notifySubscribers();
  }

  subscribe(Subscriber) {
    this.subscribers.push(Subscriber);
    Subscriber.parents[this.name] = this;
  }

  update() {
    for (let func of this.updateFunctions) {
      func.call(this);
    }
  }

  notifySubscribers() {
    for (let subscriber of this.subscribers) {
      subscriber.update();
    }
  }
};

exports.Observable = Observable; // CommonJS
