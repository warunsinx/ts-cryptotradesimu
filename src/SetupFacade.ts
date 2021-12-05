import { AppState } from "./AppState";

export class SetupFacade {
  private priceSocket;
  private pairs;
  private portfolio;
  private rl;
  private operate;

  constructor(priceSocket, pairs, portfolio, rl, operate) {
    this.priceSocket = priceSocket;
    this.pairs = pairs;
    this.portfolio = portfolio;
    this.rl = rl;
    this.operate = operate;
  }

  initStart() {
    const appState = new AppState("online");
    if (appState.getState() === "online") {
      this.priceSocket(this.pairs);
      console.log("Welcome to Crypto Trading Simulator !");
      this.rl.question(
        "How much (USDT) do you want to start with : ",
        (input) => {
          this.portfolio.inclCrypto("usdt", +input);
          this.operate(this.pairs);
        }
      );
    } else console.log("Please connect to the internet..");
  }
}
