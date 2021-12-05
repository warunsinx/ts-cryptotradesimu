import { stateInterface } from "./interfaces/stateInterface";

export class AppState implements stateInterface {
  state: string;

  constructor(initState: string) {
    this.state = initState;
  }

  updateState(state: string) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
}
