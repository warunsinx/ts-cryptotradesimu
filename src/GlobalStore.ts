import { Observer, ObserverSubject } from "./interfaces/observerInterface";

export class GlobalStore implements ObserverSubject {
  private observers: Observer[] = [];
  private data: any;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.data);
    }
  }

  getData() {
    return this.data;
  }

  setData(data: any) {
    this.data = data;
    this.notifyObservers();
  }
}
