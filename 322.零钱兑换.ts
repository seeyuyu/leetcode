/*
 * @lc app=leetcode.cn id=322 lang=typescript
 * dfs + 剪枝
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  let memo = new Array(amount + 1)
  memo[0] = 0
  // console.log('memo is', memo)
  function dp(n) {
    if (memo[n]) return memo[n]
    if (n === 0) return 0
    if (n < 0) return -1
    let res = Infinity;

    for (let coin of coins) {
      let sub = dp(n - coin)
      if (sub == -1) {
        continue
      }
      // console.log('sub is', sub)
      res = Math.min(res, 1 + sub)
    }
    memo[n] = res != Infinity ? res : -1
    return memo[n]
  }
  return dp(amount)
};

// "[1,2,5] \n 11"
// "[1] \n 0"
// "[2] \n 3"
// "[1] \n 1"
// "[1,2,5] \n 100"



// @lc code=end

