/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// function coinChange(coins, amount) {
//   if (amount <= 0 || !coins.length) return 0;
//   function dp(coins, amount) {
//     if (amount < 0) return -1;
//     if (amount === 0) return 0;

//     let ans = Infinity;

//     for (let coin of coins) {
//       const subProblem = dp(coins, amount - coin);
//       if (subProblem === -1) continue;
//       ans = Math.min(ans, subProblem + 1);
//     }

//     return ans === Infinity ? -1 : ans;
//   }
//   return dp(coins, amount, );
// };

function coinChange(coins, amount) {
  if (amount == 0) return 0;
  const dp = [...new Array(amount + 1).fill(Infinity)];
  dp[0] = 0;
  // dp[i] = x，当amount===i时，需要x个coin
  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount] !== Infinity ? dp[amount] : -1;
};

console.log(coinChange([1, 2, 5], 11)) // 3
console.log(coinChange([2], 3)) // -1
console.log(coinChange([1, 2, 5], 100)) // 