var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);

  let numGroups = piles.length / 3;
  let sum = 0;
  debugger;

  for (let i = 1; i <= numGroups * 2 - 1; i += 2) {

    sum += piles[i];
  }
  return sum;
};