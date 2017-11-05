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

const observable = new Observable();
observable.subscribe(1)
observable.subscribe('a')
observable.subscribe(true)

observable.notifySubscribers();












