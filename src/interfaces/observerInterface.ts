export interface ObserverSubject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

export interface Observer {
  update(data: any);
}
