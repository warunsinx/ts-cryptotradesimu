export const displayMarketPrice = (pairs) => {
  console.log("Current Market Price in USDT :\n");
  console.table(
    pairs.map((p) => {
      return {
        Token: p.name.replace("usdt@trade", "").toUpperCase(),
        Price: `${parseFloat(p.price).toFixed(2)} USDT`,
      };
    })
  );
};

export const displayFiat = (fiat) => {
  console.log(
    `Your current fiat amount : ${parseFloat(fiat.amount).toFixed(2)} ${
      fiat.token
    }\n`
  );
};

export const displayPortfolio = (cryptos) => {
  console.log("Your current portfolio :\n");
  console.table(
    Object.values(cryptos).map((t: any) => {
      return { Token: t.token, Amount: +parseFloat(t.amount).toFixed(2) };
    })
  );
};

export const displayHistory = (history) => {
  if (history.length) {
    console.log("Transaction History :\n");
    console.table(history);
  } else console.log("There is no transaction found yet..");
};

export const displaySummary = (summary) => {
  const buy = summary.filter((d) => d.action === "buy").length;
  const sell = summary.filter((d) => d.action === "sell").length;
  console.log(`Total buy : ${buy} | Total sell : ${sell}`);
};

export const displayLine = () =>
  console.log("\n-------------------------------------------------------\n");
