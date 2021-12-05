import WebSocket from "ws";

export const priceSocket = (pairs: any) => {
  const priceSocket = new WebSocket(getBinanceSocketUrl(pairs));
  priceSocket.onopen = () => {
    priceSocket.onmessage = (event) => {
      const data = JSON.parse(event.data.toString());
      pairs.forEach((pair: { name: string; price: undefined | number }) => {
        if (data.stream === pair.name) {
          pair.price = data.data.p;
        }
      });
    };
  };
};

function getBinanceSocketUrl(pairs: any[]) {
  const wsUrl = "wss://stream.binance.com:9443";
  const pairListQuery = pairs
    .map((pair, i) => `${pair.name}${i !== pairs.length - 1 ? "/" : ""}`)
    .reduce((prev, curr) => (prev += curr), "");
  return `${wsUrl}/stream?streams=${pairListQuery}`;
}
