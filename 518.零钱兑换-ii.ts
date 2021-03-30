/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
  let len = coins.length
  // dp[i][j]代表着，前i种元素中，可以实现target为j的方案
  let dp = new Array(len + 1).fill(0).map(() => new Array(amount + 1).fill(0))
  // base case 当target为0时候，任何情况都为1，当coins=[]的时候，target>0时候，都为0
  for (let i = 0; i < len + 1; i++) {
    // console.log('i is', i)
    dp[i][0] = 1
  }

  // console.log(dp)
  for (let i = 1; i < len + 1; i++) {
    for (let j = 1; j < amount + 1; j++) {
      // 当j>=coins[i-1]时候，dp[i][j]可以决定是否选择第i种硬币，答案为两种方案之和
      if (j >= coins[i - 1]) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]
        // 当不能选择coins[i-1]时候，dp[i][j]只能上一个的值
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[len][amount]
};
// @lc code=end

