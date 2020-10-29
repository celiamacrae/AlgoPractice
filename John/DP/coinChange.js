const { expect } = require('chai');

/*
322. Coin Change

LEETCODE MEDIUM

https://leetcode.com/problems/coin-change/

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

*/

var coinChange = function(coins, amount) {
  if (amount < 1) return 0
  if (coins.length === 0) return -1

  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i < dp.length; i++) {
      for (let j = 0; j < coins.length;j++) {
          if (i - coins[j] >= 0) {
              dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
          }

      }
  }

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1]
};

describe('coinChange', () => {
  it('Test case 1', () => {
      expect(coinChange([1,2,5], 11)).to.equal(3);
  });
  it('Test case 2', () => {
    expect(coinChange([2], 3)).to.equal(-1);
  });
  it('Test case 3', () => {
    expect(coinChange([1], 0)).to.equal(0);
  });
  it('Test case 4', () => {
    expect(coinChange([1], 1)).to.equal(1);
  });
  it('Test case 5', () => {
    expect(coinChange([1], 2)).to.equal(2);
  });
});
