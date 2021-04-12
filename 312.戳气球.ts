/*
 * @lc app=leetcode.cn id=312 lang=typescript
 *
 * [312] 戳气球
 */

// @lc code=start

function maxCoins(nums: number[]): number {
  const n = nums.length
  const newNums = [1, ...nums, 1]
  let dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0))
  // for (let i = 0; i <= n + 1; i++) {
  //   dp[i][i] = 0
  //   if (i < n + 1)
  //     dp[i][i + 1] = 0
  // }
  // dp[i][j] 定义为i开区间，到j开区间的value，意思为不取i和j,ƒ
  for (let i = n; i >= 0; i--) {
    for (let j = i + 1; j <= n + 1; j++) {
      // dp[i][j] = 0
      for (let k = i + 1; k < j; k++) {
        // console.log(i, k, j)
        dp[i][j] = Math.max(dp[i][j],
          (dp[i][k] + dp[k][j] + newNums[i] * newNums[j] * newNums[k]))
      }
    }
  }
  // console.log(dp)
  return dp[0][n + 1]
};
// "[3,1,5,8]"
// "[1]"

// @lc code=end

