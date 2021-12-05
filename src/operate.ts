import { portfolio } from "./Portfolio";
import { rl } from "./utils/readLine";
import { buyCrypto, sellCrypto } from "./trade";
import { GlobalStore } from "./GlobalStore";
import { PortSummary } from "./PortSummary";
import { displaySummary } from "./operations";
import {
  displayMarketPrice,
  displayPortfolio,
  displayHistory,
  displayFiat,
  displayLine,
} from "./operations";

export const operate = (pairs: any) => {
  const store = new GlobalStore();
  store.setData(portfolio.getHistory());
  const summary = new PortSummary(store);

  displayLine();
  console.log("[1] View Market Price");
  console.log("[2] View Portfolio");
  console.log("[3] View Trade History");
  console.log("[4] Buy Crypto");
  console.log("[5] Sell Crypto");
  console.log("[6] View Summary");
  console.log("[0] Exit");
  rl.question("\nSelect an option : ", (input) => {
    if (input === "0") {
      return process.exit();
    } else {
      if (input === "1") {
        displayLine();
        displayMarketPrice(pairs);
        operate(pairs);
      } else if (input === "2") {
        displayLine();
        displayPortfolio(portfolio.getAllCrypto());
        operate(pairs);
      } else if (input === "3") {
        displayLine();
        displayHistory(portfolio.getHistory());
        operate(pairs);
      } else if (input === "4") {
        displayLine();
        displayFiat(portfolio.getCrypto("usdt"));
        displayMarketPrice(pairs);
        buyCrypto(pairs, portfolio, () => operate(pairs));
      } else if (input === "5") {
        displayLine();
        displayPortfolio(portfolio.getAllCrypto());
        console.log("");
        displayMarketPrice(pairs);
        sellCrypto(pairs, portfolio, () => operate(pairs));
      } else if (input === "6") {
        displayLine();
        displaySummary(summary.getData());
        operate(pairs);
      } else operate(pairs);
    }
  });
};
