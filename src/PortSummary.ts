import { Observer, ObserverSubject } from "./interfaces/observerInterface";

export class PortSummary implements Observer {
  private data: any;

  constructor(store: any) {
    store.registerObserver(this);
    this.data = store.getData();
  }

  getData() {
    return this.data;
  }

  update(data: any) {
    this.data = data;
  }
}
