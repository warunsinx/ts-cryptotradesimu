export const initPair = (pairs: string[]) => {
  const formatPair = pairs.reduce((prev, curr) => {
    prev[curr] = {
      name: `${curr}@trade`,
      price: undefined,
    };
    return prev;
  }, {});
  return Object.values(formatPair);
};
