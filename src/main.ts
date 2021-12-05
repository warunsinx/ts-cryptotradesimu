import { initPair } from "./utils/initPair";
import tokens from "./constants/tokens";
import { priceSocket } from "./utils/priceSocket";
import { rl } from "./utils/readLine";
import { portfolio } from "./Portfolio";
import { operate } from "./operate";
import { SetupFacade } from "./SetupFacade";

const pairs = initPair(tokens);

const main = () => {
  new SetupFacade(priceSocket, pairs, portfolio, rl, operate).initStart();
};

main();
