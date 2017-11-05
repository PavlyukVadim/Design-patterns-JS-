class Observable {
  constructor() {
    this.subscribers = [];    
  }

  subscribe(Subscriber) {
    this.subscribers.push(Subscriber);
  }

  notifySubscribers() {
    for (let subscriber of this.subscribers) {
      console.log(subscriber);
    }
  }
};

exports.Observable = Observable; // CommonJS
