import { rl } from "./utils/readLine";

export const buyCrypto = (pairs, portfolio, callback) => {
  rl.question("\nSelect a coin to buy from (index) : ", (coin) => {
    if (isNaN(coin as any) || +coin > pairs.length - 1) {
      console.log("\nUse your brain and select the right option please..");
      return buyCrypto(pairs, portfolio, callback);
    }
    const tokenName = pairs[coin].name.replace("usdt@trade", "");
    const tokenPrice = +pairs[coin].price;
    rl.question(`\nAmount of ${tokenName} to buy : `, (amount) => {
      if (portfolio.getCrypto("usdt").amount >= +amount * tokenPrice) {
        portfolio.declCrypto("usdt", +amount * tokenPrice);
        portfolio.inclCrypto(tokenName, +amount);
        portfolio.addHistory({
          action: "buy",
          token: tokenName.toUpperCase(),
          amount,
          price: tokenPrice,
          datetime: new Date(),
        });
        console.log(
          `\nBought ${amount} ${tokenName.toUpperCase()} successfully !`
        );
      } else console.log("\nNot enough USDT !!!");
      callback();
    });
  });
};

export const sellCrypto = (pairs, portfolio, callback) => {
  rl.question("\nSelect a coin to sell from (index) : ", (coin) => {
    if (isNaN(coin as any) || +coin > pairs.length - 1) {
      console.log("\nUse your brain and select the right option please..");
      return sellCrypto(pairs, portfolio, callback);
    }
    const tokenName = pairs[coin].name.replace("usdt@trade", "");
    const tokenPrice = +pairs[coin].price;
    rl.question(
      `\nAmount of ${tokenName} to sell (In Wallet : ${
        portfolio.getCrypto(tokenName).amount
      }) : `,
      (amount) => {
        if (
          portfolio.getCrypto(tokenName).amount > 0 &&
          +amount > 0 &&
          portfolio.getCrypto(tokenName).amount >= +amount
        ) {
          portfolio.declCrypto(tokenName, amount);
          portfolio.inclCrypto("usdt", +amount * tokenPrice);
          portfolio.addHistory({
            action: "sell",
            token: tokenName.toUpperCase(),
            amount,
            price: tokenPrice,
            datetime: new Date(),
          });
          console.log(
            `\nSold ${amount} ${tokenName.toUpperCase()} successfully !`
          );
        } else console.log(`\nNot enough ${tokenName} to sell !!!`);
        callback();
      }
    );
  });
};
