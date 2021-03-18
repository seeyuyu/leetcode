/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let n = nums.length
  // console.log(n)
  let dp = new Array(n).fill(null)
  dp[0] = nums[0]
  let max = nums[0]
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
    max = Math.max(max, dp[i])
  }
  // console.log('dp is', dp)
  return max
};
// @lc code=end

