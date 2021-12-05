import tokens from "./constants/tokens";

class Portfolio {
  //setup singleton
  private static instance: Portfolio;

  //implement singleton
  public static getInstance(): Portfolio {
    if (!Portfolio.instance) {
      Portfolio.instance = new Portfolio();
    }
    return Portfolio.instance;
  }

  _crypto = {
    ...tokens.reduce((prev, curr) => {
      const tokenName = curr.replace("usdt", "");
      prev[tokenName] = { token: tokenName.toUpperCase(), amount: 0 };
      return prev;
    }, {}),
    usdt: {
      token: "USDT",
      amount: 0,
    },
  };

  _history: {
    action: "buy" | "sell";
    token: string;
    amount: number;
    price: number;
    datetime: any;
  }[] = [];

  public getCrypto(token: string) {
    return this._crypto[token];
  }

  public getAllCrypto() {
    return this._crypto;
  }

  public getHistory() {
    return this._history;
  }

  public inclCrypto(token: string, amount: number) {
    this._crypto[token].amount += amount;
  }

  public declCrypto(token: string, amount: number) {
    this._crypto[token].amount -= amount;
  }

  public addHistory(transaction: {
    action: "buy" | "sell";
    token: string;
    amount: number;
    price: number;
    datetime: any;
  }) {
    this._history.push(transaction);
  }
}

export const portfolio = new Portfolio();
